import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShimmerCard from '../ShimmerCard';
import { filterData } from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../action';
import { Link } from 'react-router-dom';

const UserPenel = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setfilteredCourses] = useState([]);
  const [searchText, setSearchText] = useState('');

  const Courses= useSelector((state) => state.cartItems);
  const dispatch = useDispatch()

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/Courses');
      setCourses(response.data);
      setfilteredCourses(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  if (!courses) return null;


  return courses.length === 0 ? (
    <ShimmerCard />
  ) : (
    <>
      <div className="w-[40%] max-sm:w-[80%] m-auto pr-4 flex items-center border-solid border-2 border-[rgba(40,44,63,.3)] rounded-md ">
        <div className="flex-1 py-0 px-4">
          <input
            data-testid="search-input"
            type="text"
            className="w-[50%] h-[50px] outline-0 border-none overflow-hidden text-ellipsis align-middle font-mono font-medium max-sm:w-[100%]"
            placeholder="Search for Courses"
            value={searchText}
            onChange={(e) => {
              if (!e.target.value) {
                setSearchText(e.target.value);
                setfilteredCourses(courses);
                return;
              }
              setSearchText(e.target.value);
              const data = filterData(searchText, courses);
              setfilteredCourses(data);
            }}
          />
        </div>
        <span>🔍</span>
      </div>

      {filteredCourses?.length > 0 ? (
        <div className="flex flex-wrap justify-center max-w-[1200px] w-full my-0 mx-auto">
          {filteredCourses.map((courses) => {
            return (

              <div key={courses.id} className="w-[300px] h-[450px] m-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] ">
                <Link to= "/videopage" >
                  <img src={courses.courseImg} alt={courses.courseName} />
                </Link>
                <h2 className="pl-4 text-2xl font-semibold text-center border-b-2 border-black bg-black text-white">{courses.courseName}</h2>
                <div className="px-5">
                  <p className="text-xl font-semibold">Instructor: {courses.courseInstructor}</p>
                  <p className="text-xl font-semibold" >Duration: {courses.courseDuration}</p>
                  <p className="text-xl font-semibold">Starting Date: {courses.courseStartingDate}</p>
                  <p className="text-xl font-semibold">Price : {courses.coursePrice}</p>
                  <p className="text-xl font-semibold">Categories: {courses.categories}</p>
                </div>

                <div
                  onClick={() => dispatch(addToCart(courses))}
                  className='border-green-800 border-2 w-[200px] font-semibold text-xl text-center m-auto mt-4 cursor-pointer' >Add to Cart</div>
              </div>

            );
          })}
        </div>
      ) : (
        <div className="flex flex-1 justify-center items-center font-mono text-lg">
          No Course found.
        </div>
      )}
    </>


  );
};

export default UserPenel;
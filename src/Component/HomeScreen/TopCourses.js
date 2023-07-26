import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import ShimmerCard from '../ShimmerCard';
const TopCourses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);


  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/Courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return courses.length === 0 ? (
    <ShimmerCard />
  ) :  (
    <div className="flex flex-wrap pt-10 m-auto w-[90%]" >
      {courses.slice(0, 4).map((course) => (
        <div key={course.id} className="w-[300px] h-[450px] rounded-lg m-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] ">
          <img src={course.courseImg}/>
          <h2 className="pl-4 text-2xl font-semibold text-center border-b-2 border-black bg-black text-white">{course.courseName}</h2>
          <div className="px-5">
            <p className="text-xl font-semibold">Instructor: {course.courseInstructor}</p>
            <p className="text-xl font-semibold" >Duration: {course.courseDuration}</p>
            <p className="text-xl font-semibold">Starting Date: {course.courseStartingDate}</p>
            <p className="text-xl font-semibold">Ending Date: {course.courseEndingDate}</p>
            <p className="text-xl font-semibold">Categories: {course.categories}</p>
          </div>
          <div className='flex justify-around mt-5'>
             <p className='text-xl font-semibold pt-2'>APPLY CUPPON</p>
             <p className='border-red-600 border-2 p-2 font-semibold font-mono'>FREEGET40</p>

          </div>         
        </div>
      ))}
     
    </div>
  )
}

export default TopCourses;
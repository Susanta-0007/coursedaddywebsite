
import React, { useState, useEffect } from "react";
import axios from "axios";
import ShimmerCard from "../ShimmerCard";


const Courses = () => {

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

  const handleDelete = (courseId) => {
    
    axios
      .delete(`http://localhost:8000/Courses/${courseId}`)
      .then((response) => {
        
        fetchCourses();
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
      });
  };

  const handleEdit = (course) => {
    // Upcoming 
        
  };

  return courses.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="flex flex-wrap pt-10 " >
      {courses.map((course) => (
        <div key={course.id} className="w-[300px] h-[450px] m-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] rounded-lg">
          <img src={course.courseImg} />
          <h2 className="pl-4 text-2xl font-semibold text-center border-b-2 border-black bg-black text-white">{course.courseName}</h2>
          <div className="px-5">
            <p className="text-xl font-semibold">Instructor: {course.courseInstructor}</p>
            <p className="text-xl font-semibold" >Duration: {course.courseDuration}</p>
            <p className="text-xl font-semibold">Starting Date: {course.courseStartingDate}</p>
            <p className="text-xl font-semibold">Ending Date: {course.courseEndingDate}</p>
            <p className="text-xl font-semibold">Categories: {course.categories}</p>
          </div>
          <div className="flex justify-around pt-2">
            <div
              onClick={() => handleEdit(course.id)}
              className="border-2 border-black w-[100px] p-2 bg-black text-white text-center font-semibold cursor-pointer">EDIT</div>
            <div
              onClick={() => handleDelete(course.id)}
              className="border-2 border-black w-[100px] p-2 bg-black text-red-500 text-center font-semibold cursor-pointer">DELETE</div>
          </div>
        </div>
      ))}
     
    </div>
  )
}

export default Courses;
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const AddNewCourse = () => {
    const [courseData, setCourseData] = useState({
        courseName: "",
        courseInstructor: "",
        courseImg:"",
        coursePrice:"",
        courseDuration: "",
        courseStartingDate: "",
        courseEndingDate: "",
        categories: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/Courses", courseData)
            .then((response) => {
                console.log("Course created successfully:", response.data);
               
                window.location.href = "/adminlogin/adminpenel/courses";
            })
            .catch((error) => {
                console.error("Error creating course:", error);
               
            });
    };

    return (
        <form className="max-w-sm mx-auto mt-8" onSubmit={handleSubmit}>
            <div className='text-3xl font-semibold pb-10'>New Course Registration</div>
            <div className="mb-4 w-[90%] m-auto">
                <label className="block text-gray-700 text-sm font-bold mb-2">Course Name:</label>
                <input
                    required
                    type="text"
                    name="courseName"
                    value={courseData.courseName}
                    onChange={handleChange}
                    className=" border-2 border-black rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-[90%] m-auto">
                <label className="block text-gray-700 text-sm font-bold mb-2">Course Instructor:</label>
                <input
                    required
                    type="text"
                    name="courseInstructor"
                    value={courseData.courseInstructor}
                    onChange={handleChange}
                    className="border-2 border-black  rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-[90%] m-auto">
                <label className="block text-gray-700 text-sm font-bold mb-2">Course Duration:</label>
                <input
                    required
                    type="text"
                    name="courseDuration"
                    value={courseData.courseDuration}
                    onChange={handleChange}
                    className="border-2 border-black  rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-[90%] m-auto">
                <label className="block text-gray-700 text-sm font-bold mb-2">Course Starting Date:</label>
                <input
                    required
                    type="text"
                    name="courseStartingDate"
                    value={courseData.courseStartingDate}
                    onChange={handleChange}
                    className="border-2 border-black  rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-[90%] m-auto">
                <label className="block text-gray-700 text-sm font-bold mb-2">Course Ending Date:</label>
                <input
                    required
                    type="text"
                    name="courseEndingDate"
                    value={courseData.courseEndingDate}
                    onChange={handleChange}
                    className="border-2 border-black  rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-[90%] m-auto">
                <label className="block text-gray-700 text-sm font-bold mb-2">Categories:</label>
                <input
                    required
                    type="text"
                    name="categories"
                    value={courseData.categories}
                    onChange={handleChange}
                    className="border-2 border-black  rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-[90%] m-auto">
                <label className="block text-gray-700 text-sm font-bold mb-2">Course Image URL :</label>
                <input
                    required
                    type="text"
                    name="categories"
                    value={courseData.categories}
                    onChange={handleChange}
                    className="border-2 border-black  rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-[90%] m-auto">
                <label className="block text-gray-700 text-sm font-bold mb-2">Price(INR) :</label>
                <input
                    required
                    type="text"
                    name="categories"
                    value={courseData.categories}
                    onChange={handleChange}
                    className="border-2 border-black  rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                type="submit"
                className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>
    )
}

export default AddNewCourse;
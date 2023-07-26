import React from 'react'

const Instructor = () => {
    return (
        <div className='mt-10 flex  w-[60%] m-auto justify-around  max-sm:flex-col max-sm:w-[100%] max-sm:justify-center'>
            <div className='w-[40%] max-sm:w-[80%] '>
                <img className='w-[]' src='https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg' />
            </div>
            <div className='w-[50%] max-sm:w-[80%] max-sm:ml-10'>
                <p className='text-3xl font-bold pt-16'>Become an instructor</p>
                <p className='text-xl pt-4 pb-4'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                <button className='p-2 font-xl font-bold text-white bg-black border-2 border-black'>Start teaching today</button>
            </div>
        </div>
    )
}

export default Instructor;
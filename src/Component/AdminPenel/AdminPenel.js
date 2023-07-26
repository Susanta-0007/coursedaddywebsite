import React from 'react'
import { Link } from 'react-router-dom';

const AdminPenel = ({onLogout}) => {
  
    return (
        <div>
            <div className="flex flex-col justify-center items-center ">
                <h2 className="text-2xl border-b-2 border-black mb-6">Welcome to Admin Dashboard!</h2>
                <div className='flex flex-col justify-between gap-10'>
                    <Link to="/adminlogin/adminpenel/addnewcourse">
                        <div className='border-2 border-black p-2 text-white bg-black font-semibold'>ADD NEW COURSE</div>
                    </Link>
                    <Link to="/adminlogin/adminpenel/courses">
                        <div className='border-2 border-black p-2 text-white bg-black font-semibold text-center'>COURSES</div>
                    </Link>
                    <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onLogout}
        >
          Logout
        </button>

                </div>
            </div>

        </div>
    )
}

export default AdminPenel;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Component/action';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (courseId) => {
    dispatch(removeFromCart(courseId));
  };

  const handleIncreaseQuantity = (courseId) => {
    dispatch(increaseQuantity(courseId));
  };

  const handleDecreaseQuantity = (courseId) => {
    dispatch(decreaseQuantity(courseId));
  };

  const getTotalPayment = () => {
    return cartItems.reduce((total, course) => total +course.coursePrice * course.quantity, 0);
  };

  const totalQuantity = cartItems.reduce((acc, course) => acc + course.quantity, 0);
  const totalPayment = getTotalPayment();


  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Cart - {totalQuantity}</h2>
      {cartItems.length === 0 ? (
        <p className='text-3xl font-semibold text-center'>No items in the cart.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {cartItems.map((course) => (
            <li key={course.id} className="py-4 flex items-center w-[50%] m-auto ">
              <div className="w-[50%]">
                <img
                  src={course.courseImg}
                  alt={course.courseName}
                  className="h-[100px] w-[200px] object-cover rounded-md bg-slate-400"
                />
              </div>
              <div className="w-3/4">
                <p className="text-lg font-semibold">Course Name: {course.courseName}</p>
                <p className="text-gray-600 text-lg font-semibold">Instructor Name: {course.courseInstructor}</p>
                <p className="text-lg font-semibold">Price: {course.coursePrice}</p>
              </div>
              <div className="flex items-center space-x-2 ml-auto">
                <button
                  className="text-xl font-bold px-2"
                  onClick={() => handleDecreaseQuantity(course.id)}
                >
                  -
                </button>
                <span className="text-xl font-semibold">{course.quantity}</span>
                <button
                  className="text-xl font-bold px-2"
                  onClick={() => handleIncreaseQuantity(course.id)}
                >
                  +
                </button>
                <button
                  className="text-red-600 font-semibold"
                  onClick={() => handleRemove(course.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className='text-xl font-semibold text-center '>Total Amount : {totalPayment.toFixed(2)}</div>
      <Link to="/payment"> <div className=" w-[200px] m-auto mt-10 text-center cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Procced to Pay</div></Link>
    </div>
  );
};

export default Cart;

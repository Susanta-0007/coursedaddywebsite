import React from 'react'

const TopCatagories = () => {
  return (
    <>
    <div className='w-[100%] h-10 flex justify-center mt-10 text-2xl font-bold text-gray-600'> TOP CATEGORIES</div>
    <div
      data-testid='shimmer'
      className='flex flex-wrap justify-around max-w-[90%] w-full my-0 mx-auto'
    >
      
      <div className=''>
        <img src=' https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg' alt='img'/>
        <div className='text-xl font-sans font-semibold text-gray-500'>Design</div>
      </div>
      <div className=''>
        <img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' alt='img'/>
        <div className='text-xl font-sans font-semibold text-gray-500'>Development</div>
      </div>
      <div className=''>
        <img src='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg' alt='img'/>
        <div className='text-xl font-sans font-semibold text-gray-500'>Marketing</div>
      </div>
      <div className=''>
        <img src='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg' alt='img'/>
        <div className='text-xl font-sans font-semibold text-gray-500'>IT and Software</div>
      </div>
      <div className=''>
        <img src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg' alt='img'/>
        <div className='text-xl font-sans font-semibold text-gray-500'>Personal Development</div>
      </div>
      <div className=''>
        <img src='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg' alt='img'/>
        <div className='text-xl font-sans font-semibold text-gray-500'>Business</div>
      </div>
      <div className=''>
        <img src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg' alt='img'/>
        <div className='text-xl font-sans font-semibold text-gray-500'>Photography</div>
      </div>
      <div className=''>
        <img src='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' alt='img'/>
        <div className='text-xl font-sans font-semibold text-gray-500'>Music</div>
      </div>
      
    </div>
  </>
  )
}

export default TopCatagories;
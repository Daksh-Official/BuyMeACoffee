import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t gap-2 absolute mt-3 bottom-0 w-full border-t-gray-800 h-20 flex justify-center items-center'>
            <span className='text-white font-bold text-lg'>BuyMeA<span className='text-purple-500'>Coffee</span></span>●
    <span className='my-3 md:text-lg text-xs text-gray-400'>Copyright &copy; {new Date().getFullYear()} All rights reserved.</span>
    </footer>
  )
}

export default Footer

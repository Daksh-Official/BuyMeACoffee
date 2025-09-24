"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession();
  const [toggle, settoggle] = useState(false)


  return (
    <nav className='flex fixed flex-col md:flex-row w-full h-fit gap-2 md:gap-0 md:h-16 bg-slate-950 z-20 top-0 justify-between px-4 py-3 items-center border-b-1 border-b-purple-950'>
      <div className="logo w-1/3 text-center text-white font-bold text-lg">
        <Link href="/">
          <span>BuyMeA<span className='text-purple-500'>Coffee</span></span>
        </Link>
      </div>
      <div>
        {!session && <div className='buttons cursor-pointer flex gap-3'><Link href="/login">
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer">Login</button>
        </Link>
          <button className="inline-flex items-center justify-center p-0.5 me-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 cursor-pointer">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Signup
            </span>
          </button> </div>}
        {session && <div className='cursor-pointer flex' >
          <button onBlur={() => { setTimeout(() => { settoggle(false) }, 300) }} onClick={() => { settoggle(!toggle) }} className="text-white flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer"> <span>Signed in as {session.user.email.split('@')[0]} </span><svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg> </button>

          <div id="dropdown" className={`${toggle ? "" : "hidden"} z-10 absolute top-15 right-40 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-900 font-bold`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link onClick={() => { setTimeout(() => { settoggle(false) }, 300) }} href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
              </li>
              <li>
                <Link onClick={() => { setTimeout(() => { settoggle(false) }, 300) }} href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link onClick={() => { setTimeout(() => { settoggle(false) }, 300) }} href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link href="#" onClick={() => {
                  signOut();
                  setTimeout(() => { settoggle(false) }, 300)
                }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>

          <button onClick={() => signOut()} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer">Sign out</button>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar

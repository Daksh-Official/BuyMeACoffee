"use client"

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { fetchUser, updateUser } from '@/actions/serverActions';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session])

  useEffect(() => {
    getData();
  }, []);

  const [form, setform] = useState({ email: session?.user.email, username: session?.user.email.name, taq: false });

  const getData = async () => {
    let data = await fetchUser(session?.user.name);
    setform(data);
  }


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    await updateUser(form, session?.user.name);
    toast("Profile Updated!!!");
  }

  if (session) {
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <div className='mt-17 pb-20'>
          <div className="bannerPreview h-[20vh] md:h-[40vh] mb-3 bg-gray-600 flex-col flex justify-center items-center">
            <lord-icon
              src="https://cdn.lordicon.com/ijsqrapz.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ 'width': '80px', 'height': '80px' }}>
            </lord-icon>
            <h2 className='font-bold text-xl'>Banner Preview</h2>
            <p>this is a preview of your banner</p>
          </div>
          <div className="section flex justify-around my-6">
            <div className="details w-full md:w-1/2 mx-4">
              <form action={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                  <input onChange={handleChange} value={form.name ? form.name : ""} type="text" name="name" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" value={session?.user.email} disabled />
                </div>
                <div className="mb-5">
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input onChange={handleChange} value={form.username ? form.username : session?.user.name} type="text" name="username" id="username" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
                </div>
                <div className="mb-5">
                  <label htmlFor="profile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile pic URL</label>
                  <input onChange={handleChange} value={form.profile ? form.profile : ""} type="text" name="profile" id="profile" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="https://www.example.com/..." />
                </div>
                <div className="mb-5">
                  <label htmlFor="banner" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Banner URL</label>
                  <input onChange={handleChange} value={form.banner ? form.banner : ""} type="text" name='banner' id="banner" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="https://www.example.com/..." />
                </div>
                <div className="mb-5">
                  <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RazorPay ID</label>
                  <input onChange={handleChange} value={form.razorpayId ? form.razorpayId : ""} type="text" id="razorpayid" name="razorpayId" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
                </div>
                <div className="mb-5">
                  <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RazorPay Secret</label>
                  <input onChange={handleChange} value={form.razorpaySecret ? form.razorpaySecret : ""} type="password" id="razorpaysecret" name='razorpaySecret' className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" />
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input onChange={() => { setform({ ...form, taq: !form.taq }) }} checked={form.taq} id="terms" type="checkbox" name="taq" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                  </div>
                  <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit" id="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
              </form>
            </div>
            <div className="profile w-1/3 md:flex hidden justify-center mt-6">
              <div className='w-64 h-64 rounded-full flex justify-center items-center overflow-hidden bg-gray-600'>
                <lord-icon
                  src="https://cdn.lordicon.com/ssartdnc.json"
                  trigger="hover"
                  colors="primary:#4a5565,secondary:#ffffff"
                  style={{ "width": "150px", "height": "150px" }}>
                </lord-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard

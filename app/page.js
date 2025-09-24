"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {

  const [search, setsearch] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setsearch(e.target.value);

  }

  const handleSearch = () => {
    router.push(`/${search}`);
  }



  return (
    <div className="mx-auto">
      <div className="main p-2 min-h-[85vh] w-full mt-16 pb-20 text-lg">
        <div className="start flex w-full px-2 md:w-1/2 justify-center min-h-90  gap-5 flex-col mx-auto items-center">
          <h2 className="flex items-center font-bold text-4xl"><span>Buy Me A <span className='text-pink-500'>Coffee</span></span><lord-icon src="https://cdn.lordicon.com/oxoipcmc.json" trigger="hover" className="md:w-[100px] md:h-[100px] w-16 h-16">
          </lord-icon></h2>
          <p className="text-center text-gray-400">Empower your favorite creators by buying them a coffee—show your appreciation, support their work, and help them keep creating the content you love.</p>
          <div className="buttons gap-3 flex my-2">
            <button type="button" className="text-white  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none cursor-pointer focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-md px-5 py-2.5 text-center me-2">Get Started</button>
            <Link href="/about"><button type="button" className="text-white cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-md px-5 py-2.5 text-center me-2">Read More</button></Link></div>
        </div>
        <div className="w-full justify-center items-center flex">
          <input type="search" placeholder="Search your favorite creator and donate..." className="w-[90%] bg-gray-900 h-14 px-5 rounded-xl" name="search" id="search" onChange={handleChange} value={search} />
          <button onClick={handleSearch} className="absolute  right-5 md:right-22 inline-flex items-center cursor-pointer justify-center p-0.5 me-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Search
            </span>
          </button>
        </div>
        <div className="features flex h-80 gap-12 justify-center w-full flex-col my-8 items-center">
          <h2 className="font-bold text-2xl">Help the Community</h2>
          <ul className="flex w-full justify-around">
            <li>
              <div className="text-md max-w-24 md:max-w-fit flex w-fit items-center h-52 justify-between flex-col">
                <div className="p-2 rounded-full my-2 bg-gray-800">
                  <img src="/icons/icon1.svg" className="md:w-[88px] w-18" alt="" />
                </div>
                <h3 className="font-bold">Donate</h3>
                <p className="text-gray-400 text-xs text-center md:text-sm">donate to your favorite creator</p>
              </div>
            </li>
            <li>
              <div className="text-md flex max-w-24 md:max-w-fit w-fit items-center h-52 justify-between flex-col">
                <div className="p-2 rounded-full my-2 bg-gray-800">
                  <img src="/icons/icon2.svg" className="md:w-[88px] w-18" alt="" />
                </div>
                <h3 className="font-bold">Contribute</h3>
                <p className="text-gray-400 text-xs text-center md:text-sm">Contribute in helping the Community</p>
              </div>
            </li>
            <li>
              <div className="text-md flex max-w-24 md:max-w-fit w-fit items-center h-52 justify-between text-center flex-col">
                <div className="p-2 rounded-full my-2 bg-gray-800">
                  <img src="/icons/icon3.svg" className="md:w-[88px] w-18" alt="" />
                </div>
                <h3 className="font-bold">Around the Clock</h3>
                <p className="text-gray-400 text-xs text-center md:text-sm">You can do this any time you want</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full h-[0.1px] bg-gray-700"></div>
        <div className="know my-12">
          <h2 className="font-bold text-2xl text-center">Know more about us</h2>
          <iframe src="https://www.youtube.com/embed/sF80I-TQiW0?si=jxZPlz0V-cO-2czA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-lg mx-auto my-12 md:w-[560px] md:h-[315px]" ></iframe>
          <p className="text-sm text-gray-400 text-center m-5 md:m-15">
            "Buy Me A Coffee is a platform designed to empower creators and foster a supportive community. Whether you’re an artist, writer, developer, or any kind of creator, this site enables your fans and supporters to show appreciation for your work through small donations—symbolized by buying you a coffee. The intuitive interface makes it easy for users to search for their favorite creators, read about their journeys, and contribute directly to their creative pursuits. With features like seamless search, quick donation options, and informative content about the community, Buy Me A Coffee bridges the gap between creators and their audiences."

          </p>
        </div>
      </div>
    </div>
  );
}

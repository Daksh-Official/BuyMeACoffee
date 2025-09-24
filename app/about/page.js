import React from 'react'

const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 mt-25 pb-30">
      <h1 className="text-4xl font-bold text-center mb-6">About BuyMeACoffee</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to <span className="font-semibold">BuyMeACoffee</span>, a Patreon-like platform
        where creators can connect with their supporters in a simple and transparent way.
        Whether you are a writer, artist, musician, or developer, our platform allows you
        to receive support directly from your fans in the form of small contributions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why BuyMeACoffee?</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Unlike traditional platforms, we keep things simple. No complicated tiers,
        no hidden rules—just a quick way for your supporters to say "thank you" and
        help you keep doing what you love.
      </p>
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
      <h2 className="text-2xl font-semibold mt-8 mb-3">How Razorpay Helps</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        We’ve integrated <span className="font-semibold">Razorpay</span> as our payment gateway
        to ensure safe, secure, and lightning-fast transactions. Razorpay makes it easy for
        your supporters in India and beyond to contribute using their preferred payment methods.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl shadow-md mb-8">
        <p className="text-gray-800">
          <span className="font-semibold">Note:</span> Razorpay integration ensures that
          payments are handled securely. However, please avoid sharing sensitive financial
          details directly on this platform.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Our Vision</h2>
      <p className="text-gray-700 leading-relaxed">
        At <span className="font-semibold">BuyMeACoffee</span>, we believe in empowering
        creators by giving them a reliable way to monetize their content without losing
        creative freedom. This is just the beginning of our journey—we aim to make
        supporting creators as easy as buying a cup of coffee. ☕
      </p>
    </div>
  );

}

export default page

export const metadata = {
  title: 'About - BuyMeACoffee',
}
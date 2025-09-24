"use client"
import React from 'react'
import Script from 'next/script'
import { initiate, fetchUser, fetchPayments } from '@/actions/serverActions'
import { useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation'


const PaymentPage = ({ username }) => {
    const [form, setform] = useState({ name: "", message: "", amount: "" });
    const [currentUser, setcurrentUser] = useState({});
    const [payments, setpayments] = useState([])
    const [disable, setdisable] = useState(true)
    const SearchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if (form.name === "" || form.amount === "") {
            setdisable(true)
        }
        else {
            setdisable(false)
        }
    }, [form])


    const handleform = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const getPayments = async () => {
        let user = await fetchUser(username);
        setcurrentUser(user);
        let payments = await fetchPayments(username);
        setpayments(payments);

    }

    useEffect(() => {
        if (SearchParams.get("payment") == "true") {
            toast("Thanks for your Donations!!!");
        }
        router.push(`/${username}`);
        getPayments();
    }, [])


    const pay = async (amount) => {
        let order_id = await initiate(amount, username, form);
        let oid = order_id.id;
        var options = {
            "key": currentUser.razorpayId,
            "amount": amount,
            "currency": "INR",
            "name": "Buy Me A Coffee",
            "description": "Donate to your favorite creator",
            "image": "https://example.com/your_logo",
            "order_id": oid, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Daksh Gupta", //your customer's name
                "email": "abc123@example.com",
                "contact": "+9199999999" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }


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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='flex flex-col mt-17 pb-20'>
                <div className="banner h-[30vh] md:h-[60vh] mb-3 relative">
                    <img src={currentUser.banner} alt="banner" className='w-full h-[30vh] md:h-[50vh] md:object-cover object-contain' />
                    <div className="profile w-32 absolute bottom-0 right-[35%]  md:right-[45.5%] border-white border rounded-xl">
                        <img src={currentUser.profile} className='rounded-xl' alt="profile" />
                    </div>
                </div>
                <div className="body m-2">
                    <div className="info flex items-center flex-col gap-1">
                        <h2 className='font-bold text-2xl'>{username}</h2>
                        <p>{payments.length} payments • Total Raised:₹{(payments.length > 0 ? payments.reduce((a, b) => { a = a + b.amount; return a }, 0) : "0")}</p>
                        <p className='text-sm text-gray-400'>3,581 members • 178 Posts</p>
                    </div>
                    <div className="main w-full gap-3 md:gap-0 md:flex-row flex-col flex my-7 justify-around">
                        <div className="leaderboard w-full md:w-1/2 md:mx-3 mx-1 border border-gray-700 rounded-xl scroller">
                            <h2 className='font-bold text-center text-xl border-b py-4 border-gray-700'>Top Donations</h2>
                            <div className="donations p-3 flex gap-3">
                                <div className='w-3 border-r border-r-gray-700 h-80'>
                                </div>
                                <div className='h-80 overflow-y-scroll w-full'>
                                    <ul className='flex flex-col gap-3'>
                                        {(payments.length == 0 && <span>No Payments Yet</span>)}
                                        {
                                            payments.map((item) => {
                                                return <li key={item._id}><div className='space-x-1'><span className="font-bold">{item.name} </span>Donated <span className="font-bold">₹{item.amount}  </span>with message <span className="font-bold">"{item.message}"</span></div></li>
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="donate w-full md:w-1/2 md:mx-3 mx-1 border border-gray-700 rounded-xl">
                            <h2 className='font-bold text-center text-xl border-b py-4 border-gray-700'>Donate</h2>
                            <div className='form flex flex-col items-center gap-6 my-6'>
                                <input className='bg-gray-800 w-2/3 px-3 py-2 rounded-md' placeholder='your name' type="text" name="name" id="name" value={form.name} onChange={handleform} />
                                <input className='bg-gray-800 w-2/3 px-3 py-2 rounded-md' placeholder='write a message' type="text" name="message" id="message" value={form.message} onChange={handleform} />
                                <input className='bg-gray-800 w-2/3 px-3 py-2 rounded-md' placeholder='Enter amount' type="number" name="amount" id="amount" value={form.amount} onChange={handleform} />
                                <div className="suggestions flex justify-between w-full px-3 md:w-2/3">
                                    <button onClick={() => { setform({ ...form, amount: 10 }) }} className='bg-gray-800 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-900'>Donate <span className='font-bold'>₹10</span></button>
                                    <button onClick={() => { setform({ ...form, amount: 20 }) }} className='bg-gray-800 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-900'>Donate <span className='font-bold'>₹20</span></button>
                                    <button onClick={() => { setform({ ...form, amount: 50 }) }} className='bg-gray-800 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-900'>Donate <span className='font-bold'>₹50</span></button>
                                </div>
                                <button disabled={disable} onClick={() => { pay(form.amount) }} className={` inline-flex items-center justify-center p-0.5 me-1 overflow-hidden text-sm font-medium rounded-lg group ${disable ? "bg-gray-900 text-gray-400 " : "text-gray-900 bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 cursor-pointer"}`}>
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        Pay
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage

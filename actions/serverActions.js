"use server"

import Razorpay from "razorpay"
import connectDB from "@/app/db/connectDB"
import User from "@/models/User"
import Payment from "@/models/Payment"


export const initiate = async (amount, to_username, paymentform) => {
    let u = await fetchUser(to_username);
    if (u) {
        let money = Number.parseInt(amount) * 100;
        var instance = new Razorpay({ key_id: u.razorpayId, key_secret: u.razorpaySecret })

        let options = {
            amount: money,
            currency: "INR"
        }

        await connectDB();
        let order = await instance.orders.create(options);

        await Payment.create({ name: paymentform.name, to_user: to_username, oid: order.id, message: paymentform.message, amount: money / 100 });

        return order;
    }

}

export const fetchUser = async (username) => {
    await connectDB();
    let user = await User.findOne({ username: username }).lean();

    if (user) {
        user._id = user?._id.toString();
        return user;
    }
    else {
        return false;
    }
}

export const fetchPayments = async (username) => {
    await connectDB();
    let allPayments = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean();
    let paymentsArr = allPayments.map((x) => {
        let item = { ...x, _id: x._id.toString() };
        return item;
    })
    return paymentsArr;
}

export const updateUser = async (data, oldusername) => {
    await connectDB();
    if (oldusername !== data.username) {
        let u = await User.findOne({ username: data.username })
        if (u) {
            return { error: "User already exists" };
        }
    }
    await User.updateOne({ email: data.email }, data);
    await Payment.updateMany({ to_user: oldusername }, { to_user: data.username });
    return { message: "User Updated Successfully" };
}

import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectDB";
import User from "@/models/User";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";

export const POST = async (req) => {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);
    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json("Payment not found!!! please try again");
    }
    let secret = await User.findOne({ username: p.to_user });
    secret = secret.razorpaySecret;
    let valid = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret);
    if (valid) {
        let data = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${data.to_user}?payment=true`);
    }
    else {
        return NextResponse.json("Payment verification failed");
    }
}
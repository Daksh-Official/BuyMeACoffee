import React from 'react'
import PaymentPage from '@/components/PaymentPage';
import { fetchUser } from '@/actions/serverActions';
import { notFound } from 'next/navigation';


const Username = async ({ params }) => {
    const params2 = await params;

    let u = await fetchUser(params2.username);

    if (!u) {
        notFound();
    }
    else {
        return (
            <PaymentPage username={params2.username} />
        )

    }
}

export default Username

export async function generateMetadata({ params }) {
    const params2 = await params;
    return {
        title: `Support ${params2.username} - BuyMeACoffee`,
    }
}
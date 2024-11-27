//StripePayment.js

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import PaymentForm from "./PaymentForm";

const stripe = loadStripe('pk_test_51M42jTSBw24HbvDVPwl33Lw8d1WOYAAsiKDzDrWjduyB0wYOCgj1L2kMthyg9yRLUlu9Qx1raxUN55AOIpoVAcn100mhSOyCd7');
const productListArray = JSON.parse(localStorage.getItem('product')) || []
    
const subtotal = productListArray.reduce((total, product) => {
    const price = parseFloat(product.productPrice.replace('₹', '').replace(',', ''));
    return total + (price * product.productQty);
}, 0);

export const StripePayment = () => {
    const [clientSecret, setClientSecret] = useState(null);

 
    useEffect(() => {
        axios
            .post("http://localhost:4000/create-payment-intent", {
                // items: [{ id: 1, name: "momos", amount: subtotal}],
                items: [{  amount: subtotal}],
            })
            .then((resp) => {
                console.log(resp.data.clientSecret);
                setClientSecret(resp.data.clientSecret)});
    }, []);

    const options = {
        clientSecret,
        theme: "stripe",
    };
    console.log(Elements ,"kkkk")
    return (
        clientSecret && (
            
            <Elements stripe={stripe} options={options}>
                <PaymentForm></PaymentForm>
            </Elements>
        )
    );
};


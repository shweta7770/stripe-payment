//PaymentForm.js

import React, { useState , useEffect } from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import './PaymentForm.css'

const PAYMENT_SUCESS_URL = "http://localhost:3000/success";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const productListArray = JSON.parse(localStorage.getItem('product')) || []

    const subtotal = productListArray.reduce((total, product) => {
        const price = parseFloat(product.productPrice.replace('₹', '').replace(',', ''));
        return total + (price * product.productQty);
    }, 0);
     

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        setIsLoading(true);
        setMessage("Payment in Progress");

        try {
            const resp = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: PAYMENT_SUCESS_URL,
                    payment_method_data: {
                        billing_details: {
                            name: "shweta", // Add the customer name her e
                            address: {
                                line1: "Address Line 1", // Add the first address line here
                                line2: "Address Line 2", // Optional
                                city: "City Name", // Add the city
                                state: "State", // Add the state
                                postal_code: "Postal Code", // Add the postal code
                                country: "IN", // Country code for India
                            },
                        },
                    },
                },
            });

            // Handle response, including error handling and success message
            if (resp.error) {
                console.log(resp.error);
                setMessage(`Error: ${resp.error.message}`);
            } else if (resp.paymentIntent.status === "succeeded") {
                setMessage("Payment Successful!");
            }
        } catch (error) {
            console.error(error);
            setMessage("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div >
                       
                        <PaymentElement />
                        
                        <div>
                            <button
                                className="btn mt">
                                {isLoading ? "Loading..." : `Pay now  ₹ ${subtotal}`}
                            </button>
                         
                        </div>
                        {message && <div>{message}</div>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;
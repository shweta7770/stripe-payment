import React from 'react'
import { OrderNow } from '../screen/OrderNow';


export const CartDetails = () => {
    const productListArray = JSON.parse(localStorage.getItem('product')) || []


    const subtotal = productListArray.reduce((total, product) => {
        const price = parseFloat(product.productPrice.replace('₹', '').replace(',', ''));
        return total + (price * product.productQty);
    }, 0);

    console.log(`Subtotal: ₹${subtotal.toFixed(2)}`);
  

    const handleRemoveProd = (val, id) => {

        let newArray = productListArray.filter((item, index) => {
            if (id !== index) {
                return item
            }
        })

        localStorage.setItem('product', JSON.stringify(newArray))
        window.location.reload(true);
    }

    return (
        <div style={{ backgroundColor: 'aliceblue', padding: '1.5rem', width: "40%" }}>
            <a href="/"> Back{'<<'}</a>
            <div style={{ backgroundColor: 'white', padding: '1.5rem' }}>
                <h2 style={{ margin: '0', fontWeight: '400' }}>Shopping Cart</h2>
                <hr></hr>
                {productListArray.length !== 0 ? (<>
                    {productListArray?.map((val, index) => {
                        return (<div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                            <div style={{ width: '25%', height: '120px' }} >
                                <img src={val?.productImage} style={{ objectFit: 'contain', height: '100%' }}></img>

                            </div>

                            <div style={{ width: '75%', textAlign: 'center' }}>
                                <div >
                                    <p style={{ margin: '0px', paddingBottom: '15px' }}>{val?.productName}</p>
                                    <p style={{ margin: '0px', paddingBottom: '15px' }}>{val?.productPrice}</p>
                                    <p style={{ margin: '0px', paddingBottom: '15px' }}>Qty:{val?.productQty}</p>
                                    <button onClick={() => { handleRemoveProd(val, index) }}>Remove Product</button>
                                </div>
                            </div>

                        </div>)
                    })}

                </>) : (<>Cart is empty</>)}

                <hr></hr>

                {/* subtotal */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '75%' }}></div>
                    <div style={{ width: '25%' }}>SubTotal:{subtotal}</div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end', marginTop: '10px' }}>
                    <a style={{ padding: '10px', backgroundColor: 'cadetblue', border: 'none', }}
                     href='/order'>
                        Proceed to buy
                    </a>
                </div>
            </div>
        </div>
    )
}

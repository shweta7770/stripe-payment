import React from 'react'
import '../component/OrderDetails.css'
export const OrderDetails = () => {
    const productListArray = JSON.parse(localStorage.getItem('product')) || []
    
    const subtotal = productListArray.reduce((total, product) => {
        const price = parseFloat(product.productPrice.replace('₹', '').replace(',', ''));
        return total + (price * product.productQty);
    }, 0);

    console.log(`Subtotal: ₹${subtotal.toFixed(2)}`);
    return (
        <div style={{ backgroundColor: 'aliceblue', padding: '1.5rem', width: "40%" }}>
            <a href="/"> Back{'<<'}</a>
            <div style={{ backgroundColor: 'white', padding: '1.5rem' }}>
                <h2 style={{ margin: '0', fontWeight: '400' }}>Order Now</h2>
                <hr></hr>

                <table className='table'>
                    <tr>
                        <td className='td'>Shipping Adddress :</td>
                        <td className='td'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</td>
                    </tr>
                    <tr>
                    <td className='td'>items:</td>
                    <td className='td'>
                        {productListArray?.map((val,index) => {
                            return (<>
                               {index+1}.  { val.productPrice}  qty:{val.productQty}  
                               <br></br>
                            </>)
                        })}
                        </td>
                    </tr>
                    <tr>
                        <td className='td'>SubTotal:</td>
                        <td className='td'>₹{subtotal}</td>
                    </tr>
                </table>
                <hr></hr>
                <div style={{ textAlign: 'center' }}>
                    <label></label>
                    <a style={{ padding: '10px', 
                        backgroundColor: 'cadetblue', 
                        border: 'none' }}  href="/payment">place order with card</a>

                </div>
            </div>
        </div>
    )
}

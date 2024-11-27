import React from 'react'
import './ProductList.css'
import pro1 from '../assets/fan.jpg'
import pro2 from '../assets/fan2.jpg'
import pro3 from '../assets/fan3.jpg'
import pro4 from '../assets/fan4.jpg'

let qtyValue;
const getValue = (e) => {
  qtyValue = e.target.value
}
const handleButton = (val) => {
  const productListArray = JSON.parse(localStorage.getItem('product')) || []
  productListArray.push({ ...val, productQty: qtyValue || 1})
  localStorage.setItem('product', JSON.stringify(productListArray))
}


const products = [
  {
    productName: 'amazon basics 400 mm 2-in-1 BLDC Pedestal Fan with Remote Control and 26 Speed Fuctions',
    productPrice: '₹300',
    productImage: pro1,
   
  },
  {
    productName: 'atomberg Renesa 1200mm BLDC Ceiling Fan with Remote Control | BEE 5 star Rated Energy Efficient Ceiling Fan | High Air Delivery',
    productPrice: '₹3,176.76',
    productImage: pro2,
    
  },
  {
    productName: 'amazon basics 400 mm 2-in-1 BLDC Pedestal Fan with Remote Control',
    productPrice: '₹3,176.76',
    productImage: pro3,
   
  },
  {
    productName: 'Havells 1200mm Stealth Air BLDC Motor Ceiling Fan | Remote Controlled, High Air Delivery Fan |',
    productPrice: '₹300',
    productImage: pro4,
    
  },
]


export const ProductList = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', paddingRight: '2rem' }}>

      <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
        {products.map((val) => {
          return (<div className='card' >
            <div style={{ height: '280px', padding: '1.1rem' }}>
              <img src={val?.productImage} style={{ width: '100%', objectFit: 'contain', height: '100%' }} />
            </div>
            <div style={{ backgroundColor: 'aliceblue', padding: '1.1rem' }}>
              <p style={{ margin: '0px', paddingBottom: '15px' }}>{val?.productName} </p>
              <p style={{ margin: '0px', paddingBottom: '15px' }}> {val?.productPrice}</p>
              <label>Qty:</label>
              <input type="number" defaultValue={1} onClick={(e) => { getValue(e) }}></input>
              <button className='btn' onClick={() => { handleButton(val) }}>Add To cart</button>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}

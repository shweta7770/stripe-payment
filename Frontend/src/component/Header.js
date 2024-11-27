import React from 'react'
import './Header.css'
import logo from './logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    
    return (
        <>
            <div className=' plr header'>
                <div style={{ width: '30%' }}>
                    <img src={logo} />
                </div>
                <div style={{ width: '60%' }}>

                </div>
                <div style={{ width: '10%' }}>
                    <a onClick={()=>{
                        console.log("jkkk")
                    }} href={'/cart'}>
                        <FontAwesomeIcon icon={faCartShopping} size="2x" />
                    </a>
                </div>


            </div>
        </>
    )
}

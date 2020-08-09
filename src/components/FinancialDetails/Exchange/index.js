import './style.css'
import React from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'

export default function Exchange() {
    return (
        <>
            <div className='paper list'>
                <h3 style={{margin: 0}}>Курс валют</h3>
                <div className='container'>
                    <h2 style={{color: '#9fa7bc'}}>USD&nbsp;&nbsp;</h2>
                    <FaArrowAltCircleUp className='icon1'/>
                    <h3>10210.00</h3>
                    <FaArrowAltCircleDown className='icon2'/>
                    <h3>10251.00</h3>
                </div>
                <div className='container'>
                    <h2 style={{color: '#9fa7bc'}}>EURO</h2>
                    <FaArrowAltCircleUp className='icon1'/>
                    <h3>11000.00</h3>
                    <FaArrowAltCircleDown className='icon2'/>
                    <h3>11700.00</h3>
                </div>
            </div>
        </>
    )
}

import './style.css'
import React from 'react'

export default function IncomeTax() {
    return (
        <>
            <div className='paper list' style={{marginTop: '20px'}}>
                <div className='block1'>
                    <div className='block2'>
                        <h2 style={{margin: 0}}>679.330</h2>
                    </div>
                    <h4 style={{margin: 0}}>Базовая расчетная величина (сум)</h4>
                </div>
                <div className='block1'>
                    <div className='block2'>
                        <h2 style={{margin: 0}}>223.000</h2>
                    </div>
                    <h4 style={{margin: 0}}>Минимальный размер заработной платы (сум)</h4>
                </div>
                <div className='block1'>
                    <div className='block3'>
                        <h2 style={{margin: 0}}>12.5%</h2>
                    </div>
                    <h4 style={{margin: 0}}>Подоходный налог %</h4>
                </div>
                <h4 style={{margin: 0, color: '#aaa'}}>Обновлено 01.02.2020</h4>
            </div>
        </>
    )
}
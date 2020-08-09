import './style.css'
import React from 'react'

export default function Accrual() {
    return (
        <>
            <div className='paper list'>
                    <div className='head'>
                        <h2 style={{margin: 0}}>Начисление <br/>+6.000.000</h2>
                        <div>
                            <h2 style={{margin: 0, paddingLeft: '90px'}}>
                                ВЫ РАБОТАЛИ:
                                <span style={{color: '#fe742b', fontSize: '28px'}}> 20<span className='span1'>ДНЯ</span></span> 
                                <span style={{color: '#737a8d', fontSize: '28px'}}>&nbsp;&nbsp;&nbsp;&nbsp;160<span className='span1'>ЧАСОВ</span></span>
                            </h2>
                            <h3 style={{margin: 0, color: '#9fa7bc'}}>
                                Рабочий дней в Июне месяце 
                                <span style={{color: '#000'}}>-22</span> дня; 
                                Выходных <span style={{color: '#000'}}>-9</span>
                            </h3>
                        </div>
                    </div>
                    <div>
                        <div className='main'>
                            <h4>Оклад по штатному расписанию</h4>
                            <div className='line'></div>
                            <h4 style={{color: '#00cba8'}}>+ 2.000.000</h4>
                        </div>
                        <div className='main'>
                            <h4>Персональная надбавка</h4>
                            <div className='line'></div>
                            <h4 style={{color: '#00cba8'}}>+ 350.000</h4>
                        </div>
                        <div className='main'>
                            <h4>Надбавка за выслогулет сотрудника</h4>
                            <div className='line'></div>
                            <h4 style={{color: '#00cba8'}}>+ 200.000</h4>
                        </div>
                        <div className='main'>
                            <h4>Ежемесячная премия</h4>
                            <div className='line'></div>
                            <h4 style={{color: '#00cba8'}}>+ 800.000</h4>
                        </div>
                        <div className='main'>
                            <h4>Квартальная премия</h4>
                            <div className='line'></div>
                            <h4 style={{color: '#00cba8'}}>+ 2.000.000</h4>
                        </div>
                        <div className='main'>
                            <h4>Социальная защита (Питания)</h4>
                            <div className='line'></div>
                            <h4 style={{color: '#00cba8'}}>+ 150.000</h4>
                        </div>
                    </div>
                </div>
        </>
    )
}

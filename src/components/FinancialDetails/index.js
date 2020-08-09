import './style.css'
import React from 'react'
import Accrual from './Accrual'
import Exchange from './Exchange'
import IncomeTax from './IncomeTax'
import { data1, data2, data3, data4 } from '../../data'
import { AreaChart, Area, BarChart, Bar, Tooltip } from 'recharts'
import { FaCalendarAlt, FaArrowAltCircleDown, FaArrowAltCircleUp, FaQuestionCircle } from 'react-icons/fa'

export default function FinancialDetails() {
    return (
        <div className='root'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1 style={{margin: 0}}>Поступление</h1>
                <div className='calendarPaper'>
                    <div className='calendar'>
                        <FaCalendarAlt color='#fe5085'/>
                        <h4 style={{color: '#727a8f'}}>Май 02.2020 - Июнь 02.2020</h4>
                    </div>
                </div>
            </div>

            <div className='cards'>
                <div className='mainPaper'>
                    <div>
                        <h2 style={{margin: '0 0 15px 0'}}>Начисление <br/>6.000.000</h2>
                        <h4 style={{margin: 0, color: '#01c76f'}}><FaArrowAltCircleUp className='icons'/> 0.22%</h4>
                    </div>
                    <div>
                        <FaQuestionCircle className='questionIcon'/>
                        <BarChart style={{margin: '0 0 0 20px'}} width={110} height={80} data={data1}>
                            <Bar dataKey="uv" fill="#1ea5e5" />
                        </BarChart>
                    </div>
                </div>
                <div className='mainPaper'>
                    <div>
                        <h2 style={{margin: '0 0 15px 0'}}>Удержано <br/>5.000.000</h2>
                        <h4 style={{margin: 0, color: '#01c76f'}}><FaArrowAltCircleUp className='icons'/> 5.16%</h4>
                    </div>
                    <div>
                        <FaQuestionCircle className='questionIcon'/>
                        <BarChart style={{margin: '0 0 0 20px'}} width={110} height={80} data={data2}>
                            <Bar dataKey="uv" fill="#ffc6c5" />
                        </BarChart>
                    </div>
                </div>
                <div className='mainPaper'>
                    <div>
                        <h3 style={{margin: 0}}>С начала года</h3>
                        <h2 style={{margin: '5px 0 15px 0'}}>14.000.000</h2>
                        <h4 style={{margin: 0, color: '#ff8989'}}><FaArrowAltCircleDown className='icons'/> 0.74%</h4>
                    </div>
                    <div>
                        <FaQuestionCircle className='questionIcon'/>
                        <BarChart style={{margin: '0 0 0 20px'}} width={110} height={80} data={data3}>
                            <Bar dataKey="uv" fill="#ffab53" />
                        </BarChart>
                    </div>
                </div>
                <div className='mainPaper' style={{flexDirection: 'column'}}>
                    <h5 style={{margin: 0, color: '#aaa'}}>Должостной оклад</h5>
                    <h2 style={{margin: 0}}>5.000.000&nbsp;&nbsp;&nbsp;<span style={{fontSize: '12px'}}>СУМ</span></h2>
                    <AreaChart style={{margin: '0 -20px -20px -20px'}} width={290} height={80} data={data4}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2f76ec" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#2f76ec" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#2f76ec" fillOpacity={1} fill="#eff6fc" />
                    </AreaChart>
                </div>
            </div>

            <div className='info'>
                <Accrual />
                <div style={{marginLeft: '20px'}}>
                    <Exchange />
                    <IncomeTax />
                </div>
            </div>
        </div>
    )
}
import { useState } from 'react'
import './plan.css'
import Advanced from '/src/assets/img/advenced.svg'
import Arcade from '/src/assets/img/arcade.svg'
import Pro from '/src/assets/img/pro.svg'

export default function Plan() {
    return(
        <>
        <div className='divPlan'>

            <div className='planDiv1'>
                <h1 className='formH1'>Select Your Plan</h1>
                <p className='formP'>You have the option of monthly or yearly billing</p>
            </div>

            <div className='planDiv2'>
                <div className='planDiv2Div'>
                    <img className='planImg' src={Arcade} alt="" />
                    <h3 className='planH3Card'>Arcade</h3>
                    <p className='planPCard'>$90/yr</p>
                </div>

                <div className='planDiv2Div'>
                    <img className='planImg' src={Advanced} alt="" />
                    <h3 className='planH3Card'>Advanced</h3>
                    <p className='planPCard'>$120/yr</p>
                </div>

                <div className='planDiv2Div'>
                    <img className='planImg' src={Pro} alt="" />
                    <h3 className='planH3Card'>Pro</h3>
                    <p className='planPCard'>$150/yr</p>
                </div>
            </div>

            <div className='planDiv3'>

            </div>

            <div className='planDiv4'>

            </div>
        </div>
        </>
    )
}
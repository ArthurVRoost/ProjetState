import { useState } from 'react'
import './finish.css'

export default function Finish() {
    return(
        <>
        <div className='divFinish'>
            <div className='formDiv1 finishDiv1'>
                <h1 className='formH1'>Finishing up</h1>
                <p className='formP'>Double-check if everything looks OK before confirming</p>
            </div>

            <div className='finishDiv2'>
                <div className='finishDiv2Div1'>
                    <div className='finishDiv5'>
                        <h3 className='finishDiv5H3'>Arcade(monthly)</h3>
                        <p className='finishDiv5P'>Change</p>
                    </div>
                    <p className='finishDiv2Div1P'>$9/mo</p>
                </div>

                <div className='finishDiv2Div2'>
                    <p className='finishDiv2Div2P1'>Larger Storage</p>
                    <p className='finishDiv2Div2P2'>+$2/mo</p>
                </div>
            </div>

            <div className='finishDiv3'>

            </div>

            <div className='finishDiv4'>

            </div>
        </div>
        </>
    )
}
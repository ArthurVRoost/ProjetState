// IMPORTS
import { useState } from 'react'
import './thanks.css'
import PhotoThanks from '/src/assets/img/thankyou.svg'

// FONCTIONS
export default function Thanks() {
    return(
        <>
        <div className='divThanks'>
            <img className='thanksImg' src={PhotoThanks} alt="" />
            <h1 className='thanksH1'>Thank You!</h1>
            <p className='thanksP'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com </p>
        </div>
        </>
    )
}
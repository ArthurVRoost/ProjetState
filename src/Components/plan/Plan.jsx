import { useState } from 'react'
import './plan.css'
import Advanced from '/src/assets/img/advenced.svg'
import Arcade from '/src/assets/img/arcade.svg'
import Pro from '/src/assets/img/pro.svg'

export default function Plan() {

    const [selected, setSelected] = useState(null);
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => {
        setIsOn(!isOn);
        
    };
    return(
        <>
        <div className='divPlan'>

            <div className='planDiv1'>
                <h1 className='formH1'>Select Your Plan</h1>
                <p className='formP'>You have the option of monthly or yearly billing</p>
            </div>

            <div className='planDiv2' >
                <div className='planDiv2Div' onClick={() => setSelected("arcade")} style={{ backgroundColor: selected === "arcade" ? "hsla(229, 24.20%, 87.10%, 0.70)" : "#ffffff" }} >
                    <img className='planImg' src={Arcade} alt="" />
                    <h3 className='planH3Card'>Arcade</h3>
                    <p className='planPCard'>$90/yr</p>
                </div>

                <div className='planDiv2Div' onClick={() => setSelected("advanced")} style={{ backgroundColor: selected === "advanced" ? "hsla(229, 24.20%, 87.10%, 0.70)" : "#ffffff" }} >
                    <img className='planImg' src={Advanced} alt="" />
                    <h3 className='planH3Card'>Advanced</h3>
                    <p className='planPCard'>$120/yr</p>
                </div>

                <div className='planDiv2Div' onClick={() => setSelected("pro")} style={{ backgroundColor: selected === "pro" ? "hsla(229, 24.20%, 87.10%, 0.70)" : "#ffffff" }} >
                    <img className='planImg' src={Pro} alt="" />
                    <h3 className='planH3Card'>Pro</h3>
                    <p className='planPCard'>$150/yr</p>
                </div>
            </div>

            <div className='planDiv3'>
                <h3 className='planDiv3H31'>Monthly</h3>
                <label className="switch">
                    <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
                    <span className="slider" />
                </label>
                <h3 className='planDiv3H32'>Yearly</h3>
            </div>

            <div className='planDiv4'>
                <p className='planDiv4P'>Go Back</p>
                <button className='planBtn'>Next Step</button>
            </div>
        </div>
        </>
    )
}
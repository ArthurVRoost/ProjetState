// IMPORTS
import { useState } from 'react'
import './plan.css'
import Advanced from '/src/assets/img/advenced.svg'
import Arcade from '/src/assets/img/arcade.svg'
import Pro from '/src/assets/img/pro.svg'

// FONCTIONS
export default function Plan({ formData, updateFormData, nextStep, prevStep, prixMensuel, prixAnnuel }) {
    
    const [selected, setSelected] = useState(formData.planCard || null);
    const [annuellement, setAnnuellement] = useState(formData.annuellement || false);

    
    const handleNext = () => {
       
        updateFormData({ planCard: selected, annuellement });
        nextStep();
    };

    const prix = annuellement ? prixAnnuel : prixMensuel;
    const prixText = annuellement ? '/yr' : '/mo';

    return(
        <div className='divPlan'>
            <div className='planDiv1'>
                <h1 className='formH1'>Select Your Plan</h1>
                <p className='formP'>You have the option of monthly or yearly billing</p>
            </div>

            <div className='planDiv2'>
                <div 
                    className='planDiv2Div' 
                    onClick={() => setSelected("arcade")} 
                    style={{ backgroundColor: selected === "arcade" ? "hsla(229, 24.20%, 87.10%, 0.70)" : "#ffffff" }}
                >
                    <img className='planImg' src={Arcade} alt="" />
                    <h3 className='planH3Card'>Arcade</h3>
                    <p className='planPCard'>${prix.arcade}{prixText}</p>
                   
                </div>

                <div 
                    className='planDiv2Div' 
                    onClick={() => setSelected("advanced")} 
                    style={{ backgroundColor: selected === "advanced" ? "hsla(229, 24.20%, 87.10%, 0.70)" : "#ffffff" }}
                >
                    <img className='planImg' src={Advanced} alt="" />
                    <h3 className='planH3Card'>Advanced</h3>
                    <p className='planPCard'>${prix.advanced}{prixText}</p>
                   
                </div>

                <div 
                    className='planDiv2Div' 
                    onClick={() => setSelected("pro")} 
                    style={{ backgroundColor: selected === "pro" ? "hsla(229, 24.20%, 87.10%, 0.70)" : "#ffffff" }}
                >
                    <img className='planImg' src={Pro} alt="" />
                    <h3 className='planH3Card'>Pro</h3>
                    <p className='planPCard'>${prix.pro}{prixText}</p>
                    
                </div>
            </div>

            <div className='planDiv3'>
                <h3 className={`planDiv3H31 ${!annuellement ? 'active-billing' : ''}`}>Monthly</h3>
                <label className="switch">
                    <input 
                        type="checkbox" 
                        checked={annuellement} 
                        onChange={() => setAnnuellement(!annuellement)} 
                    />
                    <span className="slider" />
                </label>
                <h3 className={`planDiv3H32 ${annuellement ? 'active-billing' : ''}`}>Yearly</h3>
            </div>

            <div className='planDiv4'>
                <p className='planDiv4P' onClick={prevStep}>Go Back</p>
                <button className='planBtn' onClick={handleNext}>Next Step</button>
            </div>
        </div>
    )
}
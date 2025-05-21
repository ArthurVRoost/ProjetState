// IMPORTS
import { useState } from "react";
import "./add.css";

// FONCTIONS
export default function Add({ formData, updateFormData, nextStep, prevStep, prixMensuel, prixAnnuel }) {
    // CONST
    const [online, setOnline] = useState(formData.addOns.onlineService || false);
    const [storage, setStorage] = useState(formData.addOns.largerStorage || false);
    const [profile, setProfile] = useState(formData.addOns.customProfile || false);

    // UPDATE EN FONCTION DE TON CHOIX
    const handleNext = () => {
        updateFormData({ 
            addOns: {
                onlineService: online,
                largerStorage: storage,
                customProfile: profile
            }
        });
        nextStep();
    };

    // AFFICHE LES BON PRIX EN FONCTION DU PLAN QUE T'AS PRIS
    const prix = formData.annuellement ? prixAnnuel : prixMensuel;
    const prixText = formData.annuellement ? '/yr' : '/mo';

    return (
        <div className="divAdd">
            <div className="formDiv1">
                <h1 className="formH1">Pick add-ons</h1>
                <p className="formP">Add-ons help enhance your gaming experience</p>
            </div>
            <div className="addons-container">
                {/* stopPropagation evite un effet de double click  */}
                <div className="addon-card" style={{ backgroundColor: online ? "hsla(230, 13.00%, 91.00%, 0.65)" : "#ffffff" }} onClick={() => setOnline(!online)}>
                    <input className="check" type="checkbox" checked={online} onChange={() => setOnline(!online)} onClick={(e) => e.stopPropagation()}/>
                    <div className="addon-text">
                        <h3 className="addOnH3">Online service</h3>
                        <p className="addOnP">Access to multiplayer games</p>
                    </div>
                    <span className="price1">+${prix.onlineService}{prixText}</span>
                </div>

                <div className="addon-card" style={{ backgroundColor: storage ? "hsla(230, 13.00%, 91.00%, 0.65)" : "#ffffff" }} onClick={() => setStorage(!storage)}>
                    <input className="check" type="checkbox" checked={storage} onChange={() => setStorage(!storage)} onClick={(e) => e.stopPropagation()}/>
                    <div className="addon-text">
                        <h3 className="addOnH3">Larger storage</h3>
                        <p className="addOnP">Extra 1TB of cloud save</p>
                    </div>
                    <span className="price2">+${prix.largerStorage}{prixText}</span>
                </div>

                <div className="addon-card" style={{ backgroundColor: profile ? "hsla(230, 13.00%, 91.00%, 0.65)" : "#ffffff" }} onClick={() => setProfile(!profile)}>
                    <input className="check" type="checkbox" checked={profile} onChange={() => setProfile(!profile)} onClick={(e) => e.stopPropagation()}/>
                    <div className="addon-text">
                        <h3 className="addOnH3">Customizable Profile</h3>
                        <p className="addOnP">Custom theme on your profile</p>
                    </div>
                    <span className="price3">+${prix.customProfile}{prixText}</span>
                </div>
            </div>
                <div className='planDiv4 addDiv4'>
                <p className='planDiv4P addP4' onClick={prevStep}>Go Back</p>
                <button className='planBtn addBtn4' onClick={handleNext}>Next Step</button>
            </div>
        </div>
        
    );
}
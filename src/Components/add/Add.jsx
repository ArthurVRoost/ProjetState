import { useState } from "react";
import "./add.css";

export default function Add() {
    const [online, setOnline] = useState(false);
    const [storage, setStorage] = useState(false);
    const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="divAdd">
        <div className="formDiv1">
          <h1 className="formH1">Pick add-ons</h1>
          <p className="formP">Add-ons help enhance your gaming experience</p>
        </div>
        <div className="addons-container">
          <div className="addon-card"style={{backgroundColor: online ? "hsla(230, 13.00%, 91.00%, 0.65)" : "#ffffff",}}onClick={() => setOnline(!online)}>
                <input className="check" type="checkbox" checked={online} onChange={() => setOnline(!online)} onClick={(e) => e.stopPropagation()}/>
                <div className="addon-text">
                <h3 className="addOnH3">Online service</h3>
                <p className="addOnP">Access to multiplayer games</p>
                </div>
                <span className="price1">+$10/yr</span>
          </div>

          <div className="addon-card" style={{backgroundColor: storage ? "hsla(230, 13.00%, 91.00%, 0.65)" : "#ffffff",}} onClick={() => setStorage(!storage)}>
                <input className="check" type="checkbox" checked={storage} onChange={() => setStorage(!storage)} onClick={(e) => e.stopPropagation()}/>
                <div className="addon-text">
                <h3 className="addOnH3">Larger storage</h3>
                <p className="addOnP">Extra 1TB of cloud save</p>
                </div>
                <span className="price2">+$20/yr</span>
          </div>

          <div className="addon-card" style={{backgroundColor: profile ? "hsla(230, 13.00%, 91.00%, 0.65)" : "#ffffff",}}onClick={() => setProfile(!profile)}>
                <input className="check" type="checkbox" checked={profile} onChange={() => setProfile(!profile)} onClick={(e) => e.stopPropagation()}/>
                <div className="addon-text">
                <h3 className="addOnH3">Customizable Profile</h3>
                <p className="addOnP">Custom theme on your profile</p>
                </div>
                <span className="price3">+$20/yr</span>
          </div>
        </div>
        <div className='planDiv4'>
                <p className='planDiv4P addP4'>Go Back</p>
                <button className='planBtn addBtn4'>Next Step</button>
        </div>
      </div>
    </>
  );
}

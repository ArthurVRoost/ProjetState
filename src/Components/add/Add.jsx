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
          <div className="addon-card"style={{backgroundColor: online ? "hsl(229, 24%, 87%)" : "#ffffff",}}onClick={() => setOnline(!online)}>
                <input type="checkbox" checked={online} onChange={() => setOnline(!online)} onClick={(e) => e.stopPropagation()}/>
                <div className="addon-text">
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
                </div>
                <span className="price">+$10/yr</span>
          </div>

          <div className="addon-card" style={{backgroundColor: storage ? "hsl(229, 24%, 87%)" : "#ffffff",}} onClick={() => setStorage(!storage)}>
                <input type="checkbox" checked={storage} onChange={() => setStorage(!storage)} onClick={(e) => e.stopPropagation()}/>
                <div className="addon-text">
                <h3>Larger storage</h3>
                <p>Extra 1TB of cloud save</p>
                </div>
                <span className="price">+$20/yr</span>
          </div>

          <div className="addon-card" style={{backgroundColor: profile ? "hsl(229, 24%, 87%)" : "#ffffff",}}onClick={() => setProfile(!profile)}>
                <input type="checkbox" checked={profile} onChange={() => setProfile(!profile)} onClick={(e) => e.stopPropagation()}/>
                <div className="addon-text">
                <h3>Customizable Profile</h3>
                <p>Custom theme on your profile</p>
                </div>
                <span className="price">+$20/yr</span>
          </div>
        </div>
      </div>
    </>
  );
}

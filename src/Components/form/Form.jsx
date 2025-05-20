import './form.css'
import { useState } from "react";
export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
  return (
    <>
      <div className='divForm'>
            <div className='formDiv1'>
                <h1 className='formH1'>Personal info</h1>
                <p className='formP'>Please provide your name, your email address, and phone number</p>
            </div>
            <div className='formDiv2'>
                <form>
                    <label className='label' htmlFor="name">Your name is : {name}</label>
                    <input className='inputName' type="text" id="name" name="name" placeholder="Vingt-Six" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label className='label' htmlFor="email">Your email is : {email}</label>
                    <input className='inputEmail' type="email" id="email" name="email" placeholder="vingt_six@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label className='label' htmlFor="phone">Your phone number is : {phone} </label>
                    <input className='inputPhone' type="tel" id="phone" name="phone" placeholder="e.g.+1 234 567 890" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </form>
            </div>
            <div className='formDiv3'>
                <button className='formBtn'>Next Step</button>
            </div>
    </div>
    </>
  );
}
import './form.css'
import { useState } from "react";

export default function Form({formData, updateFormData, nextStep}) {
    const [name, setName] = useState(formData.name )
    const [email, setEmail] = useState(formData.email )
    const [phone, setPhone] = useState(formData.phone )
    const [errors, setErrors] = useState({name: false, email:false, phone:false})

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            name: name.trim() === '',
            email: !email.includes('@') || email.trim() === '',
            phone: phone.trim() === ''
        };

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.phone) {
            updateFormData({ name, email, phone });
            nextStep();
        }
    };

    return (
      <div className='divForm'>
        <div className='formDiv1'>
          <h1 className='formH1'>Personal info</h1>
          <p className='formP'>Please provide your name, your email address, and phone number</p>
        </div>
        <div className='formDiv2'>
          <form onSubmit={handleSubmit}>
            <label className='label' htmlFor="name">Your name is : {name}</label>
            <input
              className={`inputName ${errors.name ? "error" : ""}`}
              type="text"
              id="name"
              name="name"
              placeholder="Vingt-Six"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className='label' htmlFor="email">Your email is : {email}</label>
            <input
              className={`inputEmail ${errors.email ? 'error' : ''}`}
              type="email"
              id="email"
              name="email"
              placeholder="vingt_six@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className='label' htmlFor="phone">Your phone number is : {phone} </label>
            <input
              className={`inputPhone ${errors.phone ? 'error' : ''}`}
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g.+1 234 567 890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </form>
        </div>
        <div className='formDiv3'>
          <button className='formBtn' onClick={handleSubmit}>Next Step</button>
        </div>
      </div>
    )
}
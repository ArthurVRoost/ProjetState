import './form.css'

export default function Form() {

  return (
    <>
      <div className='divForm'>
            <div className='formDiv1'>
                <h1 className='formH1'>Personal info</h1>
                <p className='formP'>Please provide your name, your email address, and phone number</p>
            </div>
            <div className='formDiv2'>
                <form>
                    <label className='labelName' htmlFor="name">Your name is :</label>
                    <input className='inputName' type="text" id="name" name="name" placeholder="Vingt-Six" required />

                    <label className='labelEmail' htmlFor="email">Your email is :</label>
                    <input className='inputEmail' type="email" id="email" name="email" placeholder="vingt_six@email.com" required />

                    <label className='labelPhone' htmlFor="phone">Your phone number is :</label>
                    <input className='inputPhone' type="tel" id="phone" name="phone" placeholder="e.g.+1 234 567 890" required />
                </form>
            </div>
            <div className='formDiv3'>
                <button className='formBtn'>Next Step</button>
            </div>
    </div>
    </>
  );
}
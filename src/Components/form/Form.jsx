import './form.css'

export default function Form() {

  return (
    <>
      <div className='divForm'>
            <div className='formDiv1'>
                <h1>Personal info</h1>
                <p>Please provide your name, your email address, and phone number</p>
            </div>
            <div className='formDiv2'>
                <form>
                    <label htmlFor="name">Your name is :</label>
                    <input type="text" id="name" name="name" placeholder="Vingt-Six" required />

                    <label htmlFor="email">Your email is :</label>
                    <input type="email" id="email" name="email" placeholder="vingt_six@email.com" required />

                    <label htmlFor="phone">Your phone number is :</label>
                    <input type="tel" id="phone" name="phone" placeholder="e.g.+1 234 567 890" required />

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className='formDiv3'>
                <button className='formBtn'>Next Step</button>
            </div>
    </div>
    </>
  );
}
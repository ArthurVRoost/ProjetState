// IMPORTS
import './card.css'
import PhotoCard from "/src/assets/img/sidebar.svg"

// FONCTIONS
export default function Card({ currentStep }) {
  return (
    <>
      <div className='divCardP'>
        <img className='cardImg' src={PhotoCard} alt="" />
        <div className='divCard1'>
          {/* Donne la classe active quand il est dans le bon step(classe active dans le css) */}
          <div className={`cardDiv ${currentStep === 1 ? 'active' : ''}`}>
            <p className='cardDivP1'>1</p>
            <div className='cardDivDiv'>
              <p className='cardDivP2'>STEP 1</p>
              <p className='cardDivP3'>YOUR INFO</p>
            </div>
          </div>

          <div className={`cardDiv ${currentStep === 2 ? 'active' : ''}`}>
            <p className='cardDivP1'>2</p>
            <div className='cardDivDiv'>
              <p className='cardDivP2'>STEP 2</p>
              <p className='cardDivP3'>SELECT PLAN</p>
            </div>
          </div>

          <div className={`cardDiv ${currentStep === 3 ? 'active' : ''}`}>
            <p className='cardDivP1'>3</p>
            <div className='cardDivDiv'>
              <p className='cardDivP2'>STEP 3</p>
              <p className='cardDivP3'>ADD-ONS</p>
            </div>
          </div>

          <div className={`cardDiv ${currentStep === 4 || currentStep === 5 ? 'active' : ''}`}>
            <p className='cardDivP1'>4</p>
            <div className='cardDivDiv'>
              <p className='cardDivP2'>STEP 4</p>
              <p className='cardDivP3'>SUMMARY</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
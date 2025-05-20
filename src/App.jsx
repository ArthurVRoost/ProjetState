import { useState } from "react";
import './App.css'
import Card from './Components/card/Card'
import Form from './Components/form/Form'
import Plan from "./Components/plan/Plan";
import Add from "./Components/add/Add";
import Finish from "./Components/finish/Finish";
import Thanks from "./Components/thanks/Thanks";

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 

    planType: null,
    isYearly: false,

    addOns: {
      onlineService: false,
      largerStorage: false,
      customProfile: false
    }
  })

  const monthlyPrices = {
    arcade: 9,
    advanced: 12,
    pro: 15,
    onlineService: 1,
    largerStorage: 2,
    customProfile: 2
  }

  const yearlyPrices = {
    arcade: 90,
    advanced: 120,
    pro: 150,
    onlineService: 10,
    largerStorage: 20,
    customProfile: 20
  }

  const nextStep = () =>{
    setCurrentStep(currentStep + 1)
  }
  const prevStep = () =>{
    setCurrentStep(currentStep - 1)
  }

  const updateFormData = (newData) =>{
    setFormData({...formData, ...newData})
  }

  const goToStep = (step) =>{
    setCurrentStep(step)
  }

  const calculateTotal = () =>{
    const prices = formData.isYearly ? yearlyPrices : monthlyPrices;
    let total = 0

    if(formData.planType){
      total += prices[formData.planType]
    }
    if(formData.addOns.onlineService){
      total += prices.onlineService
    }
    if(formData.addOns.largerStorage){
      total += prices.largerStorage
    }
    if(formData.addOns.customProfile){
      total += prices.customProfile
    }
    return total;
  }

  const renderStep = () =>{
    switch (currentStep) {
      case 1:
        return(
          <Form formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
        )
      case 2:
        return(
          <Plan formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} monthlyPrices={monthlyPrices} yearlyPrices={yearlyPrices}  />
        )
      case 3:
        return(
          <Add formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} monthlyPrices={monthlyPrices} yearlyPrices={yearlyPrices} />
        )
      case 4:
        return(
          <Finish formData={formData} nextStep={nextStep} prevStep={prevStep} goToStep={goToStep} total={calculateTotal()} monthlyPrices={monthlyPrices} yearlyPrices={yearlyPrices} />
        )
      case 5:
        return(
          <Thanks/>
        )
    
      default:
        return <Form formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
    }
  }
  return (
    <>
      <div className='divApp'>
        <div className='appCard'>
          <Card currentStep={currentStep} />
        </div>
        <div className='appReste'>
          {renderStep()}
        </div>

      </div>
      
    </>
  )
}

export default App

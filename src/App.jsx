// IMPORTS
import { useState } from "react";
import './App.css'
import Card from './Components/card/Card'
import Form from './Components/form/Form'
import Plan from "./Components/plan/Plan";
import Add from "./Components/add/Add";
import Finish from "./Components/finish/Finish";
import Thanks from "./Components/thanks/Thanks";

// FONCTIONS
function App() {
  // le 1 est important pour le switch qui vient apres
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 

    planCard: null,
    annuellement: false,

    addOns: {
      onlineService: false,
      largerStorage: false,
      customProfile: false
    }
  })
  // 2 objets
  const prixMensuel = {
    arcade: 9,
    advanced: 12,
    pro: 15,
    onlineService: 1,
    largerStorage: 2,
    customProfile: 2
  }

  const prixAnnuel = {
    arcade: 90,
    advanced: 120,
    pro: 150,
    onlineService: 10,
    largerStorage: 20,
    customProfile: 20
  }
  
  // gere les boutons next et go back 
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
  
  //calcule 
  const calculateTotal = () =>{
    const prix = formData.annuellement ? prixAnnuel : prixMensuel;
    let total = 0

    if(formData.planCard){
      total += prix[formData.planCard]
    }
    if(formData.addOns.onlineService){
      total += prix.onlineService
    }
    if(formData.addOns.largerStorage){
      total += prix.largerStorage
    }
    if(formData.addOns.customProfile){
      total += prix.customProfile
    }
    return total;
  }

  // SWITCH CASE, j'assigne une valeure a chaque etape du formulaire pour aller facilement de l'un a l'autre le default est la page de base
  const renderStep = () =>{
    switch (currentStep) {
      case 1:
        return(
          <Form formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
        )
      case 2:
        return(
          <Plan formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} prixMensuel={prixMensuel} prixAnnuel={prixAnnuel}  />
        )
      case 3:
        return(
          <Add formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} prixMensuel={prixMensuel} prixAnnuel={prixAnnuel} />
        )
      case 4:
        return(
          <Finish formData={formData} nextStep={nextStep} prevStep={prevStep} goToStep={goToStep} total={calculateTotal()} prixMensuel={prixMensuel} prixAnnuel={prixAnnuel} />
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

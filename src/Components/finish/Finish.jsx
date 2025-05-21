// IMPORTS
import './finish.css'

// FONCTIONS
export default function Finish({ formData, nextStep, prevStep, goToStep, total, prixMensuel, prixAnnuel }) {
    // CONST
    const prix = formData.annuellement ? prixAnnuel : prixMensuel;
    const prixText = formData.annuellement ? '/yr' : '/mo';
    const periodLabel = formData.annuellement ? 'yearly' : 'monthly';
    const totalPeriod = formData.annuellement ? 'per year' : 'per month';
    
    // TU PEUX TECHNIQUEMENT PAS PRENDRE DE PLAN Et JUSTE UN ADD-ON donc message important pour qu'il sache    
    const getPlanName = () => {
        if (!formData.planCard) return "No plan selected";
        // MAJ sur la premiere lettre du plan selectionné
        return formData.planCard.charAt(0).toUpperCase() + formData.planCard.slice(1);
    };

    // Pour avoir les bons add-ons et ça map dessus
    const getSelectedAddOns = () => {
        const selected = [];
        if (formData.addOns.onlineService) {
            selected.push({
                name: "Online Service",
                price: prix.onlineService
            });
        }
        if (formData.addOns.largerStorage) {
            selected.push({
                name: "Larger Storage",
                price: prix.largerStorage
            });
        }
        if (formData.addOns.customProfile) {
            selected.push({
                name: "Customizable Profile",
                price: prix.customProfile
            });
        }
        return selected;
    };
    
    const selectedAddOns = getSelectedAddOns();

    return(
        <>
        <div className='divFinish'>
            <div className='formDiv1 finishDiv1'>
                <h1 className='formH1'>Finishing up</h1>
                <p className='formP'>Double-check if everything looks OK before confirming</p>
            </div>

            <div className='finishDiv2'>
                <div className='finishDiv2Div1'>
                    <div className='finishDiv5'>
                        {/* le 2 c'est pour qu'il aille a la bonnne page grace au switch case */}
                        <h3 className='finishDiv5H3'>{getPlanName()}({periodLabel})</h3>
                        <p className='finishDiv5P' onClick={() => goToStep(2)}>Change</p>
                    </div>
                    <p className='finishDiv2Div1P'>${formData.planCard ? prix[formData.planCard] : 0}{prixText}</p>
                </div>

                {selectedAddOns.length > 0 && (
                    <>  
                    {/* map pour crée une div pour chaque add-on  */}
                        {selectedAddOns.map((addon, index) => (
                            <div className='finishDiv2Div2' key={index}>
                                <p className='finishDiv2Div2P1'>{addon.name}</p>
                                <p className='finishDiv2Div2P2'>+${addon.price}{prixText}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>

            <div className='finishDiv3'>
                <p className='finishDiv3P1'>Total ({totalPeriod})</p>
                <p className='finishDiv3P2'>${total}{prixText}</p>
            </div>

            <div className='planDiv4'>
                <p className='planDiv4P finishP4' onClick={prevStep}>Go Back</p>
                <button className='planBtn finishBtn4' onClick={nextStep}>Confirm</button>
            </div>
        </div>
        </>
    )
}
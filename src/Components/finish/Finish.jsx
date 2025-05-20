import './finish.css'

export default function Finish({ formData, nextStep, prevStep, goToStep, total, monthlyPrices, yearlyPrices }) {

    const prices = formData.isYearly ? yearlyPrices : monthlyPrices;
    const priceLabel = formData.isYearly ? '/yr' : '/mo';
    const periodLabel = formData.isYearly ? 'yearly' : 'monthly';
    const totalPeriod = formData.isYearly ? 'per year' : 'per month';
    
   
    const getPlanName = () => {
        if (!formData.planType) return "No plan selected";
        return formData.planType.charAt(0).toUpperCase() + formData.planType.slice(1);
    };

   
    const getSelectedAddOns = () => {
        const selected = [];
        if (formData.addOns.onlineService) {
            selected.push({
                name: "Online Service",
                price: prices.onlineService
            });
        }
        if (formData.addOns.largerStorage) {
            selected.push({
                name: "Larger Storage",
                price: prices.largerStorage
            });
        }
        if (formData.addOns.customProfile) {
            selected.push({
                name: "Customizable Profile",
                price: prices.customProfile
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
                        <h3 className='finishDiv5H3'>{getPlanName()}({periodLabel})</h3>
                        <p className='finishDiv5P' onClick={() => goToStep(2)}>Change</p>
                    </div>
                    <p className='finishDiv2Div1P'>${formData.planType ? prices[formData.planType] : 0}{priceLabel}</p>
                </div>

                {selectedAddOns.length > 0 && (
                    <>
                        {selectedAddOns.map((addon, index) => (
                            <div className='finishDiv2Div2' key={index}>
                                <p className='finishDiv2Div2P1'>{addon.name}</p>
                                <p className='finishDiv2Div2P2'>+${addon.price}{priceLabel}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>

            <div className='finishDiv3'>
                <p className='finishDiv3P1'>Total ({totalPeriod})</p>
                <p className='finishDiv3P2'>${total}{priceLabel}</p>
            </div>

            <div className='planDiv4'>
                <p className='planDiv4P finishP4' onClick={prevStep}>Go Back</p>
                <button className='planBtn finishBtn4' onClick={nextStep}>Confirm</button>
            </div>
        </div>
        </>
    )
}
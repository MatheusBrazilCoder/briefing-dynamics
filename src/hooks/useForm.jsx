import { useState } from "react";

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep (i, e){
        e.preventDefault();

        if (i < 0 || i >= steps.length) return;

        setCurrentStep(i);
     }

     function firstStep(i) {
        if (i === 0){
            return true
        }
        
        return false;
     }

     function lastStep (i) {
        if( i + 1 === steps.length){
            return true;
        } 
    
        return false;
     }
 
    return{
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        lastStep,
        firstStep,
    };

}

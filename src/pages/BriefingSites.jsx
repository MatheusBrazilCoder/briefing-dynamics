import React from "react";
import UserForm from "../components/briefing-sites-form/UserForm";
import Thanks from "../components/briefing-sites-form/Thanks";
import { useForm } from "../hooks/useForm";
import UserForm2 from "../components/briefing-sites-form/UserForm2";

const BriefingSites = () => {
    const formComponents = [<UserForm/>, <UserForm2/>,<Thanks/>];

    const { currentStep, currentComponent, changeStep, lastStep, firstStep } = useForm(formComponents);

    return (
        <>
            <h1>Briefing Sites</h1>
            <p>{currentComponent}</p> 
            {!firstStep(currentStep) && (
                <button onClick={(e) => changeStep(currentStep - 1, e)}>Voltar</button>
            )}
            {!lastStep(currentStep) ? (
                <button onClick={(e) => changeStep(currentStep + 1, e)}>Avançar</button> 
            ):(
                <button onClick={(e) => changeStep(currentStep + 1, e)}>Enviar</button>  
            )}  
                 
        </>
    );
}

export default BriefingSites;

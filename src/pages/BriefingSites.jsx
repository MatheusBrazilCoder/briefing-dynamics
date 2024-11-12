import React from "react";
import UserForm from "../components/briefing-sites-form/UserForm";
import Thanks from "../components/briefing-sites-form/Thanks";
import { useForm } from "../hooks/useForm";
import UserForm2 from "../components/briefing-sites-form/UserForm2";
import NavForm from "../components/NavForm";

const BriefingSites = () => {
    const formComponents = [<UserForm title={'Use Form 1'}/>, <UserForm2 title={'Use Form 2'}/>, <Thanks title={'Thanks'}/>];
    const titles = formComponents.map(component => component.props.title).filter(title => title);

    const { currentStep, currentComponent, changeStep, lastStep, firstStep } = useForm(formComponents);

    return (
        <>
            <main className="briefing main">
                <NavForm titles={titles} changeStep={changeStep} currentStep={currentStep}></NavForm>
                <h1 className="briefing__title">Preencha para <span className="title--color">criarmos o seu site</span>.</h1>
                <p className="briefing__subtitle">Escolha abaixo o serviço que você está interessado!</p>
                <form>
                    {currentComponent}
                    {!firstStep(currentStep) && (
                        <button className="formButton formButton--back" onClick={(e) => changeStep(currentStep - 1, e)}>Voltar</button>
                    )}
                    {!lastStep(currentStep) ? (
                        <button className="formButton formButton--avanced" onClick={(e) => changeStep(currentStep + 1, e)}>Avançar</button> 
                    ):(
                        <button className="formButton formButton--submit" onClick={(e) => changeStep(currentStep + 1, e)}>Enviar</button>  
                    )}  
                </form> 

            </main>      
        </>
    );
}

export default BriefingSites;

import '../assets/css/header.css'
import logo from '../assets/LOGOTIPO-PRINCIPAL.svg';

const Header = () =>{
    return(
        <>
        <header className="cabecalho">
            <div className="cabecalho__inner">
                <img src={logo} alt="Logo de Agência Fatus" className="cabecalho__logo" />
            </div>
        </header>  
        </>
        
    );
}

export default Header;

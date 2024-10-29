import '../assets/css/navform.css'

const NavForm = () =>{
    return(
        <>
        <div className="container-nav__list">
            <div className="container-nav__item container-nav__item--1">
                <div className="container-nav__circle">
                    <span className="container-nav__number">
                        1
                    </span>
                </div>
                <span className="container-nav__text">
                    Informações
                    Exemplo  1
                </span>
            </div>
        </div>
        
        <div className='line'></div>
        </>
    );
}

export default NavForm;
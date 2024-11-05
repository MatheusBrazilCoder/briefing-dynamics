import '../assets/css/navform.css'

const NavForm = (currentTitle) =>{

    return(
        <>
        <div className="container-nav__list">
            <div className="container-nav__item container-nav__item--1">
                <div className="container-nav__circle container-nav__circle--active">
                    <span className="container-nav__number container-nav__number--active">
                        1
                    </span>
                </div>
                <span className="container-nav__text container-nav__text--active">
                    Informações
                    Exemplo  2
                </span>
            </div>

            <div className="container-nav__item container-nav__item--1">
                <div className="container-nav__circle">
                    <span className="container-nav__number">
                        2
                    </span>
                </div>
                <span className="container-nav__text">
                    Informações
                    Exemplo  2
                </span>
            </div>
        </div>
        
        <div className='line'></div>
        </>
    );
}

export default NavForm;
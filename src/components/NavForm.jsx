import '../assets/css/navform.css'

const NavForm = ({titles, changeStep, currentStep}) =>{

    return(
        <>
        <div className="container-nav__list">
            {titles.map((title, index) => (
                <div 
                    className={`container-nav__item container-nav__item--${index + 1}`} 
                    key={index}
                    onClick={(e) => {
                        e.preventDefault();
                        changeStep(index, e);
                    }}
                >
                    <div className={`container-nav__circle ${index === currentStep ? 'container-nav__circle--active' : ''}`}>
                        <span className={`container-nav__number ${index === currentStep ? 'container-nav__number--active' : ''}`}>
                            {index + 1}
                        </span>
                    </div>
                    <span className={`container-nav__text ${index === currentStep ? 'container-nav__text--active' : ''}`}>
                        {title}
                    </span>
                </div>
            ))}
        </div>
        
        <div className='line'></div>
        </>
    );
}

export default NavForm;
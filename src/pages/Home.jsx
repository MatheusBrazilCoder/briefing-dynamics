import '../assets/css/briefing.css';
import '../assets/css/home.css';
import React from "react";
import { Link } from "react-router-dom";
// Importando os ícones
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidPaintRoll } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Home = () =>{
    return(
        <main className="home main">
            <h1 className="home__title">
                Vamos Criar o Seu <span className="title--color">Briefing</span>.
            </h1>
            <span className="home__subtitle">
            Escolha abaixo o serviço que você está interessado!
            </span>
            <div className="home-nav__list">
                <Link to="/briefing-sites" className="home-nav__item">
                    <div className="home-nav__container">
                        <FaLaptopCode className="home-nav__icon" size={60} />
                        <h2 className="home-nav__title">
                            Criação de Sites
                        </h2>
                    </div>
                </Link>
                <Link to="/briefing-sites" className="home-nav__item">
                    <div className="home-nav__container">
                        <BiSolidPaintRoll className="home-nav__icon" size={60} />
                        <h2 className="home-nav__title">
                            Criação de Marca
                        </h2>
                    </div>
                </Link>
                <Link to="/briefing-sites" className="home-nav__item">
                    <div className="home-nav__container">
                        <AiOutlineFundProjectionScreen className="home-nav__icon" size={60} />
                        <h2 className="home-nav__title">
                            Gestão de 
                            Tráfego Pago
                        </h2>
                    </div>
                </Link>
            </div>
            

        </main>
    );
}

export default Home;

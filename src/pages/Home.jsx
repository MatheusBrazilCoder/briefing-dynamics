import '../assets/css/home.css';
import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <main className="home">
            <h1 className="home__title">
                Vamos Criar o Seu <span className="home__title--color">Briefing</span>.
            </h1>
            <span className="home__subtitle">
            Escolha abaixo o serviço que você está interessado!
            </span>
            <div className="home-nav__list">
                <Link to="/briefing-sites" className="home-nav__item">
                    <div className="home-nav__container">
                        <img src="" alt="" />
                        <h2 className="home-nav__title">
                            Criação de Sites
                        </h2>
                    </div>
                </Link>
            </div>
            

        </main>
    );
}

export default Home;

/* importando o react */
import React from 'react';
/* importando o estilo da landing */
import '../styles/pages/landing.css'
/* importando a imagem da logo */
import logoImg from '../images/logo.svg'
/* importando os icones */
import { FiArrowRight } from 'react-icons/fi'
/* importando o link do react router dom */
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div id="page-landing">
      <div className="content-wrapper">
        {/* logo da aplicação */}
        <img src={logoImg} alt="Happy"/>
        {/* titulo e parágrafo */}
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        {/* cidade e estado */}
        <div className="location">
           <strong>Maceió </strong>
           <span>Alagoas</span>
        </div>
        {/* botão de acessar */}
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </div>
    </div>
    );
}

export default Landing;

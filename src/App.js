
import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Filmbar from './components/Filmbar';
import logonarcos from './images/logonarcos.svg';
import logopolonais from './images/logopolonais.svg';

import Banner from './components/Banner';
import img101 from './images/1-01.png';
import img102 from './images/1-02.png';
import img103 from './images/1-03.png';
import img104 from './images/1-04.png';
import img105 from './images/1-05.png';
import img106 from './images/1-06.png';
import img107 from './images/1-07.png';

import img201 from './images/2-01.png';
import img202 from './images/2-02.png';
import img203 from './images/2-03.png';
import img204 from './images/2-04.png';
import img205 from './images/2-05.png';
import img206 from './images/2-06.png';
import img207 from './images/2-07.png';

import img401 from './images/4-01.png';
import img402 from './images/4-02.png';
import img403 from './images/4-03.png';
import img404 from './images/4-04.png';
import img405 from './images/4-05.png';
import img406 from './images/4-06.png';
import img407 from './images/4-07.png';

import BannerFilm from './components/BannerFilm';
import img301 from './images/Ida.png';
import img302 from './images/avie.png';
import img303 from './images/ColdWar.png';
import img304 from './images/Ida.png';
import img305 from './images/avie.png';
import img306 from './images/ColdWar.png';

import BannerText from './components/BannerText';
import Footer from './components/Footer';


const App = () => {

  const [isSidebarActive,setSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setSidebar(!isSidebarActive)
  }
  
  
  return (
    <div className="App">
      <Navbar handleToggleSidebar={handleToggleSidebar} />
      <Sidebar isSidebarActive={isSidebarActive} />
      <Filmbar
        title="NETFLIX"
        span="ORIGINAL"
        logo={logonarcos}
        subtitle="Regardez la saison 3 maintenant"
        content="Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs d’Escobar passent à l’action et déclarent la guerre au gouvernement."
        button1="Lecture"
        button2="My List"
      />
      <Banner 
        title="Revoir"
        img1={img101}
        img2={img102}
        img3={img103}
        img4={img104}
        img5={img105}
        img6={img106}
        img7={img107}
      />
      <Banner 
        title="Tendances actuelles"
        img1={img201}
        img2={img202}
        img3={img203}
        img4={img204}
        img5={img205}
        img6={img206}
        img7={img207}
      />
      <Filmbar 
         title=""
         logo={logopolonais}
         subtitle="Netflix Découverte - Juillet 2018"
         content="Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski… Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale."
         button1=""
         button2=""
      />
      <BannerFilm
        img1={img301}
        subtitle1="L’âge d’or du cinéma polonai (juillet 2018)"
        img2={img302}
        subtitle2="La nouvelle vague française (juin 2018)"
        img3={img303}
        subtitle3="Direction Cannes (mai 2018)"
        img4={img304}
        subtitle4="Bollywood Classiques (mai 2018)"
        img5={img305}
        subtitle5="La nouvelle vague française (juin 2018)"
        img6={img306}
        subtitle6="Direction Cannes (mai 2018)"

      />
       <Banner 
        title="PROGRAMMES ORIGINAUX NETFLIX"
        img1={img401}
        img2={img402}
        img3={img403}
        img4={img404}
        img5={img405}
        img6={img406}
        img7={img407}
      />
       <BannerText 
        title="Catégories"
        color1="rgb(241,60,109)"
        subtitle1="Comédie"
        color2="rgb(240,180,62)"
        subtitle2="Action"
        color3="rgb(103,143,240)"
        subtitle3="Drame"
        color4="rgb(165,74,235)"
        subtitle4="Sci-Fi"
        color5="rgb(233,96,181)"
        subtitle5="Romance"
        color6="rgb(166,218,62)"
        subtitle6="Thriller"
        color7="rgb(60,212,187)"
        subtitle7="Émissions TV"
      />
      <Footer />
    </div>
  );
}

export default App;

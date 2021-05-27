import React from 'react';
import './index.css';

export default function Footer(){
    return(
        <div className="footer">
            <div class="icon">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
            </div>
            <div class="links">
                <div class="links-columns">
                <ul>
                    <li>Audio et sous-titres</li>
                    <li>Presse</li>
                    <li>Confidentialité</li>
                    <li>Nous contacter</li>
                </ul>
                <ul>
                    <li>Autodescription</li>
                    <li>Relations investisseurs</li>
                    <li>Informations légales</li>
                </ul>
                </div>
                <div class="links-columns">
                <ul>
                    <li>Centre d’aide</li>
                    <li>Recrutement</li>
                    <li>Recrutement</li>
                </ul>
                <ul>
                    <li>Cartes cadeaux</li>
                    <li>Conditions d’utilisation</li>
                    <li>Mentions légales</li>
                </ul>
                </div>
            </div>
            <button>Service Code</button>
            <p>© 1997-2018 Netflix, Inc.</p>
        </div>
    )
}
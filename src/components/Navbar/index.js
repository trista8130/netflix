import React from 'react';
import './index.css';


export default function Navbar ({handleToggleSidebar}){
    return(
        <nav>
            <div className='nav-content'>
                <div className='nav-left'>
                    <img src={require('../../images/logo-Netflix.svg')} alt="logo"/>
                    <ul>
                   <li>
                       <a className='red' href="#">Découverte</a>
                   </li>
                   <li  className='mobile'>
                        <i class="fa fa-caret-down"></i>
                   </li>
                   <li className='laptop'>
                       <a href="#">Séries TV</a>
                   </li>
                   <li className='laptop'>
                       <a href="#">Films</a>
                   </li>
                   <li className='laptop'>
                       <a href="#">Programmes originau</a>
                   </li>
                   <li className='laptop'>
                       <a href="#">Ajouts récents</a>
                   </li>
                   <li className='laptop'>
                       <a href="#">Ma liste</a>
                   </li>
                </ul> 
            </div>
                <div className='nav-right'>
                <ul>
                   <li>
                       <a href="#"><img src={require('../../images/ic-search.svg')} alt="search"/></a>
                   </li>
                   <li>
                       <a className='text' href="#">JEUNESSE</a>
                   </li>
                   <li>
                   <a href="#"><img src={require('../../images/ic-notification.svg')} alt="notification"/></a>
                   </li>
                   <li onClick={handleToggleSidebar}>
                       <a href="#"><img src={require('../../images/ic-profile.svg')} alt="profile"/></a>
                   </li>
               </ul>
            </div>
            </div>
        </nav>
    )
}
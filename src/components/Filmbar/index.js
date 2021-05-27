import React from 'react';
import './index.css';

export default function Filmbar ({title,span,logo,subtitle,content,button1,button2}){
        const h2ClassName = title? 'h2' : 'nonactive h2';
        const buttonClassName = title? 'button' : 'nonactive button';
        const filmbarClassName = title? 'background1 filmbar' : 'background2 filmbar';
    
    return(
        <div className={filmbarClassName}>
        <div className="content">
           <h2 className={h2ClassName}>{title}<span>{span}</span></h2> 
           <img src={logo} alt="logo"/>
           <h3>{subtitle}</h3>
           <p>{content}</p>
           <div className={buttonClassName}>
               <button>{button1}</button>
               <button>{button2}</button>
           </div>
           </div>
        </div>
    )
}
import React from 'react';
import './index.css';

export default function Banner ({title,img1,img2,img3,img4,img5,img6,img7}){
    
    return (
        <div className="banner">
            <h3 >{title}</h3>
            <div className="bannerline">
                <img src={img1} alt="img1"/>
                <img src={img2} alt="img2"/>
                <img src={img3} alt="img3"/>
                <img src={img4} alt="img4"/>
                <img src={img5} alt="img5"/>
                <img src={img6} alt="img6"/>
                <img src={img7} alt="img7"/>
            </div>
        </div>
    )
}
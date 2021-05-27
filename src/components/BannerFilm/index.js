import React from 'react';
import './index.css';

export default function BannerFilm ({img1,subtitle1,img2,subtitle2,img3,subtitle3,img4,subtitle4,img5,subtitle5,img6,subtitle6}){
    
    return(
        <div className="bannerfilm">
            <div className="filmline">
                <div className="box">
                <img src={img1} alt="img1"/>
                <p>{subtitle1}</p>
                </div>
                <div className="box">
                <img src={img2} alt="img2"/>
                <p>{subtitle2}</p>
                </div>
                <div className="box">
                <img src={img3} alt="img3"/>
                <p>{subtitle3}</p>
                </div>
                <div className="box">
                <img src={img4} alt="img4"/>
                <p>{subtitle4}</p>
                </div>
                <div className="box">
                <img src={img5} alt="img5"/>
                <p>{subtitle5}</p>
                </div><div className="box">
                <img src={img6} alt="img6"/>
                <p>{subtitle6}</p>
                </div>
            </div>
        </div>
    )
}
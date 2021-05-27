import React from 'react';
import './index.css';

export default function BannerText ({title,color1,subtitle1,color2,subtitle2,color3,subtitle3,color4,subtitle4,color5,subtitle5,color6,subtitle6,color7,subtitle7}){
    
    return(
        <div className="bannertext" >
            <h3>{title}</h3>
            <div className="bannerline">
                <div className="box" style={{backgroundColor:color1}}>
                 <h4>
                    {subtitle1}
                    <p>
                        <i class='fas fa-angle-down'></i>
                    </p>
                </h4>
            </div>
                <div className="box" style={{backgroundColor:color2}}>
                 <h4>
                    {subtitle2}
                    <p>
                        <i class='fas fa-angle-down'></i>
                    </p>
                </h4>
            </div>
                <div className="box" style={{backgroundColor:color3}}>
                 <h4>
                    {subtitle3}
                    <p>
                        <i class='fas fa-angle-down'></i>
                    </p>
                </h4>
            </div>
                <div className="box" style={{backgroundColor:color4}}>
                 <h4>
                    {subtitle4}
                    <p>
                        <i class='fas fa-angle-down'></i>
                    </p>
                </h4>
            </div>
                <div className="box" style={{backgroundColor:color5}}>
                 <h4>
                    {subtitle5}
                    <p>
                        <i class='fas fa-angle-down'></i>
                    </p>
                </h4>
            </div>
                <div className="box" style={{backgroundColor:color6}}>
                 <h4>
                    {subtitle6}
                    <p>
                        <i class='fas fa-angle-down'></i>
                    </p>
                </h4>
            </div>
                <div className="box" style={{backgroundColor:color7}}>
                 <h4>
                    {subtitle7}
                    <p>
                        <i class='fas fa-angle-down'></i>
                    </p>
                </h4>
            </div>              
            </div>
        </div>
        
    )
}
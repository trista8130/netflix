import React from 'react';
import './index.css';
import image from '../../images/ic-profile.svg';


export default function Sidebar ({isSidebarActive}){
    return(
        <div className={`${isSidebarActive? 'active':''} side-bar`}>
            <ul>
                <li className='profile'><a href="#">
                    <img src={image} alt="profile1"/> 
                    <span>  Zhengbenli</span>
                    </a></li>
                <li className='profile'><a href="#">
                    <img src={image} alt="profile2"/> 
                    <span> Liuyaoyin</span>
                    </a></li>
                <li><a href="#">Manage Profiles</a></li>
            </ul>
            <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Sign out of Netflix</a></li>  
            </ul>
        </div>
    )
}
import React, { useState } from "react";
import './style.css';
import {IoNotifications} from 'react-icons/io5';

function Notification(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    console.log(user);

    return(
        <div className="notification">
            <div className="top">
                <IoNotifications />
                <div className="profile-pic" alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}
                </div> 
            </div>

            <div className="noti-bar">
                <div className="noti-div">
                    <div className="profile-pic" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                </div>
                <div className="noti-div">
                    <div className="profile-pic" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit.</p>
                </div>
                <div className="noti-div">
                    <div className="profile-pic" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam</p>
                </div>
                <div className="noti-div">
                    <div className="profile-pic" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                </div>
                <div className="noti-div">
                    <div className="profile-pic" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit.</p>
                </div>
                <div className="noti-div">
                    <div className="profile-pic" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam</p>
                </div>
                
            </div>

        </div>
    );
}

export default Notification;
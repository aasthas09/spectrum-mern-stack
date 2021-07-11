import React, { useState, useEffect } from "react";
import "./style.css"

function Settings(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user); 

    return(
        <div id="settings" className="center">
            <h1>Settings</h1>
            <div>
                <form action="">
                    <label htmlFor="profile">Profile</label>
                    
                    <img id="profile-pic" alt={user?.result.name} src={user?.result.imageUrl}/>
                    
                    {/* <img src="One.png" id="profile-pic" alt="profile-pic" /> */}
                    <input type="file" name="profile" id="profile" />
                    <label htmlFor="cover">Cover</label>
                    <img src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/01/scenery.jpg?fit=969%2C546&ssl=1" alt="cover-pic" />
                    <input type="file" name="cover" id="cover" />
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="username" />
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@abc.com" />
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="bio" cols="30" rows="10">💜Love yourself Love myself 💜
                    💜Life goes on, let's live on💜</textarea>
                </form>
                <div className="action-buttons">
                    <input type="submit"  value="Save" />
                    <input type="submit"  value="Clear" />
                </div>
            </div>
        </div>
    )
};

export default Settings
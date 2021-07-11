import React, { useState, useEffect } from "react";
import "./style.css";

import posts from "./posts.js";

function Profile() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

    return (
      <div className="center">
        <div className="cover" >
            <img src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/01/scenery.jpg?fit=969%2C546&ssl=1" alt="cover-pic" />
            <div>
                
                <img className="profile" alt={user?.result.name} src={user?.result.imageUrl}/>
                <p className="username" >username</p>
                <p className="name" >Name</p>
                <p className="bio" >💜Love yourself Love myself 💜<br />💜Life goes on, let's live on💜</p>
            </div>
        </div>  

        <h1>Posts</h1>

        <div className="profile-posts">
            {posts.map((tile) => (
                <img  src={tile.img} alt={tile.title} />
            ))}
        </div>
      </div>
  );
}

export default Profile;

//<masonry-rows></masonry-rows>

// import {ReactComponent as ReactLogo} from "./undraw_building_websites_i78t.svg";
// import { ImFacebook,ImGoogle } from "react-icons/im";
// import { withStyles } from '@material-ui/core/styles';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// const PinkCheckbox = withStyles({
//     root: {
//       color: "#eacddf",
//       '&$checked': {
//         color: "#eacddf",
//       },
//     },
//     checked: {},
//   })((props) => <Checkbox color="default" {...props} />);

// const CheckboxWidth = withStyles({
//     root: {
//         width: "78%",
//   },})((props) => <FormControlLabel width="default" {...props} />);

// <div id="login">
// <div id="login-form">
//     <h1>Create Account</h1>
//     <button><ImGoogle className="icon" /></button>
//     <button><ImFacebook className="icon"/></button>
//     <p>or use your email for registration :</p>
//     <form action="">
//         <input type="text" name="" id="" placeholder="Name" />
//         <input type="email" name="" id="" placeholder="Email" />
//         <input type="password" name="" id="" placeholder="Password" />
//         <CheckboxWidth
//             control={<PinkCheckbox name="checkedG" />}
//             label="I agree to the Terms and Condititons"
//         />
//         <div id="form-actions">
//             <button>Sign Up</button>
//             <button>Sign In</button>
//         </div>
//     </form>
// </div>
// <ReactLogo id="login-image" />
// </div>

import React, { useState, useEffect } from "react";
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './style.css';
import {IoSearch} from 'react-icons/io5'

import Post from './Post/Post.jsx';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

  return (

    <div id="posts" className="center">
      
      <div id="main-profile-pic" alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}
        {/* <img src="one.png" alt="" /> */}
        <form action="/" method="get">
          <input
            type="text"
            id="header-search"
            placeholder="Search..."
            name="s" 
        />
        <button className="btn" type="submit"><IoSearch /></button>
      </form>
      </div>


      <div className="sect">
      { 
        !posts.length ? <CircularProgress  value={100} style={{'color': 'white'}}/> : (
            <div className="postsPost">
              {posts.map((post) => (
                <div key={post._id}>
                  <Post post={post} setCurrentId={setCurrentId} />
                </div>
              ))}
            </div>
        )
      }
      </div>
    </div>
  );
};

export default Posts;


// import React from "react";
// import Post from "./Post/Post";
// // import useStyles from './style';
// import './style.css'
// import {IoHeart, IoSearch} from 'react-icons/io5'
// import Dialog from "@material-ui/core/Dialog";
// import MuiDialogContent from "@material-ui/core/DialogContent";
// import { Grid, CircularProgress } from '@material-ui/core';
// import { useSelector } from 'react-redux';

// function Posts(){
    
//     const posts = useSelector((state) => state.posts);
  

//     return(
//         <>
//             <div id="posts">

//                 <form action="/" method="get">
//                         <input
//                             type="text"
//                             id="header-search"
//                             placeholder="Search..."
//                             name="s" 
//                         />
//                         <button className="btn" type="submit"><IoSearch /></button>
//                     </form>

//                 <div className="sect center">
//                     <div className="Grid-one">
//                         <div className="item1 item" onClick={handleClickOpen("one.png")} >
//                             <div>
//                                 <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
//                             </div>
//                             <img src="one.png" alt="" />            
//                             <IoHeart className="heart-icon"/>
//                         </div>
//                         <div className="item2 item" onClick={handleClickOpen("two.png")} >
//                             <div>
//                                 <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
//                             </div>
//                             <img src="two.png" alt="" />            
//                             <IoHeart className="heart-icon"/>
//                         </div>
//                         <div className="item3 item" onClick={handleClickOpen("three.png")} >
//                             <div>
//                                 <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />    
//                             </div>
//                             <img src="three.png" alt="" />            
//                             <IoHeart className="heart-icon"/>
//                         </div>
//                         <div className="item4 item" onClick={handleClickOpen("four.png")} >
//                             <div>
//                                 <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
//                             </div>
//                             <img src="four.png" alt="" />            
//                             <IoHeart className="heart-icon"/>
//                         </div>
//                         <div className="item5 item" onClick={handleClickOpen("five.png")} >
//                             <div>
//                                 <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
//                             </div>
//                             <img src="five.png" alt="" />            
//                             <IoHeart className="heart-icon"/>
//                         </div>
                            
//                     </div>
//                 </div> 
             
//             </div>
//         </>
//     );
// }

// export default Posts;


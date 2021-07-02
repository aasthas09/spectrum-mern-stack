import React from "react";
// import Post from "./Post/Post";
// import useStyles from './style';
import './style.css'
import {IoHeart, IoSearch} from 'react-icons/io5'
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";

function Posts(){
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [dialogImg, setDialogImg] = React.useState("");

    const handleClickOpen = (ImgName) => () => {
        setDialogImg(ImgName);
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  

    return(
        <>
            <div id="posts">

                <form action="/" method="get">
                        <input
                            type="text"
                            id="header-search"
                            placeholder="Search..."
                            name="s" 
                        />
                        <button className="btn" type="submit"><IoSearch /></button>
                    </form>

    
                <div className="sect center">
                    <div className="Grid-one">
                        <div className="item1 item" onClick={handleClickOpen("one.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="one.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item2 item" onClick={handleClickOpen("two.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="two.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item3 item" onClick={handleClickOpen("three.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />    
                            </div>
                            <img src="three.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item4 item" onClick={handleClickOpen("four.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="four.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item5 item" onClick={handleClickOpen("five.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="five.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                            
                    </div>
                </div>
 
                <div className="sect center">
                    <div className="Grid-one">
                        <div className="item1 item" onClick={handleClickOpen("one.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="one.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item2 item" onClick={handleClickOpen("two.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="two.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item3 item" onClick={handleClickOpen("three.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />    
                            </div>
                            <img src="three.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item4 item" onClick={handleClickOpen("four.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="four.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item5 item" onClick={handleClickOpen("five.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="five.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                            
                    </div>
                </div> 

                <div className="sect center">
                    <div className="Grid-one">
                        <div className="item1 item" onClick={handleClickOpen("one.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="one.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item2 item" onClick={handleClickOpen("two.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="two.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item3 item" onClick={handleClickOpen("three.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />    
                            </div>
                            <img src="three.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item4 item" onClick={handleClickOpen("four.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="four.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                        <div className="item5 item" onClick={handleClickOpen("five.png")} >
                            <div>
                                <div className="profile-pic" style={{margin: "5px auto", backgroundColor: "#474747"}} />
                            </div>
                            <img src="five.png" alt="" />            
                            <IoHeart className="heart-icon"/>
                        </div>
                            
                    </div>
                </div>
                
                <Dialog
                    onClose={handleClose}
                    maxWidth="md"
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <MuiDialogContent dividers>
                        <div className="post-view">
                            <div className="post-img">
                                <img src={dialogImg} alt="" />
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                            </div>
                        </div>
                    </MuiDialogContent>
                </Dialog>
            
            </div>
        </>
    );
}

export default Posts;
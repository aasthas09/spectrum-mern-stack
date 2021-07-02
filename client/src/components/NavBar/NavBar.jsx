import React from "react";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';

import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux'
import { createPost } from "../../actions/posts";

//icons
import {MdHome, MdAddAPhoto, MdAccountCircle, MdSettings} from 'react-icons/md';
import { IoLogOut, IoAddCircleSharp } from "react-icons/io5";

//stylesheet
import './style.css';

function NavBar(){
    const [open, setOpen] = React.useState(false);
    
    const [postData, setPostData] = React.useState({ message: '', selectedFile: ''});
    const dispatch = useDispatch();

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit =async(e) =>{
        e.preventDefault();
        dispatch(createPost(postData));
    };
  

    return(
        <div className="left">
            <header><h1>Spectrum</h1></header>
            <ul>
                <li className="home"><MdHome /><span className="side-span"> Home</span></li>
                <li><MdAccountCircle /><span className="side-span"> Profile</span></li>
                <li><MdSettings /><span className="side-span"> Settings</span></li>
                
                {/* <button onClick={handleClickOpen}> */}
                    <li onClick={handleClickOpen}><MdAddAPhoto /><span className="side-span"> Upload</span></li>
                {/* </button> */}
                
            </ul>
            <Dialog
                onClose={handleClose}
                fullWidth={true}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle>
                    <p style={{fontFamily:"'Sacramento', cursive", color:"#474747",fontSize: "40px", fontWeight: "400", margin: "10px"}}>Add a Post</p>
                </DialogTitle>
                <MuiDialogContent dividers>
                    <form id="uploadForm" noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <label>Select Image</label>
                        <div className="grid-div">
                            <IoAddCircleSharp className="add" />
                            <FileBase 
                                multiple={false}
                                onDone={({base64})=> setPostData({...postData, selectedFile: base64})}
                            />
                        </div>
                        <label htmlFor="caption">Add Caption</label>
                        <textarea name="caption" value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} id="caption" cols="20" rows="5" placeholder="Write something..."></textarea>
                        <input type="submit"  value="Submit Post" />
                    </form>
                </MuiDialogContent>
            </Dialog>
            <div className="bottom">
                <p><IoLogOut /><span className="side-span">Logout</span></p>
            </div>
        </div>
    );
}

export default NavBar;
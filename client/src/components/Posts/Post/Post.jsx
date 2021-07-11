import React, { useState, useEffect } from "react";
// import { Typography } from '@material-ui/core/';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { MdDelete, MdHighlightOff } from "react-icons/md";

// import moment from 'moment';
import { useDispatch } from 'react-redux';
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";

import { likePost, deletePost } from '../../../actions/posts';
import '../style.css';

const Post = ({ post, setCurrentId }) => {

  const user = JSON.parse(localStorage.getItem('profile'));
  
  
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [dialogImg, setDialogImg] = React.useState("");

  const handleClickOpen = (ImgName) => () => {
    setDialogImg(ImgName);
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open)
    console.log(!open);
  };

  const Likes = () => {
      if (post.likes.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><IoHeart fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><IoHeartOutline fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
  
      return <><IoHeartOutline fontSize="small" />&nbsp;Like</>;
    };

  return (
  
  <div className="item item5">
      
      {/* Profile of the uploader */}
      {/* <div className="profile-pic" style={{margin: "5px auto"}} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)} 
      </div> */}
      <img className="profile-pic" style={{margin: "5px auto"}} alt={user?.result.name} src={user?.result.imageUrl}/>
      
      {/* Image/Post */}
      <img onClick={handleClickOpen(post.selectedFile)} alt={post.creator} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
      
      <div >
        {/* <Typography variant="h6">{post.creator}</Typography> */}
        <p>{post.message}</p>
        {/* <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography> */}
      </div>
  
      {/* <div >
        <button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}></button>
      </div> */}
      
      <div className="card-action">
        <button disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <IoHeart className="icon"/> <span>{post.likeCount}</span> 
          <Likes /></button>
        <button onClick={() => dispatch(deletePost(post._id))}><MdDelete className="icon"/> </button>
      </div>

      <Dialog
          // onClose={handleClose}
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
                      <MdHighlightOff className="icon" onClick={handleClose} />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit nihil harum. Repellendus quia veritatis tenetur neque nam, perferendis porro, laudantium.</p>
                  </div>
              </div>
          </MuiDialogContent>
      </Dialog>

    </div>
  );
};

export default Post;
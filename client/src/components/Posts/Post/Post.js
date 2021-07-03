import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { IoHeart } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
//import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
 // const classes = useStyles();

  return (
    <Card className="card">
      <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div >
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}></Button>
      </div>
      
      <CardContent>
      <Typography  gutterBottom variant="h5" component="h2">{post.message}</Typography>
      {/* <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography> */}
      </CardContent>
      <CardActions >
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><IoHeart className="heart-icon"/> {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><MdDelete className="delete-icon"/> </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
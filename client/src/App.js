import React, {useState,useEffect} from "react";
import {Grid, Container} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import NavBar from "./components/NavBar/NavBar.jsx";
import Posts from "./components/Posts/Posts.js";
import Notification from "./components/Notification/Notification.jsx";

function App(){
     const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(

        <Container justify="space-between" alignitems="stretch" spacing={3}>
            <Grid item sm={3}>
                <NavBar />
            </Grid>
            <Grid item sm={6}>
                <Posts currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item sm={3}>
                <Notification />
            </Grid>
        </Container>
    );
}

export default App;

import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import { Grid, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";

//Routing
import NavBar from "../NavBar/NavBar.jsx";
import Posts from "../Posts/Posts.jsx";
import Notification from "../Notification/Notification.jsx";
import Profile from "../Profile/Profile.jsx";
import Settings from "../Settings/Settings.jsx";
import Auth from "../Auth/Auth.js";



function Home(){
     const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(

        <Router>
            <Container justify="space-between" alignitems="stretch" spacing={3}>
                <Grid item sm={3}>
                    <NavBar />
                </Grid>
                <Grid item sm={6}>
                    <Route exact path="/Posts">
                        <Posts currentId={currentId} setCurrentId={setCurrentId} />
                    </Route>
                    <Route exact path="/Profile">
                        <Profile />
                    </Route>
                    <Route exact path="/Settings">
                        <Settings />
                    </Route>
                </Grid>
                <Grid item sm={3}>
                    <Notification />
                </Grid>
            </Container>

            

        </Router>
    );
}

export default Home;
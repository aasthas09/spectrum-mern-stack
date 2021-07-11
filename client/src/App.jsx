import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { Container } from '@material-ui/core';


//Routing
import NavBar from "./components/NavBar/NavBar.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Notification from "./components/Notification/Notification.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Auth from "./components/Auth/Auth.js";
import Home from "./components/Home/Home.jsx";





function App(){
    return(
    <Router>
        <Container maxwidth="md">
            <Switch>
                <Route path="/Posts" component={Home} />
                <Route path="/Profile" component={Profile} />
                <Route path="/Settings" component={Settings} />
                <Route path="/" exact component={Auth} />
            </Switch>
        </Container>
    </Router>
    )

}

export default App;



// import React from "react";
// import { BrowserRouter, Switch, Route} from "react-router-dom";
// import { Container } from '@material-ui/core';

// import NavBar from "./components/NavBar/NavBar.jsx";
// import Posts from "./components/Posts/Posts.jsx";
// import Notification from "./components/Notification/Notification.jsx";
// import Auth from "./components/Auth/Auth.js";
// import Home from "./components/Home/Home.jsx";
// import Profile from "./components/Profile/Profile.jsx";
// import Settings from "./components/Settings/Settings.jsx";

// const App = () => (
//     <BrowserRouter>
//       <Container maxWidth="md">
//         <Switch>
//           <Route path="/Posts" exact component={Home}/>
//           <Route path="/Profile" component={Profile} />
//           <Route path="/Settings" component={Settings} />
//           <Route path="/" exact component={Auth} />
//         </Switch>
//       </Container>
//     </BrowserRouter>
    
// );
  

// export default App;

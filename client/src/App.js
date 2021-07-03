import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Container } from '@material-ui/core';
import NavBar from "./components/NavBar/NavBar.jsx";
import Posts from "./components/Posts/Posts.js";
import Notification from "./components/Notification/Notification.jsx";
import Auth from "./components/Auth/Auth.js";
import Home from "./components/Home/Home.js";


const App = () => (
    <BrowserRouter>
      <Container maxWidth="lg">
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
  

export default App;

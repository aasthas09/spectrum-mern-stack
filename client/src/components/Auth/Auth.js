import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Input from './Input';
import { signin, signup } from '../../actions/auth';
import './style.css';

import {ReactComponent as ReactLogo} from "./undraw_building_websites_i78t.svg";
import { ImFacebook,ImGoogle } from "react-icons/im";
import { withStyles } from '@material-ui/core/styles';

const PinkCheckbox = withStyles({
    root: {
      color: "#eacddf",
      '&$checked': {
        color: "#eacddf",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const CheckboxWidth = withStyles({
    root: {
        width: "78%",
  },})((props) => <FormControlLabel width="default" {...props} />);




const initialState = { firstName: '', email: '', password: '', confirmPassword: '' };



const Auth = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState) ;
  const dispatch = useDispatch();
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); 
  const history = useHistory();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });

      history.push('/Posts');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  
  

  return (
    
      <div id="login">
        
        <div id="login-form">

            <h1>Create Account</h1>
            
            <GoogleLogin
                  clientId="395169917947-4f07i7552sgf09nqsm03gncnojedud2o.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button onClick={renderProps.onClick}>
                        <ImGoogle className="icon" />
                    </button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleError}
                  cookiePolicy="single_host_origin"
              />
              <button><ImFacebook className="icon"/></button>
              
              <p>or use your email for registration :</p>
              
              <form  onSubmit={handleSubmit} >
                          { isSignup && (
                          <>
                          {/* <Input name="firstName" label="First Name" handleChange={handleChange} type='text' /> */}
                          <Input name="firstName" label="Name" handleChange={handleChange}  />
                          </>
                          )}
                          <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                          <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                          { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                          <CheckboxWidth
                            control={<PinkCheckbox name="checkedG" />}
                            label="I agree to the Terms and Conditions"
                          />
                          <div id="form-actions">
                            <button type="submit" >{ isSignup ? 'Sign Up' : 'Sign In' }</button>
                            <button type="submit" onClick={switchMode} >{ isSignup ? 'Sign In' : 'Sign Up' }</button>
                          </div>
              
            </form>
        
        </div>
          
        <ReactLogo id="login-image" />

      </div>
   
  
  )
}
export default Auth;






// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
// import { GoogleLogin } from 'react-google-login';
// import { useHistory } from 'react-router-dom';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// import Input from './Input';
// import useStyles from './styles';  
// import Icon from './icon';
// import { signin, signup } from '../../actions/auth';

// const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

// const Auth = () => {
//   const classes = useStyles();

//   const [showPassword, setShowPassword] = useState(false);
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState(initialState) ;
//   const dispatch = useDispatch();
//   const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword); 
//   const history = useHistory();
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignup) {
//       dispatch(signup(formData, history));
//     } else {
//       dispatch(signin(formData, history));
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const switchMode = () => {
//     //setForm(initialState);
//     setIsSignup((prevIsSignup) => !prevIsSignup);
//     setShowPassword(false);
//   };

//   const googleSuccess = async (res) => {
//     const result = res?.profileObj;
//     const token = res?.tokenId;

//     try {
//       dispatch({ type: 'AUTH', data: { result, token } });

//       history.push('/');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  
  

//   return (
//     <Container component="main" maxWidth="md" >
    
//     <Grid item xs={false} sm={4} md={7} className={classes.image} />
//     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
//       <div className={classes.paper}>
        
        
//         <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
//         <form className={classes.form} onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//                 { isSignup && (
//                 <>
//                 <Input name="firstName" label="First Name" handleChange={handleChange} type="text" autoFocus half />
//                 <Input name="lastName" label="Last Name" handleChange={handleChange} half />
//                 </>
//                 )}
//                 <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
//                 <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
//                 { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
//                 <FormControlLabel
//                     control={<Checkbox value="remember" color="primary" />}
//                     label="I agree to the Terms and Conditions." />
//            </Grid>

//            <Grid container >
//             <Grid item>
//             <Button type="submit"  variant="contained" color="primary" className={classes.submit}  >
//                 { isSignup ? 'Sign Up' : 'Sign In' }
//             </Button>
//             <Button onClick={switchMode} justify="flex-end" type="submit"  variant="contained" color="primary" className={classes.submit}>
//                 { isSignup ? 'Sign In' : 'Sign Up' }
//             </Button>
//             </Grid>
//             </Grid>
//             <GoogleLogin
//             clientId="395169917947-4f07i7552sgf09nqsm03gncnojedud2o.apps.googleusercontent.com"
//             render={(renderProps) => (
//               <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
               
//               </Button>
//             )}
//             onSuccess={googleSuccess}
//             onFailure={googleError}
//             cookiePolicy="single_host_origin"
//             />
           
//         </form>
//       </div>
//     </Grid>
   
//   </Container>
  
//   )
// }


// export default Auth;
 
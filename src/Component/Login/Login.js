import React, { useState } from 'react';
import {Link ,useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google  from './google.png';
import github  from './github.png';







const Login = () => {
    

    const {loginEmailAndPassword, error , signInUsingGoogle,
        singInUsingGithub , setUser, setError , setIsLoading } = useAuth();
        const location = useLocation();
        const history = useHistory();
        const redirect_url = location.state?.from || '/home';
        
        
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleEmailField = e =>{
            setEmail(e.target.value)
        }
        const handlePasswordField = e =>{
            setPassword(e.target.value)
        }

     const handleLogin = (e) =>{
        e.preventDefault();
        loginEmailAndPassword(email, password)
        .then(result => {
            // Signed in 
            setUser(result.user);
            history.push(redirect_url)
          })
          .catch((error) => {
            
            setError(error.message);
            
            
          })
          .finally(()=>{
            setIsLoading(false)
          });
        
     }
      const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result => {
            setIsLoading(true);
            setUser(result.user);
            history.push(redirect_url)
          })
          .catch((error) => {
            
            setError(error.message);
            
            
          })
          .finally(()=>{
            setIsLoading(false)
          });
        
      }  

      const handleGithubLogin = () =>{
          singInUsingGithub()
          .then(result => {
            setIsLoading(true);
            setUser(result.user);
            history.push(redirect_url)
          })
          .catch((error) => {
            
            setError(error.message);
            
            
          })
          .finally(()=>{
            setIsLoading(false)
          });
        
      }
    return (
        <div className="container py-5">
            <div className="row ">
                <div className="col-md-3"></div>
                <div className="col-12 col-sm-12 col-md-6 p-5 card-bg" >
                    <h2 className='text-primary'>Please Login</h2>
                    
                <form onSubmit={handleLogin}>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input onBlur={handleEmailField} placeholder='Your Email'  type="email" class="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                        <input onBlur={handlePasswordField} placeholder='Your Password'  type="password" class="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <h5>{error}</h5>
                    <button className='btn Health-button' type='submit' value=''><i class="fas fa-sign-in-alt"></i> Login</button>
                    </form> 
            
                       <h4>Are you new user? <Link to="/register">Please Register</Link> </h4>
                       <h2 className='text-center '>Or</h2>
                       <div className='d-flex justify-content-around'>
                           <button onClick={handleGoogleLogin} className='Health-button'> <img className='socail-login-button' src={google} alt="" /> Sing In</button>
                           <button onClick={handleGithubLogin} className='Health-button'> <img className='socail-login-button' src={github} alt="" /> Sing In</button>
                       </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Login;
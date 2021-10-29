import React, { useState } from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const Register = () => {
    const {creteAccountWithGoogle, updateName, error , setUser ,setError, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    

    const handleEmailField = e =>{
       
        setEmail(e.target.value)
    }
    const handlePasswordField = e =>{
        setPassword(e.target.value)
    }
    const handleNameField =  e =>{
        setName(e.target.value)
    }


    const handleRegistration = e =>{
        e.preventDefault();
        creteAccountWithGoogle(email, password)
        .then(result =>{
            setIsLoading(true);
            updateName(name)
            history.push(redirect_url);
            setUser(result.user);
            
          })
          .catch((error) => {
            
            setError(error.message);
          })
          
          .finally(()=>{
            setIsLoading(false)
          });
        }
    
    return (
        <div className='container py-5'>
        
            
            <div className="row ">
                <div className="col-md-3"></div>
                <div className="col-10 col-md-6 card-bg  p-5" >
                <h2 className='text-primary'>Please Register</h2>
                    
                <form onSubmit={handleRegistration}>
                    <div class="row mb-3">
                        <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                        <input placeholder='Your Name' onBlur={handleNameField}  type="text" class="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input placeholder='Your Eamil' onBlur={handleEmailField}  type="email" class="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                        <input placeholder='Password' onBlur={handlePasswordField}  type="password" class="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <h2>{error}</h2>
                    <button className='btn Health-button' type='submit' value=''><i class="fas fa-sign-in-alt"></i>  Register</button>
            
                    </form> 
            
                    <h4>Are you already register?  <Link to='/login'>Please Login</Link></h4>
                </div>
                <div className="col-md-3"></div>
            </div>
           
        </div>
    );
};

export default Register;
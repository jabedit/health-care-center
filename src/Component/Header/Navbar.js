import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import img from  './imges/logo.png'
import './Navbar.css';

const Navbar = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <div className="bg-white">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/home"><span className='logo-text'><img className='logo-iamge' src={img} alt="" />Health-Care</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-align ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/departments">Departments</Link>
                            </li>
                            
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/doctor">Doctors</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex px-2">
                            <Link to="/login"><button className="btn nav-button-uniqe mx-2" type="submit"><i class="fas fa-sign-in-alt"></i> Login</button></Link>
                            <span>{user.displayName}</span>
                           {user.email && <button onClick={logout} className="btn nav-button-uniqe mx-2" type="submit"><i class="fas fa-sign-out-alt"></i> Logout</button>}
                            <span></span>
                           
                             
                            <Link to="/register"><button className="btn nav-button-uniqe mx-2" type="submit"><i class="fas fa-sign-in-alt"></i>  Register</button></Link>
                            {/* <button className="btn btn-outline-info" type="submit">Make an Apoinment</button> */}
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;


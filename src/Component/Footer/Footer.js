import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import img from '../Header/imges/logo.png';

const Footer = () => {
    return (
        <div className="footer py-5">
               
                <div className="container">
                   <div className="row ">
                        <div className="col-md-3 col-sm-6  col-12 footer-items">
                        <h2 className="footer-brand"><Link class="navbar-brand" to="/home"><span className='logo-text'><img className='logo-iamge' src={img} alt="" />Health-Care</span></Link></h2>
                        <p>What is healthcare in your own words?
                            Healthcare is defined as the prevention and treatment of diseases through medical professional services.</p>
                            <div className="icon">
                                <span className="d-flex justify-content-between">
                                    <i class="fab fa-facebook-square"></i>
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-twitter-square"></i>
                                </span>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6  col-12 footer-items">
                        <h2 className="item-title">Explore</h2>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Departments</a></li>
                                <li><a href="">Doctors</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6   col-12 footer-items">
                        <h2 className="item-title">Resource</h2>
                            <ul>
                                <li><a href="">Team</a></li>
                                <li><a href="">Admission</a></li>
                                <li><a href="">Portfolio</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6  col-12 footer-items">
                        <h2 className="item-title">Address</h2>
                            <ul>
                                <li><a href=""><i class="fas fa-map-marker-alt"></i> Patantula,sylhet, Bangladesh</a></li>
                                <li><a href=""><i class="fas fa-phone-square-alt"></i> 01772-552834</a></li>
                                <li><a href=""><i class="fas fa-envelope-square"></i> info.dts@gmail.com</a></li>
                                
                            </ul>
                        </div>
                        
                        
                    </div>
                    <hr className="bg-light" />
                    <h5 className="text-light text-center">© 2021 is Proudly Powered by <span className="footer-brand">HealthCareCenter</span> </h5>
                
                   </div>
           
        </div>
    );
};

export default Footer;
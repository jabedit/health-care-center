import React from 'react';
import Department from '../Department/Department';
import Departments from '../Department/Departments';
import Dorctor from '../Doctor/Dorctor';
import chose from './way-chose.jpg';
import './Home.css';


const Home = () => {
    return (
        <div>
            <div className="banner-section ">
               <div className="container">
                    <div className="row ">
                        <div className="col-mg-6 col-12 ">
                            <div>
                                <h2 className='banner-head'>Health Care</h2>
                                <h3 className='banner-head-2'>For hole family</h3>
                                <p className='banner-description'>In healthcare section, services excellence is the facility  of <br/> the hospital as helthcare service provider to consistently</p>
                                <button className='Health-button'>Check Our Service</button>
                            </div>
                        </div>  
                        
                    </div>
               </div>
               
               
            </div>
            <div id='emargency-section' className=" ">
                <div className='container'>
                    <div className=" row ">
                       <div className="col-md-4 col-12  py-4">
                            <div className ="ema-srv-icon">
                             <i class="fas fa-ambulance"></i>
                            </div>
                            <h2 className='ema-srv-title'>Hospitality</h2>
                            <p className='ema-srv-description'>Social workers also organize services and paperwork when patients leave the hospital.</p>
                            <button className='ema-health-button'>Apply for a bad</button>
                       </div>
                       <div className="col-md-4 col-12 py-4 emargency-section-middle-bd">
                            <div className ="ema-srv-icon">
                            <i class="fas fa-phone-volume"></i>
                            </div>
                            <h2 className='ema-srv-title'>Emergency Care</h2>
                            <p className='ema-srv-description'>Clinical excellence must be the priority for any health care service provider.</p>
                            <button className='ema-health-button'>880177255398</button>
                       </div>
                       <div className="col-md-4 col-12 py-4">
                            <div className ="ema-srv-icon">
                            <i class="fas fa-briefcase-medical"></i>
                            </div>
                            <h2 className='ema-srv-title'>Chamber Service</h2>
                            <p className='ema-srv-description'>Most people in Bangladesh are living in villages and small towns but most hospitals</p>
                            <button className='ema-health-button'> Make a Apointment</button>
                       </div>
                       

                       
                   </div>
                </div>
                   
            </div>
            <div>
                <Departments></Departments>
            </div>
            <div className=" pt-5">
                <div className="py-4">
                        <h2 className="section-headding">WHAT MAKES US BEST?</h2>
                        <hr className="line" style={{height:"3px", width:"100px", margin:"auto", backgroundColor:"#4AA8FD; "}} />
                </div>
                <div className="row g-0 ">

                    <div className="col-12 col-md-5">
                        <img className='choses-img ' src={chose} alt="" />
                    </div>
                    <div className="col-12 col-md-7 chose-bg p-5">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className='d-flex justify-content-around '>
                                    <div className="choseUs-icon"><i class="fas fa-user-md"></i></div>
                                    <div className="choseUs-text">
                                        <h4 className='card-title'>QUALIFIED DOCTORS</h4>
                                        <p>We have expert doctors, with whom you can safely take your health tips and treatment</p>
                                    </div>

                                </div>
                                <div className='d-flex justify-content-around pt-4'>
                                    <div className="choseUs-icon"><i class="fas fa-stethoscope"></i></div>
                                    <div className="choseUs-text">
                                        <h4 className='card-title'>FREE CONSULTATION</h4>
                                        <p>We have a wise doctor to talk to you about your problem and you can solve your problem</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className='d-flex justify-content-around'>
                                    <div className="choseUs-icon"><i class="fas fa-file-invoice-dollar"></i></div>
                                    <div className="choseUs-text">
                                        <h4 className='card-title'>ONLINE ENROLLMENT</h4>
                                        <p>You can book and pay online. We will treat you with that opportunity</p>
                                    </div>

                                </div>
                                <div className='d-flex justify-content-around pt-4'>
                                    <div className="choseUs-icon"><i class="fas fa-lungs-virus"></i></div>
                                    <div className="choseUs-text">
                                        <h4 className='card-title'>MODERN FACILITIES</h4>
                                        <p>We offer you all kinds of modern treatment and facilities. Our goal is to keep you healthy</p>
                                    </div>

                                </div>
                            </div>
                            
                            
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Home;
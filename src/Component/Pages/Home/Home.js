import React from 'react';
import Department from '../Department/Department';
import Departments from '../Department/Departments';
import Dorctor from '../Doctor/Dorctor';
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
            
        </div>
    );
};

export default Home;
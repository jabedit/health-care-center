import React, { useEffect, useState } from 'react';
import UniqueDr from './UniqueDr';

const Dorctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('doctores.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    },[])
    return (
        <div className="doctors-section py-5">
            <div className="container ">
                <div className="pb-5">
                        <h2 className="section-headding">Expart Doctors</h2>
                        <hr className="line" style={{height:"3px", width:"100px", margin:"auto", backgroundColor:"#4AA8FD; "}} />
                </div>
                <div className="row g-5 ">
                    {
                        doctors.map(doctor => <UniqueDr
                        
                            key = {doctor.img}
                            doctor={doctor}
                        ></UniqueDr>)
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default Dorctor;
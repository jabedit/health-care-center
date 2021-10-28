import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const UniqueDr = (props) => {
    const {name, img, expart} = props.doctor;
    return (
        <div className="col-md-3 col-sm-6 col-12" >
            <div className="card border-0 card-bg">
                    <div className="cart-image">
                        <img className="img-fluid dr-img" src={img}  alt="..."/>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{expart}</p>
                    <Link href="#" className="btn Health-button">Book Now</Link>
                </div>  
            </div>
        </div>
    );
};

export default UniqueDr;
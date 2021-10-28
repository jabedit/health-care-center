import React from 'react';
import { Link } from 'react-router-dom';
import NotPage from './404.png';
const NotFound = () => {
    return (
        <div>
            <div className='container py-5'>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img className='img-fluid' src={NotPage} alt="" />
                    <Link  to='/'><button className='Health-button'>Go Back</button></Link>
                </div>
                <div className="col-md-2"></div>
            </div>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import './Department.css'

const Department = (props) => {

    const {id, departmentName, img, descreption} = props.department;
    return (
        <div className="col-md-4 col-12">
            
            <div class="card edit-card border-0">
                    <div className="cart-image">
                            <img src={img}  alt="..."/>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{departmentName}</h4>
                        <p class="card-text">{descreption}</p>
                    </div>
                    
                    <div class="card-body">
                    <Link to={`/servdescription/${id}`}><button  className='Health-button'>Learn More..</button> </Link>
                       
                    </div>
                    
               
            </div>
        </div>
    );
};

export default Department;
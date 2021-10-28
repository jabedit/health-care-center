import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ServiceDescription = () => {
    const {id} = useParams();
    const [descreptions, setDescreption] = useState({});
    useEffect(() =>{
        fetch('/singleServiceDescription.json')
        .then(res => res.json())
        .then(data => {
            const foundService = data.serviceSingleDesc.find(serviceSingleDesc => serviceSingleDesc.singleDesc.id == id);
            setDescreption(foundService);
            
        })
    },[id])
    
    

    return (
        <div className='container py-5'>

            <div className="row">
                <div className="col-md-2 col-12"></div>
                <div className="col-md-8 col-12">
                    
                    <div class="card edit-card border-0">
                            <div className="cart-image">
                                    <img src={descreptions?.singleDesc?.img}  alt="..."/>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">{descreptions?.singleDesc?.departmentName}</h4>
                                <p class="card-text">{descreptions?.singleDesc?.descreption}</p>
                            </div>
                            
                            <div class="card-body">
                                <Link to="/departments"><button className='Health-button'><i class="fas fa-angle-right"></i>Back Services</button></Link>
                            
                            </div>
                            
                
                        </div>
                    </div>
                    <div className="col-md-2 col-12"></div>
            </div>
            
            
        </div>

        
    );
};

export default ServiceDescription;
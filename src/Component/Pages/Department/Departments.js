import React, { useEffect, useState } from 'react';
import Department from './Department';
import './departments.css'

const Departments = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(()=>{
        fetch('departments.json')
        .then(res => res.json())
        .then(data => setDepartments(data));
    },[])
    return (
        <div className="department-section">
            <div className="container ">
            <div className="py-4">
                    <h2 className="section-headding">Our Departments</h2>
                    <hr className="line" style={{height:"3px", width:"100px", margin:"auto", backgroundColor:"#4AA8FD; "}} />
            </div>
                <div className="row g-5 ">
                    
                    
                        {
                            departments.map(department=><Department
                                key ={department.departmentName}
                                department = {department}
                            
                            ></Department>)
                        }
                 
                </div>
            </div>
        </div>
    );
};

export default Departments;
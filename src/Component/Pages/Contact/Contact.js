import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="row">
            <div className="py-4">
                    <h2 className="section-headding">Contact Us</h2>
                    <hr className="line" style={{height:"3px", width:"100px", margin:"auto", backgroundColor:"#4AA8FD; "}} />
            </div>
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-8 mx-auto">
                            
                           <form>
                               <h2 className="navbar-brand-home text-primary">Tratement Counselling</h2>
                               
                           <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="Enter Your Number" placeholder="Enter Your phone number"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn nav-button-uniqe mb-3">Submit</button>
                            </div>
                           </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;
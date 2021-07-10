import React from 'react'

const StudChildProps=({changeEvent})=> {
    return (
        
        <div className="container register">
        <div className="row">
            <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Welcome</h3>
                
                <input type="submit" name="" value="Login"/><br/>
            </div>
            <div className="col-md-9 register-right">
                {/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                    </li>
                </ul> */}
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 className="register-heading">Apply as a Employee</h3>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="First Name *" name="firstName" onChange={changeEvent}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name *" name="lastName" onChange={changeEvent}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *"  name="password" onChange={changeEvent}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"  placeholder="Confirm Password *"  name="confirmPassword" onChange={changeEvent}/>
                                </div>
                                <div className="form-group">
                                    <div className="maxl">
                                        <label className="radio inline"> 
                                            <input type="radio" name="gender" value="male" onChange={changeEvent}/>
                                            <span> Male </span> 
                                        </label>
                                        <label className="radio inline"> 
                                            <input type="radio" name="gender" value="female" onChange={changeEvent}/>
                                            <span>Female </span> 
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *"  name="email" onChange={changeEvent}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" className="form-control" placeholder="Your Phone *"  name="phoneNumber" onChange={changeEvent}/>
                                </div>
                                <input type="submit" className="btnRegister"  value="Register"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}
export default StudChildProps;


   // <div>
        //  <div classNameName="card w-50">
        //       <div classNameName="card-body justify-content -start">
        //         <h5 classNameName="card-title">On Change Event On Parents</h5>
        //              <legend>Form title</legend>
        //              <div classNameName="form-group">
        //                 <input type="text" name="firstName" onChange={changeEvent} classNameName="form-control"/>
        //                 <input type="text" name="firstName" onChange={changeEvent} classNameName="form-control"/>
        //                 <input type="text" name="firstName" onChange={changeEvent} classNameName="form-control"/>
        //                 <input type="text" name="firstName" onChange={changeEvent} classNameName="form-control"/>
        //                 <input type="text" name="firstName" onChange={changeEvent} classNameName="form-control"/>
        //                 <input type="text" name="firstName" onChange={changeEvent} classNameName="form-control"/>
        //                 <input type="text" name="firstName" onChange={changeEvent} classNameName="form-control"/>

        //              </div>
        //              <button type="submit" classNameName="btn btn-primary">Submit</button>
        //       </div>
        //     </div>
        // </div>
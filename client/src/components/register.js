import React from "react";
import Form from 'react-bootstrap/Form';
import './register.css'


function Register() {


    return (
        <div className="register">
           
            <div className="container-register" >
            
            <form onSubmit={Register} >
                <br></br> <br></br>

                <div className="row">
                    <div className="col-5" >
                        <label for="exampleInputEmail1" class="form-label"> UserName:</label>
                    </div>
                    <div className="col-5" >
                        <input
                            type="text" class="form-control" id="name"

                        />
                    </div>
                </div>
                <br></br>

                <div className="row">
                    <div className="col-5" >
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                    </div>
                    <div className="col-5" >
                        <input
                            type="password" class="form-control" id="password"

                        />
                    </div>
                </div>
                <br></br>

                <div className="row">
                    <div className="col-5" >
                        <label for="exampleInputPassword1" class="form-label">Re-enter Password</label>
                    </div>
                    <div className="col-5" >
                        <input
                            type="password" class="form-control" id="pwd"

                        />
                    </div>
                </div>

                <br></br>

                <div className="row">
                    <div className="col-5" >
                        <label for="exampleInputPassword1" class="form-label">E-mail:</label>
                    </div>
                    <div className="col-5" >
                        <input
                            type="email" class="form-control" id="email"

                        />
                    </div>
                </div>

                <br></br>

                <div className="row">
                    <div className="col-5" >
                        <label for="exampleInputPassword1" class="form-label">Phone number</label>
                    </div>
                    <div className="col-5" >
                        <input
                            type="tel" class="form-control" id="phn"

                        />
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-5" >
                        <label for="exampleInputPassword1" class="form-label">City</label>
                    </div>
                    <div className="col-5" >
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="Panadura">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>


                <br></br>





               <input type="submit" class="btn btn-primary" value="Register for Free"  style={{marginLeft:"30%"}}/>


            </form>
        </div>  </div >
    )
}

export default Register;
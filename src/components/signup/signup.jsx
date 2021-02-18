import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Login from "../login/login";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './signup.css'


function Signup() {
    const [data, setData] = useState([{
        name: "",
        email: "",
        phone: "",
        password: "",
    }])

    function hanldsubmit(event) {
        event.preventDefault();
        setData(prev => {
            return prev.concat([{
                name: document.getElementById("name").value,
                email:document.getElementById("email").value, 
                phone:document.getElementById("phone").value, 
                password:document.getElementById("password").value, 
            }])
        })
        console.log(data)
        alert("Form Submit");
        window.location.href= "./../login/login.jsx"
    }




    return (
        <div className="center">
            <MDBContainer>
                <MDBRow className="rowcenter">
                    <MDBCol md="6">
                        <form className="formcenter" onSubmit={hanldsubmit}>
                            <p className="h4 text-center mb-4">Sign up</p>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                Your name
                             </label>
                            <input type="text" id="name" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input type="email" id="email" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                                Phone
                            </label>
                            <input type="text" id="phone" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                Your password
                            </label>
                            <input type="password" id="password" className="form-control" />
                            <div className="text-center mt-4">
                                <MDBBtn color="unique" type="submit">
                                    Register
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
);




        </div>
    )
}

export default Signup;
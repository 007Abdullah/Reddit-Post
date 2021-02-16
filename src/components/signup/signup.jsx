import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Login from "../login/login";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './signup.css'


function Signup() {
    return (
        <div className="center">
            <MDBContainer>
                <MDBRow className="rowcenter">
                    <MDBCol md="6">
                        <form className="formcenter">
                            <p className="h4 text-center mb-4">Sign up</p>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                Your name
                             </label>
                            <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                                Confirm your email
                            </label>
                            <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                Your password
                            </label>
                            <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
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
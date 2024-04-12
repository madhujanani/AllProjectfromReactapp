import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap'
import { faUser,faEnvelope,faLock,faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faUser,faEnvelope,faLock,faEye,faEyeSlash )

const LoginTask = () => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const[show,setShow]=useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const handleForgotPassword = () => {
        // Implement your forgot password logic here
        console.log('Forgot Password clicked');
    };
    const handleShowpassword=()=>{
        setShow(!show)
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        } else if (values.password.length > 12) {
            errors.password = "Password cannot exceed more than 12 characters";
        }
        return errors;
    };

    return (
        <div className='image' >
            <div className='wrapper'>
                <header className='header'>
                    <h2 style={{ color: 'gainsboro' }}>header change image later</h2>
                    <br></br>
                    <hr></hr>
                </header>
                <aside className='aside aside1'>
                </aside>

                <aside className='aside aside2'>

                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div className="ui_message_success">Signed in successfully</div>
                    ) : (
                        <pre></pre>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="ui divider"></div>
                        <div className="ui form">
                            <div className="field">
                                <label></label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter email address"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.email}</p>
                            <div className="field">
                                <label></label>
                                <input
                                    type={show?"text":"password"}
                                    name="password"
                                    placeholder="Enter Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                                <label className='show' onClick={handleShowpassword}><FontAwesomeIcon icon={show?"eye":"eye-slash"}/> </label>

                            </div>
                            <p>{formErrors.password}</p>
                            <div className='forgotpass'>
                                
                                <a href="./ForgotPassword" onClick={handleForgotPassword}>
                                    Forgot Password?
                                </a>
                                {/* <Nav>
                                    <Nav.Link href="/ForgotPassword">Forgot Password?</Nav.Link>
                                </Nav> */}
                            </div>

                            <br></br>

                            <button className="fluid ui button red">Login</button>
                        </div>
                        <div className='marstag'>
                            <h6>@MARS Solution Group</h6>

                        </div>
                    </form>
                </aside>
                <footer className='footer'>
                </footer>

            </div>
            <div className="container">


                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui_message_success">Signed in successfully</div>
                ) : (
                    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                )}


                <form onSubmit={handleSubmit}>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label></label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter email address"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="field">
                            <label></label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>
                        <div className='forgotpass'>
                            <a href="#" onClick={handleForgotPassword}>
                                Forgot Password?
                            </a>
                        </div>
                        <br></br>
                        <br></br>

                        <button className="fluid ui button red">Login</button>
                    </div>
                    <div className='marstag'>
                        <h6>@MARS Solution Group</h6>

                    </div>
                </form> */}

            </div>

        </div>


    );
}

export default LoginTask;

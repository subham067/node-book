import React, { useState, useContext } from 'react'
import { NavLink , useHistory } from "react-router-dom";
import NoteContex from '../compononts/notes/NoteContex';

function Login() {
    const context = useContext(NoteContex)
    const { subham } = context;
    let history = useHistory();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState(" ");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }

        else {
            const data = {
   
                email: title,
                 password: desc
             };

            fetch('http://localhost:5000/api/auth/login', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json() )
                
                .then(data => {
                    alert(  data.jwtData)
                    console.log( data);
                    localStorage.setItem("jwtData", data.jwtData);
                    subham()
                    history.push("/");
                })
                .catch((error) => {
                    alert('Error:', error)
                    console.error('Error:', error);
                });

           
           
            setTitle(" ");
            setDesc(" ");
        }
    }
    return (
        <div>

            <section className="vh-100 " style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-9 d-flex align-items-center col-lg-6 col-xl-5">
                                            <img
                                                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                                                className="img-fluid mx-auto my-auto"
                                                alt="Sample image"
                                            />
                                        </div>
                                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                            <form onSubmit={submit}>
                                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">

                                                </div>
                                                <div className="divider d-flex align-items-center my-4">
                                                    <p className="text-center h1 fw-bold   ">
                                                        Sign in
                                                    </p>
                                                </div>
                                                {/* Email input */}
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="form3Example3"
                                                        className="form-control form-control-lg"
                                                        placeholder="Enter a valid email address"
                                                        value={title} onChange={(e) => setTitle(e.target.value)}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example3">
                                                        Email address
                                                    </label>
                                                </div>
                                                {/* Password input */}
                                                <div className="form-outline mb-3">
                                                    <input
                                                        type="password"
                                                        id="form3Example4"
                                                        className="form-control form-control-lg"
                                                        placeholder="Enter password"
                                                        value={desc} onChange={(e) => setDesc(e.target.value)}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    {/* Checkbox */}
                                                    <div className="form-check mb-0">
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="checkbox"
                                                            defaultValue
                                                            id="form2Example3"
                                                        />
                                                        <label className="form-check-label" htmlFor="form2Example3">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                    <a href="#!" className="text-body">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <div className="text-center text-lg-start mt-4 pt-2">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-lg"
                                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                                    >
                                                        Login
                                                    </button>
                                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                                        Don't have an account?{" "}
                                                        <NavLink to="/Singup" className="link-danger">
                                                            Register
                                                        </NavLink>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


export default Login

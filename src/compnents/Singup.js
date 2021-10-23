import React,{useState, useContext} from 'react'
import {  useHistory } from "react-router-dom";

import NoteContex from '../compononts/notes/NoteContex';
function Singup() {
    const context = useContext(NoteContex)
    const { subham } = context;
    const [name, setName] = useState(" ");
    let history = useHistory();
    const [title, setTitle] = useState(" ");
    const [desc, setDesc] = useState(" ");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }

        else {
            const data = {
                name: name,
                email: title,
                 password: desc
             };

            fetch('http://localhost:5000/api/auth/singup', {
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

        //    console.log(name, title, desc);
           setName(" ")
            setTitle(" ");
            setDesc(" ");
        }
    }
    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>
                                            <form className="mx-1 mx-md-4" onSubmit={submit}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="form3Example1c"
                                                            className="form-control"
                                                            placeholder="Your Name"
                                                            value={name} onChange={(e) => setName(e.target.value)}
                                                        />
                                                        {/* <label className="form-label" htmlFor="form3Example1c">
                                                            Your Name
                                                        </label> */}
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            id="form3Example3c"
                                                            className="form-control"
                                                            placeholder="Your Email"
                                                            value={title} onChange={(e) => setTitle(e.target.value)}
                                                        />
                                                        {/* <label className="form-label" htmlFor="form3Example3c">
                                                            Your Email
                                                        </label> */}
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                            placeholder="Password"
                                                            value={desc} onChange={(e) => setDesc(e.target.value)}
                                                        />
                                                        {/* <label className="form-label" htmlFor="form3Example4c">
                                                            Password
                                                        </label> */}
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="form3Example4cd"
                                                            className="form-control"
                                                            placeholder=" Repeat your password"
                                                        />
                                                        {/* <label className="form-label" htmlFor="form3Example4cd">
                                                            Repeat your password
                                                        </label> */}
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        defaultValue
                                                        id="form2Example3c"
                                                    />
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree all statements in{" "}
                                                        <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
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

export default Singup

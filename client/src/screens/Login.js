import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const baseUrl = "http://localhost:8000/api";
    const navigate=useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(credentials.name)
        axios
            .post(baseUrl + "/loginuser", {
                email: credentials.email,
                password: credentials.password,
            })
            .then((Response) => {
                // setPost(Response.data);
                const resp = Response.data
                console.log(resp);
                if(!resp.success){
                    alert('Email or password is wrong')
                }
                if(resp.success){
                    localStorage.setItem("authtoken",json.authToken);
                    navigate('/')
                }
            });
    };
    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-outline-success">
                    Submit
                </button>
                <Link to="/signup" type="submit" className="m-3 btn btn-primary">
                    Not a user?
                </Link>
            </form>
        </div>
    );
}

export default Login;

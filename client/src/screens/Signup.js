import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

function Signup() {
    const baseUrl = "http://localhost:8000/api";

    let navigate=useNavigate();
    // const [post, setPost] = React.useState(null);
    const [credentials, setCredentials] = useState({
        name: "",
        location: "",
        email: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(credentials.name)
        axios
            .post(baseUrl + "/createuser", {
                name: credentials.name,
                location: credentials.location,
                email: credentials.email,
                password: credentials.password,
            })
            .then((Response) => {
                // setPost(Response.data);
                const resp = Response.data
                console.log(resp);
                if(resp.errors==="Already exists"){
                    alert("user exists")
                }
                else if(!resp.success){
                    alert("enter correct credentials")
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
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="emailHelp"
                        placeholder="Enter name"
                        name="name"
                        value={credentials.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputLocation"
                        placeholder="Location"
                        name="location"
                        value={credentials.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                <button type="submit" className="m-3 btn btn-success">
                    Submit
                </button>
                <Link to="/login" type="submit" className="m-3 btn btn-primary">
                    Already a user?
                </Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;

import React, { useEffect } from "react";
import { Link, link, useNavigate } from "react-router-dom";

function Navbar() {
    // useEffect(() => {
    //     console.log("hi", localStorage.getItem("authToken"));
    // }, []);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <Link className="navbar-brand fs-1 fst-italic" to="/">
                    GoFood
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul
                        className="navbar-nav w-100 "
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {localStorage.getItem("authToken") ? (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    My Orders{" "}
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item active"></li>
                        )}
                        {!localStorage.getItem("authToken") ? (
                            <div className="d-flex ">
                                <Link
                                    className="btn bg-white text-success mx-1"
                                    to="/login"
                                >
                                    Login
                                </Link>

                                <Link
                                    className="btn bg-white text-success  mx-1"
                                    to="/signup"
                                >
                                    Signup
                                </Link>
                            </div>
                        ) : (
                            <div className="btn bg-white text-danger  mx-1" onClick={handleLogout}>
                                Logout
                            </div>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

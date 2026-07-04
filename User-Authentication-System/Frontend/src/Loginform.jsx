import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginform() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLogin) {
            try {
                const response = await fetch( "http://localhost:8080/api/users/login",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: formData.email,
                            password: formData.password
                        })
                    }
                );

                const data = await response.json();

                if (response.ok) {
                    navigate("/welcome", {
                        state: {
                            name: data.name
                        }
                    });
                } else {
                    alert("Invalid Credentials");
                }
            } catch (error) {
                console.log(error);
                alert("Server Error");
            }

            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password
                })
            });

            const data = await response.text();
            alert(data);

            if (data === "User registered successfully") {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: ""
                });
                setIsLogin(true);
            }
        } catch (error) {
            console.log(error);
            alert("Server error");
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h2 className="text-center py-5">Register / Login Form</h2>

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="form-control my-2" required />

                            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="form-control my-2" required />
                        </>
                    )}

                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-control my-2" required />

                    <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="form-control my-2" required />

                    {!isLogin && (
                        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="form-control my-2" required />
                    )}

                    <button className="btn btn-primary w-100"> {isLogin ? "Login" : "Sign Up"} </button>

                    <div className="text-center my-3">
                        {isLogin ? (
                            <button type="button" className="btn btn-link" onClick={() => setIsLogin(false)} >
                                New User? Sign Up
                            </button>
                        ) : (
                            <button type="button" className="btn btn-link" onClick={() => setIsLogin(true)}>
                                Already have an account? Login
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Loginform;
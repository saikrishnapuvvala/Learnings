import React from "react";
import { useLocation,useNavigate } from "react-router-dom";


function Welcome() {
    const location = useLocation();
     const navigate = useNavigate();
    const userName = location.state?.name || "User";
    const handleLogout = () =>{
        navigate("/");
    }

    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <div className="welcome-icon">🚀</div>
                <h1>Welcome, {userName}</h1>
               

                <div className="welcome-badge">
                    Logged In Successfully ✅
                </div>
                <button className="logout-btn m-3" onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    );
}

export default Welcome;
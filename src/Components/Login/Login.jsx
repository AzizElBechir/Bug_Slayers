import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./login.css";
import { FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                alert(`Bienvenue, ${response.data[0].name} !`);
                navigate("/teachers"); // Redirection après connexion
            } else {
                setError("Email ou mot de passe incorrect !");
            }
        } catch (err) {
            console.error("Erreur de connexion :", err);
            setError("Mot de passe ou email est incorrect. Veuillez reessayer !");
        }
    };

    return (
        <div className="wrapper">
            <div className="form-box login">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    {error && <p className="error-message">{error}</p>} 
                    
                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Votre Email" 
                            required 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <FaEnvelope className="icon" />
                    </div>

                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Mot de passe" 
                            required 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <FaLock className="icon" />
                    </div>

                    <div className="remenber-forgot">
                        <label>
                            <input type="checkbox" /> Se souvenir de moi
                        </label>
                        <a href="/forgot-password" className="forgot-link">
                            Mot de passe oublié?
                        </a>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

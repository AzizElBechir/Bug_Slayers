import React from "react";
import "./login.css"
import { FaLock,FaEnvelope } from "react-icons/fa";

const Login = () => {
    return (
        <div className="wrapper">
            <div className="form-box login">
                <form action="">
                    <h1>login</h1>
                    <div className="input-box">
                        <input type="email" placeholder="Votre Email" required/>
                        <FaEnvelope  className="icon" />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Mot de pass" required/>
                        <FaLock className="icon" />
                    </div>

                    <div className="remenber-forgot">
                        <label><input type="checkbox" />Se souvenir de moi</label>
                        <a href="#">Mot de passe oublié?</a>
                    </div>

                    <button type="submit">Login</button>

                    
                </form>
            </div>
        </div>
    );
};
export default Login;
import React from "react";
import "./forgotpassword.css";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="wrapper">
            <div className="form-box">
                <h2>Mot de passe oublié</h2>
                <p>Entrez votre adresse e-mail pour recevoir un lien de réinitialisation.</p>
                
                <div className="input-box">
                    <input type="email" placeholder="Votre Email" required />
                    <FaEnvelope className="icon" />
                </div>

                <button type="submit">Envoyer</button>

                <Link to="/" className="back-link">Retour à la connexion</Link>
            </div>
        </div>
    );
};

export default ForgotPassword;

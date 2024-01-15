import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [adresse, setAdresse] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    const connecter = (e) => {
        e.preventDefault();
        // Assuming you want to navigate to '/home' without any authentication
        navigate('/home');
    };

    return (
        <div className="registration-form dark-background">
            <form>
                <h3 className="text-center">Se connecter</h3>

                <div className="form-group">
                    <label htmlFor="Adresse">Adresse</label>
                    <input
                        type="text"
                        className="form-control item"
                        id="Adresse"
                        placeholder="Adresse"
                        onChange={(e) => setAdresse(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="MotDePasse">Mot de passe</label>
                    <input
                        type="password"
                        className="form-control item"
                        id="MotDePasse"
                        placeholder="Mot de passe"
                        onChange={(e) => setMotDePasse(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-block create-account" onClick={connecter}>
                        Connecter
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;

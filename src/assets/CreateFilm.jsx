// CreateFilm.js
import './CreateFilm.css';

import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function CreateFilm() {
    const [titre, setTitre] = useState('');
    const [annee, setAnnee] = useState('');
    const [genre, setGenre] = useState('');
    const [resume, setResume] = useState('');
    const navigate=useNavigate()
    const Ajouter = (e) => {
        e.preventDefault();
         axios.post("http://localhost:3001/createFilm", { titre, annee, genre, resume })
        .then(result =>{ 
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="registration-form dark-background">
            <form onSubmit={Ajouter}>
                <h3 className="text-center">Ajouter film</h3>

                <div className="form-group">
                    <label htmlFor="Titre">Titre</label>
                    <input type="text" className="form-control item" id="Titre" placeholder="Titre" onChange={(e) => setTitre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Annee">Année</label>
                    <input type="number" className="form-control item" id="Annee" placeholder="Année" onChange={(e) => setAnnee(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Genre">Genre</label>
                    <input type="text" className="form-control item" id="Genre" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Resume">Résumé</label>
                    <textarea
                        className="form-control"
                        name="Resume"
                        id="Resume"
                        cols="10"
                        rows="4"
                        placeholder="Résumé"
                        onChange={(e) => setResume(e.target.value)}
                    ></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-block create-account">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default CreateFilm;

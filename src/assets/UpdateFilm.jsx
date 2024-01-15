import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios"
import './CreateFilm.css';

export default 

function UpdateFilm() {
  const {id} = useParams()
  const [titre, setTitre] = useState('');
    const [annee, setAnnee] = useState('');
    const [genre, setGenre] = useState('');
    const [resume, setResume] = useState('');
    const navigate=useNavigate()

    useEffect(()=>{
      axios.get('http://localhost:3001/getUser/'+id)
      .then(result=> {console.log(result)
        setTitre(result.data.titre)
        setAnnee(result.data.annee)
        setGenre(result.data.genre)
        setResume(result.data.resume)
      })
      .catch(err=> console.log(err))
    },[])

    const Editer = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateFilm/" + id, {
            titre: titre,
            annee: annee,
            genre: genre,
            resume: resume
        })
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(err => console.log(err));
    };
    

  return (
    <div className="registration-form dark-background">
    <form onSubmit={Editer}>
        <h3 className="text-center">Editer film</h3>

            <div className="form-group">
                <label htmlFor="Titre">Titre</label>
                <input type="text" className="form-control item" id="Titre" placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="Annee">Année</label>
                <input type="number" className="form-control item" id="Annee" placeholder="Année" value={annee} onChange={(e) => setAnnee(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="Genre">Genre</label>
                <input type="text" className="form-control item" id="Genre" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)}/>
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
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                ></textarea>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-block create-account">Editer</button>
            </div>
        </form>
    </div>
);
}

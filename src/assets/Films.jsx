import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Films.css';
function Films() {
  const [films, setFilms] = useState([])


useEffect(()=>{
  axios.get('http://localhost:3001')
  .then(result=>setFilms(result.data))
  .catch(err=> console.log(err))
},[])

const handleDelete=(id)=>{
  axios.delete('http://localhost:3001/deleteFilm/'+id)
  .then(res=>{console.log(res)
    window.location.reload()
  })

  .catch(err=> console.log(err))
}


  return (
    <div className="film">
      <div className="w-50 bg-white rounded p-3">
          <Link to='/create' className='btn btn-dark'>Ajouter</Link>

        <table className="table">

          <thead>
            <tr>
              <th>Titre</th>
              <th>Annee</th>
              <th>Genre</th>
              <th>Resume</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {films.map((film, index) => (
              <tr key={index}>
                <td>{film.titre}</td>
                <td>{film.annee}</td>
                <td>{film.genre}</td>
                <td>{film.resume}</td>
                <td>
                <Link to={`/update/${film._id}`} className='btn btn-warning'>&nbsp;&nbsp;&nbsp;Editer&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                
                <button type="button" class="btn btn-danger" onClick={(e)=>handleDelete(film._id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Films;

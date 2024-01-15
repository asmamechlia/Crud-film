import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const headerStyle = {
    color: "#E74C3C",
    fontWeight: 'bold',
    fontSize: 30,
  };
  const headerStyle2 = {
    color: "#F0F3F4",
    fontSize: 20,
  };

  const headerStyle3 = {
    color: "#F0F3F4",
    fontSize: 20,
  };

  const navbarStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={navbarStyle}>
      <div className="container">
        <Link className="navbar-brand" to="/home" style={headerStyle}>
          FILMY
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={headerStyle2}>
                Filmes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create" style={headerStyle2}>
                Ajout
              </Link>
            </li>
          </ul>
          
            
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <Link className="nav-link" to="/login" style={headerStyle3}>
                      Déconnecter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
    </nav>
  );
};

export default NavBar;

import React from 'react';
import './Header.css';
import './App.css';

const Header = ({ brand, link1, link2, link3, link4 }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-3">
        <a className="navbar-brand" href="#navbarNav">{brand}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#EvidenciasFotograficas"><h5 className='mb-0'>{link1}</h5></a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#Metas"><h5 className='mb-0'>{link2}</h5></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Cronograma"><h5 className='mb-0'>{link3}</h5></a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#EvidenciasAudiovisuales"><h5 className='mb-0'>{link4}</h5></a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
export default Header;
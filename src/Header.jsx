import React from 'react';
import './Header.css';
import './App.css';

const header = ({brand, link1, link2, link3, link4}) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#navbarNav">{brand}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#navbarNav">{link1}</a>
              </li>
              <li className="nav-item" >     
                <a className="nav-link" href="#navbarNav">{link2}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#navbarNav">{link3}</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#navbarNav">{link4}</a>
              </li>
            </ul>
          </div>
  
        </div>
      </nav>
    );
  }
export default header;
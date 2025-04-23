import React from 'react';
import g from './Gallery.css';

const Gallery = ({title}) => {
    return (
      <section>
        <h1 className="text-center pt-4">{title}</h1>
        <div className="gallery justify-content-center d-flex flex-wrap">
  
          <div className="column">
            <div className="d-flex">
              <div className="col">
                <img className={g.imgGallery} src={require('./img/Imagen2Apple.png')} data-toggle="modal" data-target="#carrusel" alt=""></img>
                <img className='imgGallery' src={require('./img/Imagen3.png')} data-toggle="modal" data-target="#carrusel" alt=""></img>
              </div>
              <div className="col">
                <img className='imgGallery' src={require('./img/Imagen1.png')} data-toggle="modal" data-target="#carrusel" alt=""></img>
              </div>
            </div>
            <div className="d-flex">
              <div className="col">
                <img className='imgGallery' src={require('./img/Imagen5Camera.png')} alt=""></img>
              </div>
  
            </div>
          </div>
  
          <div className="column">
            <div className="d-flex">
              <div className="col">
                <img className='imgGallery' src={require('./img/Imagen9.png')} alt=""></img>
              </div>
  
            </div>
            <div className="d-flex">
              <div className="col">
                <img className='imgGallery' src={require('./img/Imagen6.png')} data-toggle="modal" data-target="#carrusel" alt=""></img>
              </div>
              <div className="col">
                <img className='imgGallery' src={require('./img/Imagen8Circular.png')} data-toggle="modal" data-target="#carrusel" alt=""></img>
                <img className='imgGallery' src={require('./img/Imagen7.png')} data-toggle="modal" data-target="#carrusel" alt=""></img>
              </div>
            </div>
          </div>
  
          <img className='imgGallery' src={require('./img/Imagen4Central.png')} data-toggle="modal" data-target="#carrusel" alt=""></img>
  
        </div>
  
        <div className="modal fade" id="carrusel" data-keyboard="false" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="row justify-content-around">
                <button type="button" id="left" className="btn btn-secondary align-middle">left</button>
                <div className="col-md-6">
                  <img className='imgGallery' id="imageBig" alt=""></img>
                </div>
                <button type="button" id="right" className="btn btn-primary">right</button>
              </div>
  
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Gallery;
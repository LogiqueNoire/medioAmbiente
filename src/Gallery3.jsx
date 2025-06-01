import React from 'react';
import './/Gallery3.css';

const gallery3 = ({ title }) => {
  return (
    <>
      <aside className='mt-4 mb-4 pt-4 pb-4'>
        <h1 className="text-center">{title}</h1>
        <div className="gallery3 justify-content-center d-flex flex-wrap p-0">

          <div className="column3">
            <div className="d-flex">
              <div className="col col3">
                {/*al medio izquierda*/}
                <img className='imgGallery3' src={require('./playa/basura2.jpg')} data-toggle="modal" data-target="#carrusel" alt=""></img>
                {/*<video className='imgGallery3' src={require('./playa/basura2.jpg')} data-toggle="modal" data-target="#carrusel" alt=""></video>*/}
                <img className='imgGallery3' src={require('./playa/horizontal1.jpg')} data-toggle="modal" data-target="#carrusel" alt=""></img>
              </div>
              <div className="col col3">
                {/* vertical arriba */}
                <img className='imgGallery3' src={require('./playa/vertical1.jpg')} data-toggle="modal" data-target="#carrusel" alt=""></img>
                {/*<video className='imgGallery3' src={require('./playa/vertical1.jpg')} data-toggle="modal" data-target="#carrusel" alt=""></video>*/}
              </div>
            </div>
            <div className="d-flex">
              <div className="col col3">
                <img className='imgGallery3' src={require('./playa/horizontal2.jpg')} alt=""></img>
              </div>

            </div>
          </div>

          <div className="column3">
            <div className="d-flex">
              <div className="col col3">
                <img className='imgGallery3' src={require('./playa/horizontal3.jpg')} alt=""></img>
              </div>

            </div>
            <div className="d-flex">
              <div className="col col3">
                {/*vertical abajo */}
                <img className='imgGallery3' src={require('./playa/vertical2.jpg')} data-toggle="modal" data-target="#carrusel" alt=""></img>
              </div>
              <div className="col col3">
                <img className='imgGallery3' src={require('./playa/horizontal4.jpg')} data-toggle="modal" data-target="#carrusel" alt=""></img>
                {/*cuadrado derecha */}
                <img className='imgGallery3' src={require('./playa/horizontal5.jpg')} data-toggle="modal" data-target="#carrusel" alt=""></img>
              </div>
            </div>
          </div>

          <img className='imgGallery3' src={require('./playa/grupal2.jpg')} data-toggle="modal" data-target="#carrusel" alt=""></img>

        </div>

        <div className="modal fade" id="carrusel" data-keyboard="false" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="row justify-content-around">
                <button type="button" id="left" className="btn btn-secondary align-middle">left</button>
                <div className="col-md-6">
                  <video className='imgGallery3' id="imageBig" alt=""></video>
                </div>
                <button type="button" id="right" className="btn btn-primary">right</button>
              </div>

            </div>
          </div>
        </div>
      </aside>

      
    </>
  );
};

export default gallery3;
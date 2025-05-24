import React from 'react';
import './Statistics.css';
import './App.css';

const Statistics = ({textTitle, textTitleHighligth, subtitle}) => {
    return (
      <section className='bg-silver'>
        <div className="row">
          <div id='nuestrasMetas'>
            <h1 className="text-right">{textTitle}<br></br><span className='celeste'>{textTitleHighligth}</span></h1>
            <h6 className="text-right">{subtitle}</h6>
          </div>
          <div id="nuestrasMetas2" className=''>
  
            <div className="meta">
              <div className="">
                <img id="" src={require('./img/personas.png')} className="icon" alt=""></img>
              </div>
              <div className=''>
                <h1 className="text-left">10</h1>
                <h6 className="text-left">participantes de la jornada de limpieza</h6>
              </div>
            </div>
  
            <div className="meta">
              <div className="">
                <img id="" src={require('./img/presentacion.png')} className="icon" alt=""></img>
              </div>
              <div className=''>
                <h1 className="text-left">9</h1>
                <h6 className="text-left">asistentes al taller de sensibilización</h6>
              </div>
            </div>
  
            <div className="meta">
              <div className="">
                <img id="" src={require('./img/garbage.png')} className="icon" alt=""></img>
              </div>
              <div className=''>
                <h1 className="text-left">20 kg</h1>
                <h6 className="text-left">de basura recolectada</h6>
              </div>
            </div>
          </div>
        </div>
  
      </section>
  
    );
  }

  export default Statistics;
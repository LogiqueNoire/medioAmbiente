import React from 'react';
import './Slides.css';
const Slides = () => {
    return (
      <section className='bg-silver m-0 p-0'>
        <div id='carrousel'>
          <img id='slide1-1' src={require("./img/huanchaco1.jpg")} alt="" />
          <img id='slide1-2' src={require("./img/limpieza.webp")} alt="" />
          <img id='slide1-3' src={require("./img/huanchaco3.webp")} alt="" />
  
        </div>
        <div id='hijo'>
          <h1 id='slideText1'>Tú puedes ser parte del <span className='celeste'>cambio</span></h1>
          <h5 id='slideText1' className='mt-2'><span className='grey'>Participa en una jornada de limpieza o en taller de sensibilización</span></h5>
        </div>
      </section>
    );
  }

  export default Slides;
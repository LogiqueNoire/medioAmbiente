import './App.css';


function App() {
  return (
    <div className="App">
      {nav()}
      {slides()}
      {gallery()}
      {numeros()}
      {cronograma()}
      {pharse()}
    </div>
  );
}

function nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#navbarNav">
          
          Por un huanchaco limpio
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#navbarNav">Evidencias</a>
            </li>
            <li className="nav-item" >     
              <a className="nav-link" href="#navbarNav">Cronograma</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#navbarNav">Metas</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#navbarNav">Eventos</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>

  );
}

function slides() {
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

function gallery() {
  return (
    <section>
      <h1 className="text-center pt-4">Evidencias visuales</h1>
      <div className="gallery justify-content-center d-flex flex-wrap">

        <div className="column">
          <div className="d-flex">
            <div className="col">
              <img className='imgGallery' src={require('./img/Imagen2Apple.png')} data-toggle="modal" data-target="#carrusel" alt=""></img>
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
}

function cronograma() {
  return (
    <section className='d-flex align-items-center justify-content-center'>
      <h2 className='d-none d-lg-block mr-4'>Cronograma</h2>
      <div className="table-responsive">    
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Semana</th>
            {[...Array(14)].map((_, index) => (
              <th key={index} scope="col">{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Label 1</td>
            {[...Array(14)].map((_, index) => (
              <td key={index}></td>
            ))}
          </tr>
          <tr>
            <td>Label 2</td>
            {[...Array(14)].map((_, index) => (
              <td key={index}></td>
            ))}
          </tr>
          <tr>
            <td>Label 3</td>
            {[...Array(14)].map((_, index) => (
              <td key={index}>X</td>
            ))}
          </tr>
        </tbody>
      </table>
      </div>
    </section>
  );
};

function numeros() {
  return (
    <section className='bg-silver'>
      <div className="row">
        <div id='nuestrasMetas'>
          <h1 className="text-right">Nuestras metas<h1 className='celeste'>en números</h1></h1>
          <h6 className="text-right">Fuente: Formato ICD elaborado por el grupo</h6>
        </div>
        <div id="nuestrasMetas2" className=''>

          <div className="meta">
            <div className="">
              <img id="" src={require('./img/personas.png')} className="icon" alt=""></img>
            </div>
            <div className=''>
              <h1 className="text-left">20</h1>
              <h6 className="text-left">participantes de la jornada de limpieza</h6>
            </div>
          </div>

          <div className="meta">
            <div className="">
              <img id="" src={require('./img/presentacion.png')} className="icon" alt=""></img>
            </div>
            <div className=''>
              <h1 className="text-left">20</h1>
              <h6 className="text-left">asistentes al taller de sensibilización</h6>
            </div>
          </div>

          <div className="meta">
            <div className="">
              <img id="" src={require('./img/garbage.png')} className="icon" alt=""></img>
            </div>
            <div className=''>
              <h1 className="text-left">50 kg</h1>
              <h6 className="text-left">de basura recolectada</h6>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}

function pharse() {
  return (
    <section className='bg-silver'>
      <div className="justify-content-center">

        <div className="row d-flex justify-content-start">
          <img src={require("./img/quotation.png")} className="quotation" alt="quotation"></img>
        </div>
        <div className='row text-porcent'>
          <h1 className="celeste">La tierra no la heredamos de nuestros padres, la pedimos prestados a nuestros hijos</h1>
        </div>
        <div className="row d-flex justify-content-end" id='divquotation2'>
          <img src={require("./img/quotation2.png")} className="quotation" alt="quotation"></img>
        </div>
        <div className="row dflex justify-content-end text-porcent">
          <h2>Albert Einstein</h2>
        </div>
      </div>

    </section>

  );
}



export default App;

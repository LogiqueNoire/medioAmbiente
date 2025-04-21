import './App.css';
import Gallery from './/Gallery.jsx'
import DataTable from './/DataTable.jsx';
import Slides from './/Slides.jsx';

function App() {
  return (
    <div className="App">
      {nav()}
      <Slides></Slides>
      <Gallery title = 'Evidencias visuales'></Gallery>
      {numeros()}
      <DataTable title = 'Cronograma'></DataTable>
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

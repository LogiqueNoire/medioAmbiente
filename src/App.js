import './App.css';
import Gallery3 from './Gallery3.jsx'
import DataTable from './/DataTable.jsx';
import Slides from './/Slides.jsx';
import Statistics from './/Statistics.jsx';
import Header from './/Header.jsx';
import Gallery1 from './Gallery1.jsx';
import actividades from './actividades.json'

function App() {
  return (
    <div className="App">
      <Header brand='Por un Huanchaco limpio' link1='Evidencias fotográficas' link2='Cronograma' link3='Metas' link4='Evidencias audiovisuales'></Header>

      <Slides></Slides>

      <Gallery3 id='EvidenciasFotograficas' title='Evidencias fotográficas'></Gallery3>

      <Statistics id='Estadisticas' textTitle='Nuestras metas' textTitleHighligth='en números' subtitle='Fuente: Formato ICD elaborado por el grupo'></Statistics>

      <DataTable id='Cronograma' title='Cronograma'
        actividades={actividades}>
      </DataTable>

      <Gallery1 id='EvidenciasAudiovisuales' title="Evidencias audiovisuales"></Gallery1>
      {pharse()}
    </div>
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

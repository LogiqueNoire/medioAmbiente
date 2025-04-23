import './App.css';
import Gallery from './/Gallery.jsx'
import DataTable from './/DataTable.jsx';
import Slides from './/Slides.jsx';
import Statistics from './/Statistics.jsx';

function App() {
  return (
    <div className="App">
      <Header ></Header>
      <Slides brand='Por un Huanchaco limpio' link1 = 'Evidencias' link2 = 'Cronograma' link3 = 'Metas' link4 = 'Eventos'></Slides>
      <Gallery title = 'Evidencias visuales'></Gallery>
      <Statistics textTitle = 'Nuestras metas' textTitleHighligth = 'en números' subtitle = 'Fuente: Formato ICD elaborado por el grupo'></Statistics>
      <DataTable title = 'Cronograma'></DataTable>
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

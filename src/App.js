import './App.css';
import Gallery from './/Gallery.jsx'
import DataTable from './/DataTable.jsx';
import Slides from './/Slides.jsx';
import Statistics from './/Statistics.jsx';
import Header from './/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header ></Header>
      <Slides brand='Por un Huanchaco limpio' link1='Evidencias' link2='Cronograma' link3='Metas' link4='Eventos'></Slides>
      <Gallery title='Evidencias visuales'></Gallery>
      <Statistics textTitle='Nuestras metas' textTitleHighligth='en números' subtitle='Fuente: Formato ICD elaborado por el grupo'></Statistics>
      <DataTable title='Cronograma'
        actividades={['Elección del tema del proyecto', 'Planificación de las actividades mediante reunión grupal',
          'Diseño de las encuestas pre-test y post-test',
          'Diseño de prototipo de landing page',
          'Implementación de landing page',
          'Aplicación de Encuesta Pre-test',
          'Realización del Taller de Sensibilización',
          'Procesamiento de datos recogidos en encuesta pretest',
          'Jornada de limpieza en la playa',
          'Análisis de Residuos Recolectados',
          'Aplicación Encuesta Post-test',
          'Análisis Comparativo de Encuestas y Evaluación del Impacto',
          'Elaboración del Informe Final y Propuesta de Soluciones Sostenibles',
          'Presentación de Resultados']}></DataTable>
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

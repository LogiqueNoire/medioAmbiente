import videohorizontal1 from './playa/videohorizontal1.mp4'
import videohorizontal2 from './playa/videohorizontal2.mp4'
import videohorizontal3 from './playa/videohorizontal3.mp4'
import './Gallery1.css'

const Gallery1 = ({title}) => {
    return (
    <aside className="container">
        <h1 className="text-center pt-4">{title}</h1>
        <div className="gallery justify-content-center d-flex flex-wrap">
            <div className="column">

                <div className="col">
                    <div className="foto">
                        {/*<img src={videohorizontal1} data-toggle="modal" data-target="#carrusel"/>*/}
                        <video src={videohorizontal1} data-toggle="modal" data-target="#carrusel"/>
                    </div>
                </div>

                <div className="col">
                    <div className="foto">
                        {/*<img src={videohorizontal2} data-toggle="modal" data-target="#carrusel"/>*/}
                        <video src={videohorizontal3} data-toggle="modal" data-target="#carrusel"/>
                    </div>

                    <div className="foto float-right">
                        {/*<img src={videohorizontal3} data-toggle="modal" data-target="#carrusel"/>*/}
                        <video src={videohorizontal3} data-toggle="modal" data-target="#carrusel"/>
                    </div>
                </div>

            </div>


            <div className="col column">
                <div className="row justify-content-md-center">
                    <div className="column4">
                        <div className="foto mx-auto">
                            {/*<img src={videohorizontal1} data-toggle="modal" data-target="#carrusel"/>*/}
                            <video src={videohorizontal3} data-toggle="modal" data-target="#carrusel"/>

                        </div>
                    </div>
                    <div className="column5">
                        <div className="foto mx-auto">
                            {/*<img src="img/Fondosite.webp" data-toggle="modal" data-target="#carrusel"/>*/}
                            <video src={videohorizontal2} data-toggle="modal" data-target="#carrusel"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="foto">
                        {/*<img src={videohorizontal1} type="button" data-toggle="modal" data-target="#carrusel"/>*/}
                        <video src={videohorizontal3} type="button" data-toggle="modal" data-target="#carrusel"/>
                    </div>


                </div>

            </div>

        </div>

        <div className="modal fade" id="carrusel"  data-keyboard="false" tabIndex="-1"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div id="carousel-inner" className="carousel-inner">
                          <a className="carousel-control-prev" id="before" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          </a>
                          <a className="carousel-control-next" id="next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          </a>
                        </div>
                      </div>
                                   
                </div>
            </div>
        </div>


    </aside>

    

)}

export default Gallery1;
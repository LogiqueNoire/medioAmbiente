import videohorizontal1 from './playa/videohorizontal1.mp4'
import videohorizontal2 from './playa/videohorizontal2.mp4'
import videohorizontal3 from './playa/videohorizontal3.mp4'
import videovertical1 from './playa/videovertical1.mp4'
import videovertical2 from './playa/videovertical2.mp4'
import './Gallery1.css'
import { useState } from 'react';

const Gallery1 = ({ title, id }) => {
    const [videoActivo, setVideoActivo] = useState(0);

    const videos = [
        videohorizontal1,
        videohorizontal2,
        videohorizontal3,
        videovertical1,
        videovertical2,
        videohorizontal1,
    ];

    const [modalAbierto, setModalAbierto] = useState(false);

    return (
        <aside id={id} className="">
            <h1 className="text-center pt-4">{title}</h1>
            <div className="gallery1 justify-content-center d-flex flex-wrap">
                <div className="column">
                    <div className="col mycol">
                        <div className="foto1">
                            {/*<img src={videohorizontal1} type="button" />*/}
                            <video src={videohorizontal1} type="button"
                                onClick={() => {
                                    setVideoActivo(0);
                                    setModalAbierto(true);
                                }} />
                        </div>
                    </div>

                    <div className="col mycol">
                        <div className="foto1">
                            {/*<img src={videohorizontal2} type="button" />*/}
                            <video src={videohorizontal2} type="button"
                                onClick={() => {
                                    setVideoActivo(1);
                                    setModalAbierto(true);
                                }} />
                        </div>

                        <div className="foto1 float-end">
                            {/*<img src={videohorizontal3} type="button" />*/}
                            <video src={videohorizontal3} type="button"
                                onClick={() => {
                                    setVideoActivo(2);
                                    setModalAbierto(true);
                                }} />
                        </div>
                    </div>

                </div>


                <div className="col mycol column">
                    <div className="row justify-content-md-center">
                        <div className="column4">
                            <div className="foto1 mx-auto">
                                {/*<img src={videohorizontal1} type="button" />*/}
                                <video src={videovertical1} type="button"
                                    onClick={() => {
                                        setVideoActivo(3);
                                        setModalAbierto(true);
                                    }} />
                            </div>
                        </div>
                        <div className="column5">
                            <div className="foto1 mx-auto">
                                {/*<img src="img/Fondosite.webp" type="button"/>*/}
                                <video src={videovertical2} type="button"
                                    onClick={() => {
                                        setVideoActivo(4);
                                        setModalAbierto(true);
                                    }} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="foto1">
                            {/*<img src={videohorizontal1} type="button"/>*/}
                            <video src={videohorizontal1} type="button"
                                onClick={() => {
                                    setVideoActivo(0);
                                    setModalAbierto(true);
                                }} />
                        </div>
                    </div>
                </div>
            </div>

            {modalAbierto &&
                <div className="modal-overlay">
                    <div className="modal-video-content">
                        <button className="cerrar" onClick={() => setModalAbierto(false)}><label>x</label></button>

                        <div>
                            <video
                                src={videos[videoActivo]}
                                className="d-block w-100"
                                controls
                                autoPlay
                                style={{maxHeight: "70vh"}}
                            />
                        </div>
                        <div className="d-flex gap-2 mt-3">
                            <button className="btn btn-info" onClick={() => {
                                videoActivo > 0
                                    ?
                                    setVideoActivo(videoActivo - 1)
                                    :
                                    setVideoActivo(videos.length - 1)
                            }}><strong>Atrás</strong></button>
                            <button className="btn btn-info" onClick={() => {
                                videoActivo < videos.length - 1
                                    ?
                                    setVideoActivo(videoActivo + 1)
                                    :
                                    setVideoActivo(0)
                            }}><strong>Siguiente</strong> 
                            </button>
                        </div>
                    </div>
                </div>
            }
        </aside>

    )
}

export default Gallery1;
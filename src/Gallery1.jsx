import videohorizontal1 from './playa/videohorizontal1.mp4'
import videohorizontal2 from './playa/videohorizontal2.mp4'
import videohorizontal3 from './playa/videohorizontal3.mp4'
import './Gallery1.css'
import { useState } from 'react';




const Gallery1 = ({ title, id }) => {
    const [videoActivo, setVideoActivo] = useState(0);

    const videos = [
        videohorizontal1,
        videohorizontal2,
        videohorizontal3,
        videohorizontal1,
        videohorizontal2,
        videohorizontal3,
    ];

    const [modalAbierto, setModalAbierto] = useState(false);

    /*

    const images = [...document.querySelectorAll(".foto1 > video")];
    const carIn = document.getElementById("carousel-inner");

    let c = 0;
    while (c < images.length) {
        var div = document.createElement('div');
        div.id = 100 + c;
        div.className = 'carousel-item';

        carIn.appendChild(div);

        var img = document.createElement('img');
        img.id = c;
        img.className = 'img-fluid';

        div.appendChild(img);
        c++;
    }

    let carouselItems = [...document.querySelectorAll(".carousel-item")];

    images.forEach((img, i) => {
        img.addEventListener("click", (e) => {
            let index = 0;

            while (index < images.length) {
                document.getElementById(index).src = images[index].src;

                if (carouselItems[index].classList.contains("active")) {
                    carouselItems[index].classList.remove("active");
                }

                index++;
            }
            carouselItems[i].classList.add("active");
        })
    });
*/


    return (
        <aside id={id} className="">
            <h1 className="text-center pt-4">{title}</h1>
            <div className="gallery1 justify-content-center d-flex flex-wrap">
                <div className="column">
                    <div className="col mycol">
                        <div className="foto1">
                            {/*<img src={videohorizontal1} type="button" data-bs-toggle="modal" data-bs-target="#carrusel2"/>*/}
                            <video src={videohorizontal1} type="button" data-bs-toggle="modal" data-bs-target="#carrusel2"
                                onClick={() => {
                                    setVideoActivo(0);
                                    setModalAbierto(true);
                                }} />
                        </div>
                    </div>

                    <div className="col mycol">
                        <div className="foto1">
                            {/*<img src={videohorizontal2} type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"/>*/}
                            <video src={videohorizontal3} type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"
                                onClick={() => {
                                    setVideoActivo(1);
                                    setModalAbierto(true);
                                }} />
                        </div>

                        <div className="foto1 float-end">
                            {/*<img src={videohorizontal3} type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"/>*/}
                            <video src={videohorizontal3} type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"
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
                                {/*<img src={videohorizontal1} type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"/>*/}
                                <video src={videohorizontal3} type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"
                                    onClick={() => {
                                        setVideoActivo(0);
                                        setModalAbierto(true);
                                    }} />
                            </div>
                        </div>
                        <div className="column5">
                            <div className="foto1 mx-auto">
                                {/*<img src="img/Fondosite.webp" type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"/>*/}
                                <video src={videohorizontal2} type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"
                                    onClick={() => {
                                        setVideoActivo(1);
                                        setModalAbierto(true);
                                    }} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="foto1">
                            {/*<img src={videohorizontal1} type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"/>*/}
                            <video src={videohorizontal3} type="button" data-bs-toggle="modal2" data-bs-target="#carrusel2"
                                onClick={() => {
                                    setVideoActivo(2);
                                    setModalAbierto(true);
                                }} />
                        </div>
                    </div>
                </div>
            </div>

            {modalAbierto &&
                <div className="modal-overlay">
                    <div className="modal-video-content">
                        <button className="cerrar" onClick={() => setModalAbierto(false)}>×</button>

                        <div>
                            <video
                                src={videos[videoActivo]}
                                className="d-block w-100"
                                controls
                                autoPlay
                            />
                        </div>
                        <div className="d-flex gap-2 mt-3">
                            <button className="btn btn-primary" onClick={() => {
                                videoActivo > 0
                                    ?
                                    setVideoActivo(videoActivo - 1)
                                    :
                                    setVideoActivo(videos.length - 1)
                            }}>
                                Atrás</button>
                            <button className="btn btn-primary" onClick={() => {
                                videoActivo < videos.length - 1
                                    ?
                                    setVideoActivo(videoActivo + 1)
                                    :
                                    setVideoActivo(0)
                            }}>Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            }
        </aside>

    )
}

export default Gallery1;
import videohorizontal1 from './playa/videohorizontal1.mp4'
import videohorizontal2 from './playa/videohorizontal2.mp4'
import videohorizontal3 from './playa/videohorizontal3.mp4'
import './Gallery1.css'

const Gallery1 = ({ title, id }) => {
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

    return (
        <aside id={id} className="">
            <h1 className="text-center pt-4">{title}</h1>
            <div className="gallery1 justify-content-center d-flex flex-wrap">
                <div className="column">

                    <div className="col mycol">
                        <div className="foto1">
                            {/*<img src={videohorizontal1} type="button" data-bs-toggle="modal" data-bs-target="#carrusel"/>*/}
                            <video src={videohorizontal1} type="button" data-bs-toggle="modal" data-bs-target="#carrusel" />
                        </div>
                    </div>

                    <div className="col mycol">
                        <div className="foto1">
                            {/*<img src={videohorizontal2} type="button" data-bs-toggle="modal" data-bs-target="#carrusel"/>*/}
                            <video src={videohorizontal3} type="button" data-bs-toggle="modal" data-bs-target="#carrusel" />
                        </div>

                        <div className="foto1 float-end">
                            {/*<img src={videohorizontal3} type="button" data-bs-toggle="modal" data-bs-target="#carrusel"/>*/}
                            <video src={videohorizontal3} type="button" data-bs-toggle="modal" data-bs-target="#carrusel" />
                        </div>
                    </div>

                </div>


                <div className="col mycol column">
                    <div className="row justify-content-md-center">
                        <div className="column4">
                            <div className="foto1 mx-auto">
                                {/*<img src={videohorizontal1} type="button" data-bs-toggle="modal" data-bs-target="#carrusel"/>*/}
                                <video src={videohorizontal3} type="button" data-bs-toggle="modal" data-bs-target="#carrusel" />

                            </div>
                        </div>
                        <div className="column5">
                            <div className="foto1 mx-auto">
                                {/*<img src="img/Fondosite.webp" type="button" data-bs-toggle="modal" data-bs-target="#carrusel"/>*/}
                                <video src={videohorizontal2} type="button" data-bs-toggle="modal" data-bs-target="#carrusel" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="foto1">
                            {/*<img src={videohorizontal1} type="button" data-bs-toggle="modal" data-bs-target="#carrusel"/>*/}
                            <video src={videohorizontal3} type="button" data-bs-toggle="modal" data-bs-target="#carrusel" />
                        </div>


                    </div>

                </div>

            </div>

            <div className="modal fade" id="carrusel" data-keyboard="false" tabIndex="-1"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div id="carousel-inner" className="carousel-inner">
                                <button className="carousel-control-prev" id="before" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>
                                <button className="carousel-control-next" id="next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </aside>



    )
}

export default Gallery1;
function Carousel() {
    return (
      <>
        <section className="carousel">
          <div id="carouselAdvertisement" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../public/assets/image/excibicion1.png" className="d-block w-100" alt="cascosVenta" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Repuestos para tu motor.</h5>
                        <p>Refuerza el poder de tu viaje con repuestos que impulsan tu motor hacia un alto
                            rendimiento.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../public/assets/image/excibicion2.png" className="d-block w-100" alt="neumaticos" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Diversas marcas de llantas</h5>
                        <p>Encuentra el agarre perfecto para tu camino con nuestra selección de llantas de las
                            mejores
                            marcas.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../public/assets/image/excibicion3.png" className="d-block w-100" alt="repuestoVentaFoto" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Variedad en marcas de cascos</h5>
                        <p>Nuestra selección de cascos está diseñada para ofrecerte confort y protección en cada
                            viaje.
                        </p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselAdvertisement"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselAdvertisement"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </>
    )
  }
  
  export default Carousel;
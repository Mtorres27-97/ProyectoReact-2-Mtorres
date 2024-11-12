import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="./index.html">
                    <img className="logo" src="../assets/img/Licoreria-GA-v2-blanco.png" alt="Logo Licorería GA" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img className="logo" src="../assets/img/Licoreria-GA-v2-blanco.png" alt="Logo" />
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active mx-lg-2" aria-current="page" href="./index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="./pages/nosotros.html">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="./pages/servicios.html">Cervezas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="./pages/galeria.html">Destilados</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="./pages/contacto.html">Otros</a>
                            </li>
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
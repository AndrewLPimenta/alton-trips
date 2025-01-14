
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
    return (

            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className='logo' src={require('.././assets/1.png')}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Atlon Transportes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="https://api.whatsapp.com/send/?phone=5524999432515&text&type=phone_number&app_absent=0">Whatsapp</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.instagram.com/atlontransportes/">Instagram</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/profile.php?id=61572179544513">Facebook</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sobre
                                    </a>
                                    <ul className="dropdown-menu">
                                        
                                        <li><a className="dropdown-item" href="#">Endereço: Barra Mansa, RJ, Brasil</a></li>
                                        <li><a className="dropdown-item" href="#">Celular: (24) 99943-2515</a></li>
                                        <li><a className="dropdown-item" href="#">CNPJ: 55.263.961/0001-80</a></li>

                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>



    );
}
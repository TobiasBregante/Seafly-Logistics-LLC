import SocialMedial from '../social.component'

const Header = () => {
    return (
        <>
            <header className='row'>
                <nav className="navbar navbar-expand-lg navbar-light col-12 col-sm-12 col-lg-12 col-xl-12">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="img/brand.png" alt="Seafly Logistics LLC" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href='/' className='nav-link'>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#nosotros' className='nav-link'>About us</a>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className=" p-0 btn dropdown-toggle text-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#service1">Servicio 1</a></li>
                                            <li><a className="dropdown-item" href="#service2">Servicio 2</a></li>
                                            <li><a className="dropdown-item" href="#service3">Servicio 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <SocialMedial socialMedialObj={ {
                            social1: {  
                                icon: <i class="bi bi-facebook"></i>,
                                url: "https://www.facebook.com/iQinvestmentok/"
                            },
                            social2: {
                                icon: <i class="bi bi-instagram"></i>,
                                url: "https://www.instagram.com/iqinvestmentok/"
                            },
                            social3: {
                                icon: <i class="bi bi-whatsapp"></i>,
                                url: "https://whatsapp.com"
                            }
                        } }/>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
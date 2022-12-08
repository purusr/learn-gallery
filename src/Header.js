import logo192 from './logo192.png'


function Header () {
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo192} alt="logo" style={{ width: '70px', height: '70px' }} />
                </a>
                <h3 className='navbar-brand'>Gallery App  </h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Header
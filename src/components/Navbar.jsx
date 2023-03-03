export default function Navbar () {
    return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg container">
                <div className="navbar-brand">
                    <a href="/">FarmHub</a>
                </div>
                <form action="" className="d-flex" role="search">
                    <input className="form-control" type="search" name="" id="" placeholder="Search for products here"/>
                </form>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-icons">
                        <li className="nav-item">1</li>
                        <li className="nav-item">2</li>
                        <li className="nav-item">3</li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar shop-navbar">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> Shop by Category
                </button>
                <ul className="navbar-nav">
                    <li className="nav-item">A</li>
                    <li className="nav-item">B</li>
                    <li className="nav-item">C</li>
                </ul>
            </nav>
        </header>
    )
}
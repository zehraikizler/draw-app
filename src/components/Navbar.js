import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand text-success fw-bold fst-italic fs-4" href="#">Draw App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link to="/" className="nav-link fw-bold fs-5 me-3" aria-current="page" href="#">Home</Link>
                    <Link to="/makedraw" className="nav-link fw-bold fs-5" href="#">Make Draw</Link>
                    <Link to="/vote" className="nav-link fw-bold fs-5" href="#">Vote</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}
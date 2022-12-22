import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand text-white">ChainFolio</Link>
            <div className="collapse navbar-collapse">
                {/* <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/home" className="nav-link text-white">Cryptos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link text-white">About</Link>
                    </li>
                </ul> */}
            </div>
        </nav>
    )
}

export default Navbar
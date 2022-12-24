import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand text-white">ChainFolio</Link>
            <div className="collapse navbar-collapse">
            </div>
        </nav>
    )
}

export default Navbar
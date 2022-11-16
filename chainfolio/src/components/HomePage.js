import {Link} from "react-router-dom";
import image from "./709d7e20966e7f971cedc087f81bdaf7924642d6.png"
import Navbar from "./Navbar";

const HomePage = () => {
    return(
        <div className="container">
            <Navbar />
            <div className="mt-5">
                <div className="d-flex">
                    <div className="mx-5 mt-5 col-7 text-white">
                        <h2 className="text-center">Welcome to ChainFolio</h2>
                        <p className="mt-5 text-center" style={{fontWeight:"400", fontSize:"25px"}}>Keep track of your crypto all in one place.</p>
                        <p className="text-center" style={{fontWeight:"400", fontSize:"25px"}}>The most up to date and accurate crypto prices</p>
                    </div>
                    <img src={image} style={{height: "600px"}} className="" alt=""/>
                </div>

            </div>
        </div>
    )
}

export default HomePage
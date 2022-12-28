import HomePage from "./components/HomePage"
import './bootstrap.css'
import './style.css'
import {Route, Routes} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className={"mt-5"}>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<About />}/>
        </Routes>

    </div>
  )
}

export default App

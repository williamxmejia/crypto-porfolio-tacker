import Navbar from "./Navbar";

const About = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="d-flex mt-5">
                <img src="https://avatars.githubusercontent.com/u/75294503?v=4" style={{height:"200px"}} alt=""/>
                <div>
                    <p className={"text-white mx-5"} style={{fontSize:"16px"}}>My name is William and I am a junior software engineer. <a href={"https://github.com/williamxmejia"}>My github</a> has all the projects that I have worked on. I love working on both the front and back end.</p>
                </div>
            </div>
            <div>
                <h1 className={"text-white mt-5"}>ChainFolio</h1>
                <p className={"text-white"} style={{fontWeight:"500", fontSize:"16px"}}>This project came to me as an idea because of the FTX controversy that just happened. FTX is a crypto exchange that just went bankrupt. One of the many projects that FTX bought was one that I used for the past 5 years called BlockFolio. I got the inspiration to make my own cryptocurrency portfolio tracker since BlockFolio is a part of FTX and seems to be out of service. My goal is to have this running and fully functional within a month so I can have a portfolio tracker without the risk of it going out of service.</p>
                <h4 className={"text-white mt-5"}>Objectives</h4>
                <ul className={"text-white"} style={{fontSize:"16px"}}>
                    <li>Create an app to track my cryptos</li>
                    <li>Integrate the cryptocurrencies API</li>
                    <li>Create a beautiful page to list all cryptos</li>
                    <li>Use firebase for User Authentication</li>
                    <li>Add buttons that let you add to list</li>
                    <li>Search functionality</li>
                    <li>Interface to add amounts</li>
                    <li>Add the NodeJs backend, use MySQL to save data</li>
                </ul>


            </div>

        </div>
    )
}

export default About
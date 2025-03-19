import { Route , Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Model from "../components/Our_Model/Model";
import AboutUs from "../components/AboutUs/AboutUs";

function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/OurModel" element = {<Model/>}/>
            <Route path="/AboutUs" element = {<AboutUs/>}/>
        </Routes>
    );
}

export default CustomRoutes;
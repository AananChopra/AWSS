import { Route , Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Model from "../components/Our_Model/Model";

function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/Our Model" element = {<Model/>}/>
        </Routes>
    );
}

export default CustomRoutes;
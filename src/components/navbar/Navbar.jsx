import {Link} from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";
import '../../components/navbar/Navbar.css'
import {motion} from "framer-motion";

function Navbar(){
    return(
        <motion.header initial={{opacity:0 , x:-100}} 
        animate={{opacity:1 , x:0}}
        transition={{duration:0.5 , delay:0.8}}>
            <div className="Navbar">
                {/* logo section */}
                <div>
                    <img src={logo} className="logo"/>
                </div>


                {/* Navlinks section */}
                <div className="navlinks-div">
                    <ul className="navlinks">
                        <li>
                            <Link to='/'>Products</Link>
                        </li>
                        <li>
                            <Link to='/'>Custom Stories</Link>
                        </li>
                        <li>
                            <Link to='/'>About</Link>
                        </li>
                        <li>
                            <Link to='/'>Blogs</Link>
                        </li>
                    </ul>
                </div>


                {/* button section */}
                <div>
                    <button className="btn-touch">Get In Touch</button>
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;
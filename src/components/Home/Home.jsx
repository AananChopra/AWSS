import Info from "../Info/Info";
import Navbar from "../navbar/Navbar";
import Upload from "../Upload_section/Upload";
import "./Home.css";

function Home(){
    return(
        <main>
            <Navbar/>
            <Upload/>
            <Info/>
        </main>
    );
}

export default Home;
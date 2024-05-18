import Intro from "../components/Intro";
import NewCrash from "../components/NewCrash";
import Reviw from "../components/Reviw";
import Service from "../components/Service";
import Skills from "../components/Skills";


function Home() {
    return (
        <div>
           <Intro/>
           <Service/>
           <Reviw/>
           <NewCrash/>
           <Skills/>
        </div>
    );
}

export default Home;
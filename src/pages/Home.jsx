import Admission from "../components/Admission";
import Bangladesh from "../components/Bangladesh";
import Call from "../components/Call";
import Core from "../components/Core";
import Downloads from "../components/Downloads";
import Intro from "../components/Intro";
import Job from "../components/Job";
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
           <Admission/>
           <Job/>
           <Downloads/>
           <Bangladesh/>
           <Core/>
           <Call/>
        </div>
    );
}

export default Home;
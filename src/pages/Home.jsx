import Intro from "../components/Intro";
import NewCrash from "../components/NewCrash";
import Reviw from "../components/Reviw";
import Service from "../components/Service";


function Home() {
    return (
        <div>
           <Intro/>
           <Service/>
           <Reviw/>
           <NewCrash/>
        </div>
    );
}

export default Home;
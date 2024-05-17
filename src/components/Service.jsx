import RigthIcon from "../assets/icons/RigthIcon"
import service_data from "../data/service";

function Service() {
    return (
        <section>
            <h3>
            Organize Your own Learning
              Let the Journey Begin
            </h3>
            <p>
            Go to the section of your choice to learn anything on any topic 
            </p>
            <div className="grid">
                {
                    service_data.map((item) =>(
                        <div key={item.id} className="">
                            <div className="img">
                                <img src={item.img} alt={item.alt} />
                            </div>
                            <div className="">
                                <h4>{item.title}</h4>
                                <p>{item.info}</p>
                            </div>
                            <div className="">
                               <span><RigthIcon/></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Service;
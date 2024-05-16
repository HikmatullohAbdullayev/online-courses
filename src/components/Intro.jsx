import class_data from "../data/class";
import portfel from "../assets/img/portfel.png"
import RigthArrowIcon from "../assets/icons/RigthArrowIcon"
import { Link } from "react-router-dom";
import NewYearSlider from "./NewYearSlider";


function Intro() {
    return (
        <section className="header_top container 1440px mx-auto px-[20px] mt-[100px] bg-[#10525B] pt-[86px] text-center rounded-[10px]">
            <h1 className="text-[45px] font-bold text-white">
            Online batch admission of 2023 is going on!
            </h1>
            <p className="text-[15px] font-bold text-white pt-[20px] pb-[45px]" >
            6-10 live classes per week depending on class, along with lecture sheets and regular exam facility 
            </p>
            <div className="flex justify-evenly items-center mx-auto px-[170px] gap-[48px]" >
                {
                    class_data.map((item) => (
                        <div key={item.id} className="py-[11px] px-[20px]  bg-white rounded-md hover:shadow-md">
                            <div className="img_bloc">
                                <img  className="mx-auto inline-block" src={portfel} alt="img" />
                            </div>
                            <h3 className="mt-[20px] text-[23px] font-semibold  text-black">{item.class}</h3>
                            <p className="pt-[5px] pb-[19px] text-[13px] font-light text-black">is simply dummy text of th  printing and typesetting industry.</p>
                            <span className="mx-auto inline-block cursor-pointer"><RigthArrowIcon/></span>
                        </div>
                    ))
                }
            </div>
                <Link className="text-[#09F7F7] pt-[20px] pb-[23px] mx-auto">Know more about online batch</Link>
           

           <div className="px-[20px] ">
           <NewYearSlider/>
           </div>
        </section>
    );
}

export default Intro;
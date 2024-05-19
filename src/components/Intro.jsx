import class_data from "../data/class";
import portfel from "../assets/img/portfel.png"
import RigthArrowIcon from "../assets/icons/RigthArrowIcon"
import { Link } from "react-router-dom";
import NewYearSlider from "./NewYearSlider";


function Intro() {
    return (
        <section className="header_top container max-w-[1440px] mx-auto px-[20px] mt-[100px] bg-[#10525B] pt-[86px] pb-[43px] text-center rounded-[10px] mobil2:mt-[40px] mobile450:mt-[20px]">
            <h1 className="text-[45px] font-bold px-[20px] text-white table1005:text-[36px] table1005:pt-[30px]">
            Online batch admission of 2023 is going on!
            </h1>
            <p className="text-[15px] font-bold text-white pt-[20px] pb-[45px] " >
            6-10 live classes per week depending on class, along with lecture sheets and regular exam facility 
            </p>
            <div className="max-w-[950px] grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))]  pb-[20px] mx-auto  px-[10px] gap-[10px]  " >
                {
                    class_data.map((item) => (
                        <div key={item.id} className="py-[11px] mx-auto px-[20px]   bg-white rounded-md hover:shadow-md">
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
                <Link className="text-[#09F7F7] mt-[20px] pb-[23px] mx-auto">Know more about online batch</Link>
           
           <h3 className="font-bold text-[59px] text-white pt-[23px] table1005:text-[36px]">
           New Year, New Skills
           </h3>
                <p className="font-light text-[27px] text-white pt-[18px] table1005:text-[20px] ">
                Ten Minute School courses and bundles will be available for more savings in the new yea
                </p>
           <div className="px-[20px] pt-[32px]">
           <NewYearSlider/>
           </div>
        </section>
    );
}

export default Intro;
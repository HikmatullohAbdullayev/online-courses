import rocket from "../assets/img/rocket.png"
import skills_data from "../data/skills_data";


function Skills() {
    return (
        <section className=" bg-black pt-[16px] pb-[94px]" >
            <div className="container max-w-[1440px] mx-auto px-[20px]">
            <div className="flex justify-center items-center gap-[10px]">
                <div className="imgblok">
                    <img src={rocket} alt="roket img" />
                </div>
                <h3 className="text-white">
                    SKILLS
                </h3>
            </div>

            <h2 className="text-white text-center text-[28px] font-medium ">The best skill development platform in the country</h2>
            <div className="flex justify-evenly items-center pb-[78px] pt-[41px] flex-wrap gap-[20px] mobile450:justify-start">
                <p className="before text-white flex gap-2 items-center ">The best teacher in the country</p>
                <p className="before text-white flex gap-2 items-center ">5 lakh+ students</p>
                <p className="before text-white flex gap-2 items-center ">70+ online courses</p>
            </div>
            <div className="max-w-[1042px] mx-auto bg-[#131831] px-[37px] py-[30px] rounded-md " >
                <p className="text-white text-[21px] font-extrabold text-center pb-[32px]  ">
                The best companies in the country are taking our Corporate Skills Development Programme
                </p>
        <div className="flex justify-evenly items-center gap-[20px]  mobile3:grid mobile3:grid-cols-3 mobile530:grid-cols-2 ">
        {
            skills_data.map((item) => (
                <div key={item.id} className="">
                    <img  src={item.img} alt="img" />
                </div>
            ))
        }
        </div>
            </div>
            </div>
            
        </section>
    );
}

export default Skills;
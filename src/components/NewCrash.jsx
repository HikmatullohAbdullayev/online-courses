import newcrush_data from "../data/newCrush_data";
import course from "../assets/img/crashCourse.png"

function NewCrash() {
    return (
        <section className="container max-w-[1440px] mx-auto px-[20px] pb-[40px]">
           <h1 className="text-[40px] font-extralightlight py-[120px]  text-center table1005:text-[30px] table1005:pt-[20px] mobil670:pb-[20px]">
           A New Crash Course Has Arrived
            </h1>
            
            <div className=" grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  pb-[20px] mx-auto  px-[20px] gap-[10px]  " >
                {
                    newcrush_data.map((item) => (
                        <div key={item.id} className=" mx-auto w-[300px]  bg-white rounded-md hover:shadow-md">
                            <div className="img_bloc w-[300px]">
                                <img  className="mx-auto w-full inline-block" src={course} alt="img" />
                            </div>
                            <p className="text-[18px] font-normal py-[5px] px-[8px]">{item.text}</p>
                            <p className=" text-[20px] font-semibold py-[5px] px-[8px] pt-[13px]">{item.price}</p>
                           
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default NewCrash;NewCrash
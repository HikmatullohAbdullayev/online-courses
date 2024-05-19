
import coreImg from "../assets/img/detail_bgImg.png"

function Core() {
    return (
        <section className="bg-white pb-[80px]">
            <div className="container  max-w-[1440px] mx-auto flex justify-between items-center  px-[20px] desktop:flex-col-reverse table:gap-[20px] ">
                <div className="grid grid-cols-2 gap-[22px] mobile550:grid-cols-1">
                    
                        
                            <div  className="p-[40px] rounded-[10px]  bg-[#DB6D087D] ">
                                <p className="font-bold text-[54px]  text-white table:text-[36px] ">1 CORE +</p>
                                <p className="font-normal text-[24px] text-white text-end table:text-[18px]">Total students</p>
                            </div>
                            <div  className="p-[40px] rounded-[10px]  bg-[#08DB767D]">
                            <p className="font-bold text-[54px]  text-white table:text-[36px]">1 CORE +</p>
                                <p className="font-normal text-[24px] text-white text-end table:text-[18px]">Total students</p>
                            </div>
                            <div  className="p-[40px] rounded-[10px]  bg-[#B1DB087D]">
                            <p className="font-bold text-[54px]  text-white table:text-[36px]">1 CORE +</p>
                                <p className="font-normal text-[24px] text-white text-end table:text-[18px]">Total students</p>
                            </div>
                            <div  className="p-[40px] rounded-[10px]  bg-[#A408DB7D]">
                            <p className="font-bold text-[54px]  text-white table:text-[36px]">1 CORE +</p>
                                <p className="font-normal text-[24px] text-white text-end table:text-[18px]">Total students</p>
                            </div>
                        
                    
                </div>
                <div className="img mobile550:px-[20px]">
                    <img className="w-full" src={coreImg} alt="img" />
                </div>
            </div>
            
        </section>
    );
}

export default Core;
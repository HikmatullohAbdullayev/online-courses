import RigthIcon from "../assets/icons/RigthIcon";
import service_data from "../data/service";

function Service() {
  return (
    <section className="service container max-w-[1440px] mx-auto px-[20px] pt-[57px] pb-[270px] table1005:pb-[140px]  mobile450:pb-[15px]  mobile450:pt-[20px]">
      <h3 className="font-semibold text-[47px] mx-auto max-w-[639px] text-center">
        Organize Your own Learning Let the Journey Begin
      </h3>
      <p className="font-light text-[18px] text-center pt-[24px] pb-[33px]">
        Go to the section of your choice to learn anything on any topic
      </p>
      <div className="grid grid-cols-2 gap-[31px] table900:grid-cols-1">
        {service_data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center max-w-[540px] w-full mx-auto  py-[41px] px-[29px] border border-solid rounded-[10px] gap-[30px] hover:shadow-md table1170:max-w-[420px] mobile530:max-w-[300px] mobile530:px-[12px] mobile530:py-[16px] mobile450:w-[300px]
                        "
          >
            <div className="img w-[55px]">
              <img className="w-full" src={item.img} alt={item.alt} />
            </div>
            <div className="">
              <h4 className="font-medium text-[30px] table1005:text-[20px] mobile450:text-[18px]">
                {item.title}
              </h4>
              <p className="font-extralight text-[17px] mobile450:text-[15px]">
                {item.info}
              </p>
            </div>
            <div className="">
              <span>
                <RigthIcon />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;

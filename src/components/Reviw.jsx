import Admissionicon from "../assets/icons/AdmissionIcon";
import bgImg from "../assets/img/reviwimg.png";
import rewiv_data from "../data/rewiv_data";
import Button from "./Button";

function Reviw() {
  return (
    <section className="container bg-white pt-[30px] pb-[50px]  mobile450:pb-[15px]  mobile450:pt-[20px] ">
      <div className="container   max-w-[1440px] mx-auto px-[20px] ">
        <div className="flex items-center justify-center gap-[10px] mx-auto w-full">
          <span>
            <Admissionicon />
          </span>
          <p className="font-normal text-[17px] text-[#049999]">CLASS - 10</p>
        </div>
        <h3 className="font-normal text-[40px] text-center pt-[24px] pb-[18px] mobil2:text-[26px]">
          What is in the online batch throughout the year?
        </h3>
        <p className="font-light text-[17px] text-center pb-[23px] mobil2:text-[15px]">
          May the progress of education continue from any part of the country
          under the care of the best teachers
        </p>

        <div className="flex justify-between items-center pb-[150px] mobile450:pb-[30px]">
          <div className="grid gap-[28px] table1005:mx-auto">
            {rewiv_data.map((item) => (
              <div
                key={item.id}
                className="flex justify-start  items-center gap-3 max-w-[611px] py-[20px] bg-[#F4F7FD] shadow-lg border rounded-[10px] mobil2:flex-col   "
              >
                <div className="imo p-[10px]">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="mx-auto">
                  <h4 className="font-normal text-[21px] text-center px-[10px]">
                    {item.title}
                  </h4>
                  {item.text ? (
                    <p className="font-extralight text-[17px] text-center">
                      {item.text}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="bgReviw inline-block w-[558px] p-[00px] h-[445pxpx] table1005:hidden">
            <img className="w-full" src={bgImg} alt="img" />
          </div>
        </div>
        <div className="text-center flex justify-between items-center   ">
          <Button>CHOICE CLASS FOR</Button>
        </div>
      </div>
    </section>
  );
}

export default Reviw;

import AdmissionIcon from "../assets/icons/AdmissionIcon";
import AdmissionSlider from "./AdmissionSlider";
import Button from "./Button";

function Admission() {
  return (
    <section className="container max-w-[1440px] mx-auto px-[20px] pt-[83px] pb-[57px]  mobile450:pb-[15px]  mobile450:pt-[20px]">
      <div className="flex items-center justify-center gap-4">
        <span>
          <AdmissionIcon />
        </span>
        <p className="text-[14px] font-medium ">Admission Test</p>
      </div>
      <h3 className="text-[45px] font-normal  text-center pt-[23px] pb-[16px] mobil2:text-[24px] ">Complete preparation for dream university</h3>
      <p className="text-[16px] font-light   text-center ">Complete preparation for dream university</p>
    <div className="px-[20px] pt-[62px] pb-[60px] mobile450:pb-[15px]  mobile450:pt-[20px]">
        <AdmissionSlider/>
    </div>

        


      <div className="text-center flex justify-between items-center   ">
      <Button>CHOICE CLASS FOR</Button>
      </div>
    </section>
  );
}

export default Admission;

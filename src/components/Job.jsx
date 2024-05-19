
import AdmissionIcon from "../assets/icons/AdmissionIcon";
import Button from "./Button";
import JobSlider from "./JobSlider";

function Job() {
  return (
    <section className="bg-white  pt-[83px] pb-[57px]">
     <div className="container max-w-[1440px] mx-auto px-[20px]">
     <div className="flex items-center justify-center gap-4">
        <span>
          <AdmissionIcon />
        </span>
        <p className="text-[14px] font-medium ">job preparation</p>
      </div>
      <h3 className="text-[45px] font-normal  text-center pt-[23px] pb-[16px] mobil2:text-[24px] ">Complete preparation for dream university</h3>
      <p className="text-[16px] font-light   text-center ">BCS or bank job - whatever the target, the solution is here!</p>
    <div className="px-[20px] pt-[62px] pb-[60px]">
        <JobSlider/>
    </div>

        <div className="flex">

        </div>


      <div className="text-center flex justify-between items-center   ">
        <Button>CHOICE CLASS FOR</Button>
      </div>
     </div>
    </section>
  );
}

export default Job;

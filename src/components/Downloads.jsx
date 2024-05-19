import Button from "./Button";
import ready from "../assets/img/girls_img.png";
import "../App.css";

function Downloads() {
  return (
    <section className=" mt-[45px] bg-white">
      <div className="container max-w-[1440px]  mx-auto px-[20px] pt-[16px] pb-[100px]  mobile450:pb-[15px]  mobile450:pt-[20px] ">
        <div className="downloads  rounded-[10px] flex justify-between items-start ">
          <div className="flex flex-col gap-[40px] table1005:mx-auto ">
            <p className="font-bold text-center text-[40px] max-w-[620px] text-white px-[24px] pt-[16px] desktop1220:text-[30px] ">
              Explore the “Free Downloads” section to download class notes and
              lecture sheets created by the best teachers
            </p>
            <div className="flex justify-center px-[24px] table1005:pb-[20px] ">
              <Button>JOIN FREE CLASS </Button>
            </div>
          </div>
          <div className="imgas pt-[9px] px-[29px] max-w-[550px] table1005:hidden">
            <img className=" w-full " src={ready} alt="ready to learn" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Downloads;

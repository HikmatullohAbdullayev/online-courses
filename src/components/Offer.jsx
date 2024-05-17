import { Link } from "react-router-dom";
import "../App.css";
import back2school from "../assets//img/back2school.png";
import offerimg1 from "../assets//img/offerimg1.png";
import offerimg2 from "../assets//img/offerimg2.png";
import AccountIcon from "../assets/icons/AccountIcon";
import LoginIcon from "../assets/icons/LoginIcon";
function Offer() {
  return (
    <div className=" container mx-auto px-[20px] max-w-[1440px]  flex justify-between items-center ">
      <div className="imgbloc w-[134px] table1170:w-[80px]">
        <img src={offerimg1} alt="" />
      </div>
      <div className="imgbloc  w-[123px] table1170:w-[80px] mobil675:hidden">
        <img src={back2school} alt="" />
      </div>
      <div className="imgbloc  w-[353px] table1170:w-[280px] mobile550:w-[230px] mobile550:h-[50px]">
        <img className="mx-auto h-full" src={offerimg2} alt="" />
      </div>
      <div className="imgbloc count text-center  w-[148px] table1170:w-[80px]  mobile550:hidden">
        <p className="  py-[30px] px-[40px] font-extrabold text-[47px] text-white table1170:text-[20px] table1170:px-[20px]">
          10
        </p>
      </div>
      <Link className="imgbloc flex items-center gap-[12px] py-[12px] px-[13px] bg-[#09F7F7] rounded-md table1170:py-[8px] table1170:px-[7px]">
        <span className="mobile450:hidden ">
          <AccountIcon />
        </span>
        <span className="hidden mobile450:block ">
          <LoginIcon />
        </span>
        <p className="font-extrabold text-[24px] text-white table1170:text-[20px] tablemin:hidden">
          JOIN NOW
        </p>
      </Link>
    </div>
  );
}

export default Offer;

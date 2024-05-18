import { Link } from "react-router-dom";
import AccountIcon from "../assets/icons/AccountIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import logo from "../assets/img/Logo.png";
import Nav from "../components/Nav";
import Offer from "../components/Offer";
import LoginIcon from "../assets/icons/LoginIcon";
import { useState } from "react";
import MenuIcon from "../assets/icons/MenuIcon";
import CloseIcon from "../assets/icons/CloseIcon";

function Header() {

    const [open, setOpen] = useState(false)

    const burger = () =>{
        setOpen(!open)
    }
  return (
    <header>
      <div className="header_top container max-w-[1440px] mx-auto px-[20px] flex justify-around items-center py-[40px] mobile530:py-[18px] mobile530:px-[12px]">
        <div className="logo h-[50px] block">
          <Link className="w-full" to="/">
            <img className="w-[100px] mobile530:w-[70px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="tablemin:hidden">

        <Nav />
        </div>
        <div className="flex justify-between items-center gap-[20px] ">
          <div className="sel mr-[31px] table1170:mr-[13px] ">
            <select
              className="px-[12px] py-[5px] border border-solid border-black rounded-md shadow-md bg-transparent mobile530:p-[2px]"
              name="languange"
              id="languange"
            >
              <option value="English">Eng</option>
              <option value="Uzbek">Uzb</option>
              <option value="Russian">Rus</option>
            </select>
          </div>
          <Link
            to="/"
            className="flex items-center mr-[21px] gap-[12px] table1005:hidden"
          >
            <span>
              <PhoneIcon />
            </span>
            <p className="text-[22px] font-semibold text-[#09F7F7] hover:text-[black]">
              16457
            </p>
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-[12px] py-[12px] px-[13px] bg-[#09F7F7] rounded-md table1170:py-[5px] table1170:px-[5px]"
          >
            <span className="mobile450:hidden ">
              <AccountIcon />
            </span>
            <span className="hidden mobile450:block ">
              <LoginIcon />
            </span>
            <p className="font-extrabold text-[16px] text-white table1080:hidden">
              LOG IN
            </p>
          </Link>
          <div className="hidden ml-[10px] cursor-pointer tablemin:block  ">
            <button onClick={burger}>
                <span>{open ? <CloseIcon/> :  <MenuIcon/>}</span>
            </button>
            <Nav  open={open}/>
          </div>
        </div>
      </div>
      <div className="offer  ">
        <Offer />
      </div>
    </header>
  );
}

export default Header;

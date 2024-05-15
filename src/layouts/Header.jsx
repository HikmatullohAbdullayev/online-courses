
import { Link } from "react-router-dom";
import AccountIcon from "../assets/icons/AccountIcon"
import PhoneIcon from "../assets/icons/PhoneIcon"
import logo from "../assets/img/Logo.png"
import Nav from "../components/Nav";

function Header() {
    return (
        <header>
            <div className="header_top container 1440px mx-auto px-[20px] flex justify-between items-center  py-[40px]">
                <div className="logo">
                    <Link to="/">
                    <img src={logo} alt="logo" />
                    </Link>
                </div>
               <Nav/>
               <div className="sel">
                <select name="languange" id="languange">
                    <option value="English" key="eng">Eng</option>
                    <option value="Uzbek" key="uzm">Uzb</option>
                    <option value="Russian" key="rus">Rus</option>
                </select>
               </div>
               <Link className="flex items-center gap-[12px]">
                <span>
                    <PhoneIcon/>
                </span>
                <p className="text-[22px] font-semibold text-[#09F7F7] hover:text-[black]">16457</p>
               </Link>
               <Link className="flex items-center gap-[12px]">
                <span className="">
                    <AccountIcon/>
                </span>
                <p className="font-extrabold text-[16px] ">LOG IN</p>
               </Link>


            </div>
            
        </header>
    );
}

export default Header;
import { Link } from "react-router-dom";
import AccountIcon from "../assets/icons/AccountIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import logo from "../assets/img/Logo.png";
import Nav from "../components/Nav";
import Offer from "../components/Offer";

function Header() {
    return (
        <header>
            <div className="header_top container 1440px mx-auto px-[20px] flex justify-around items-center py-[40px]">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <Nav />
                <div className="flex justify-between items-center ">
                    <div className="sel mr-[31px]">
                        <select className="px-[12px] py-[5px] border border-solid border-black rounded-md shadow-md bg-transparent active:outline-[]" name="languange" id="languange">
                            <option value="English">Eng</option>
                            <option value="Uzbek">Uzb</option>
                            <option value="Russian">Rus</option>
                        </select>
                    </div>
                    <Link to="/" className="flex items-center mr-[21px] gap-[12px]">
                        <span>
                            <PhoneIcon />
                        </span>
                        <p className="text-[22px] font-semibold text-[#09F7F7] hover:text-[black]">16457</p>
                    </Link>
                    <Link to="/login" className="flex items-center gap-[12px] py-[12px] px-[13px] bg-[#09F7F7] rounded-md ">
                        <span className="">
                            <AccountIcon />
                        </span>
                        <p className="font-extrabold text-[16px] text-white">LOG IN</p>
                    </Link>
                </div>
            </div>
            <div className="offer">
            <Offer/>
            </div>
        </header>
    );
}

export default Header;

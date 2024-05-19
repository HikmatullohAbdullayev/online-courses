import appStore from "../assets/img/appStore.png"
import googlePlay from "../assets/img/googlePlay.png"
import phone from "../assets/img/download_app_phone.png"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="container bg-[#22214C] footer max-w-[1440px] mx-auto flex justify-around items-end rounded-[7px] px-[20px] ">
          <div className="">
          <p className="font-medium text-[42px] text-white max-w-[546px] py-[20px]mobil675:text-[24px]">Download our mobile app, start learning today</p> 
           <div className="flex justify-between items-center pt-[70px] pb-[30px] max-w-[320px] mb-[20px] gap-[20px] table900:pb-[10px] table900:pt-[20px] mobile450:flex-col">
            <Link>
            <img src={appStore} alt="app store download" />
            </Link>
            <Link>
            <img src={googlePlay} alt="google play download" />
            </Link>
           </div>
          </div>

          <div className="im mobil675:hidden">
            <img src={phone} alt="img" />
          </div>
        </footer>
    );
}

export default Footer;
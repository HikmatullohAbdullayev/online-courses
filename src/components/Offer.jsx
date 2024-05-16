import { Link } from 'react-router-dom';
import '../App.css'
import back2school from "../assets//img/back2school.png"
import offerimg1 from "../assets//img/offerimg1.png"
import offerimg2 from "../assets//img/offerimg2.png"
import AccountIcon from '../assets/icons/AccountIcon';
function Offer() {
    return (
        <div className=" container mx-auto px-[20px] max-w-[1440px]  flex justify-between items-center">
            <div className="imgbloc w-[134px]">
                <img src={offerimg1} alt="" />
            </div>
            <div className="imgbloc  w-[123px]">
                <img src={back2school} alt="" />
            </div>
            <div className="imgbloc  w-[353px]">
                <img src={offerimg2} alt="" />
            </div>
            <div className="imgbloc count text-center  w-[148px]">
                <p className="  py-[30px] px-[40px] font-extrabold text-[47px] text-white">10</p>
            </div>
            <Link className="imgbloc flex items-center gap-[12px] py-[12px] px-[13px] bg-[#09F7F7] rounded-md">
                <span><AccountIcon/></span>
                <p className='font-extrabold text-[24px] text-white'>JOIN NOW</p>
            </Link>
            
        </div>
    );
}

export default Offer;
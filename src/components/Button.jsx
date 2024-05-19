import { Link } from "react-router-dom";
import RigthIcon from "../assets/icons/RigthIcon";


function Button({children}) {
    return (
        <Link className="text-white bg-[#0ABEBE] flex items-center  mx-auto gap-[10px] rounded-[10px] px-[29px] py-[19px] hover:gap-[15px]">
          {children}
          <span className="fill-white">
            <RigthIcon />
          </span>{" "}
        </Link>
    );
}

export default Button;
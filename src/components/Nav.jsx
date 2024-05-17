
import nav from '../data/nav_data';
import { Link } from 'react-router-dom';

function Nav( {open}) {
    return (
        <nav>
             <ul className={`flex justify-between items-center gap-[35px] table1170:gap-[20px] tablemin:flex-col tablemin:absolute transition-all duration-500 ease-in-out transform ${open ? "left-[0px] bg-amber-400 py-[30px] px-[20px]  rounded-lg text-white   " : "left-[-200px]"} top-0 `}>
                    {
                        nav.map((item) =>(
                            <li className='hover:text-[#09F7F7]' key={item.id}>
                                <Link to="/" className='text-[18px] font-semibold' >{item.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            
        </nav>
    );
}

export default Nav;
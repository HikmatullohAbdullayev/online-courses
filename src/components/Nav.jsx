
import nav from '../data/nav_data';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
             <ul className="flex justify-between items-center gap-[24px]">
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
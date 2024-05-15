
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
    return (
        <div className='wrapper flex flex-col justify-between  h-screen max-h-full  w-full'>
            <div className="boc">
            <Header/>
            <Outlet/> 
            </div>
            <Footer/>           
        </div>
    );
}

export default Layout;
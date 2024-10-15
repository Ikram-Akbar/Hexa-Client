
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import Footer from '../Components/Shared/Footer';

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;
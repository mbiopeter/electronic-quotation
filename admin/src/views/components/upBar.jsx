import React, { useEffect, useState } from 'react';
import { logo } from '../../model/images';
import { useLocation, Link } from 'react-router-dom';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ClassIcon from '@mui/icons-material/Class';
import PeopleIcon from '@mui/icons-material/People';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentIcon from '@mui/icons-material/Payment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const UpBar = () => {
    const [expand, setExpand] = useState(false);
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const location = useLocation();
    
    const path = location.pathname;
    const toggleExpand = () => setExpand((prev) => !prev);
    useEffect(() =>{
        setToggleSidebar(false);
        document.body.style.overflow = 'auto';
    },[path]);


    const navLinksData = [
        { id: 1, icon: <DashboardIcon />, name: 'Dashboard', route: '/' },
        { id: 2, icon: <ClassIcon />, name: 'Courses', route: '/courses' },
        { id: 3, icon: <PeopleIcon />, name: 'Users', route: '/users' },
        { id: 4, icon: <ReportIcon />, name: 'Reports', route: '/reports' },
        { id: 5, icon: <AttachMoneyIcon />, name: 'Sales', route: '/sales' },
        { id: 6, icon: <PaymentIcon />, name: 'Payments', route: '/payments' },
        { id: 7, icon: <SubscriptionsIcon />, name: 'Subscriptions', route: '/subscriptions' },
        { id: 8, icon: <SettingsIcon />, name: 'Settings', route: '/settings' },
    ];

    const NavLinks = ({ icon, name, route }) => (
        <Link to={route}>
            <div className={`flex w-[150px] h-[20px] cursor-pointer gap-2 items-center justify-center px-3 py-5 shadow-xl ${path === route ? 'bg-blue-100 border-l-4 rounded border-blue-400' : ''}`}>
                {icon}
                <span className="text-[#333333] text-sm font-medium">{name}</span>
            </div>
        </Link>
    );

    const MobileNav = ({icon, name, route}) => {
        return(
            <Link to={route}>
                <div className={`px-5 py-2 flex flex-row gap-3 items-center ${path === route ? 'bg-blue-100 border-l-4 rounded border-blue-400' : ''}`}>
                    {icon}
                    <span className='text-[#333333] text-sm font-medium'>{name}</span>
                </div>
            </Link>
        )
    }

    const handleExpand = () => {
        document.body.style.overflow = 'hidden';
        setToggleSidebar(true);
    };

    const handleClose = () => {
        document.body.style.overflow = 'auto';
        setToggleSidebar(false);
    };
    return (
        <div className="sticky top-0 left-0 z-10 w-full flex flex-col bg-white shadow-sm">
            <div className="w-full py-4 px-10 flex justify-between items-center border-b border-gray-200">
                <div className="hidden lg:flex items-center gap-4">
                    <img src={logo} alt="Logo" className="w-10 h-10" />
                    <span className="text-xl font-bold text-gray-600">MBEREREKIM INSTALLATION CO.LTD</span>
                </div>
                <div className="flex items-center gap-3">
                    <Person2OutlinedIcon fontSize="large" />
                    <span className="text-2sm lg:text-lg font-medium text-gray-600 capitalize "> John Kimani</span>
                    <button onClick={toggleExpand} className="hidden lg:flex items-center justify-center bg-yellow-500 text-white p-2 rounded-full focus:outline-none" aria-expanded={expand} aria-label="Toggle navigation">
                        {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </button>
                </div>
                <div className="lg:hidden cursor-pointer">
                    <MenuIcon onClick={handleExpand}/>
                </div>
            </div>
        </div>
    );
};

export default UpBar;

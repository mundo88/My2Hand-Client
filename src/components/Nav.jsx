import React from 'react';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { NavLink,Link, useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import { TbSettingsFilled,TbShirtFilled,TbHeartFilled,TbUserFilled  } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";
import LogoImage from "../assets/images/logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { FaBell,FaFacebookMessenger  } from "react-icons/fa6";
import { BsGridFill } from "react-icons/bs";
import Button from './Button';
import Avatar from './Avatar';


const NavItem = ({children,...props})=>{
    return (
        <NavLink to={props.to} className={`flex items-center justify-center text-md font-medium text-gray-500 hover:text-gray-800 duration-150 group h-11 min-w-11 rounded-lg relative hover:bg-gray-100 [&.active]:text-cyan-700 ${props.className ? props.className : ""}`}>
            {children}
        </NavLink>
    )
}

const NavSearchbarButton = ({props})=>{
    return (
        <button className='h-10 min-w-10 w-12 rounded-full flex items-center justify-center text-gray-600 hover:text-cyan-700'>
            <IoSearchOutline size={20}/>
        </button>
    )
}

const NavSearchbarInput = (props)=>{
    return (
        <input type="text" className='w-full h-full bg-transparent outline-none text-sm font-semibold px-4' placeholder={'Tìm kiếm'}/>
    )
}

const NavSearchbar =({children,...props})=>{
    return (
        <div className={`relative flex items-center h-10 rounded-full bg-gray-100 focus-within:border-cyan-600 focus-within: border border-transparent ${props.className ? props.className : ""} ${props.width ? `w-[${props.width}]`: 'w-full'}`}>
            {children}
            <NavSearchbarInput/>
            <NavSearchbarButton/>
        </div>
    )
}

const NavLogo =()=>{
    const navigate = useNavigate();

    return (
        <Link className='min-w-10 min-h-10 flex items-center justify-center' onClick={() => navigate(-1)}>
            <img src={LogoImage} alt="" className='object-cover w-10 h-10' />
        </Link>                         
    )
}
const NavMiniBarButton = ()=>{
    return (
        <Button variant='light' size='md-icon'> 
            <HiMiniBars3BottomLeft size={24}/>    
        </Button>
    )
}
const NavCurrentUser = ({children,...props}) => {
    return (
        <Dropdown>
        <Dropdown.Button>
            <Avatar></Avatar>
        </Dropdown.Button>
        <Dropdown.DropdownContainer postion='top-left' className='mt-2'>
            <Dropdown.Item>
                <Dropdown.ItemIcon>
                    <TbUserFilled size={20} />
                </Dropdown.ItemIcon>
                <Dropdown.ItemText>
                    Trang cá nhân
                </Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item>
                <Dropdown.ItemIcon>
                    <TbSettingsFilled size={20} />
                </Dropdown.ItemIcon>
                <Dropdown.ItemText>
                    Cài đặt
                </Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item>
                <Dropdown.ItemIcon>
                    <TbShirtFilled size={20} />
                </Dropdown.ItemIcon>
                <Dropdown.ItemText>
                    Đơn mua
                </Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item>
                <Dropdown.ItemIcon>
                    <TbHeartFilled size={20} />
                </Dropdown.ItemIcon>
                <Dropdown.ItemText>
                    Yêu thích
                </Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Separator/>
            <Dropdown.Item>
                <Dropdown.ItemIcon>
                    <IoLogOut size={20} />
                </Dropdown.ItemIcon>
                <Dropdown.ItemText>
                    Đăng xuất
                </Dropdown.ItemText>
            </Dropdown.Item>
        </Dropdown.DropdownContainer>
    </Dropdown> 
    )

}
const Nav = ({children,...props}) => {
    return (
        <div {...props} className={`h-14 bg-white sticky z-50 top-0 flex justify-between items-center duration-150 backdrop-blur-3xl ${props.className ? props.className : ""}`}>
            {children}
            <div className="justify-end flex items-center gap-2">
                {/* <Button size='md-icon' rounded='full'>
                    <BsGridFill size={20}></BsGridFill>
                </Button>
                <Button size='md-icon' rounded='full'>
                    <FaFacebookMessenger  size={20}></FaFacebookMessenger>
                </Button>
                <Button size='md-icon' rounded='full'>
                    <FaBell size={20}></FaBell>
                </Button> */}
                <Button rounded='full' variant='primary'>
                    <Link to={'/login'}>Đăng nhập</Link>
                </Button>
                <Button rounded='full' variant='outline'>
                    <Link to={'/signup'}>Đăng ký</Link>
                </Button>
                 {/* <NavCurrentUser></NavCurrentUser>           */}
            </div>
        </div>
    );
}

Nav.Item = NavItem;
Nav.Searchbar = NavSearchbar;
Nav.SearchbarButton = NavSearchbarButton
Nav.SearchbarInput = NavSearchbarInput
Nav.MiniBarButton = NavMiniBarButton
Nav.Logo = NavLogo
Nav.CurrentUser = NavCurrentUser

export default Nav;

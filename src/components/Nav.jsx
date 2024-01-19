import React from 'react';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { NavLink,Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { TbSettingsFilled,TbShirtFilled,TbHeartFilled,TbUserFilled  } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";
import LogoImage from "../assets/images/logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { FaBell,FaFacebookMessenger  } from "react-icons/fa6";
import { BsGridFill } from "react-icons/bs";
import Button from './Button';



const NavItem = ({children,...props})=>{
    return (
        <NavLink to={props.to} className={`flex items-center justify-center text-lg font-medium text-gray-800 hover:text-gray-800 duration-150 group h-11 min-w-28 rounded-lg relative hover:bg-gray-100 [&.active]:text-emerald-700 ${props.className ? props.className : ""}`}>
            {({isActive})=>(
                isActive ? 
                <>
                    {children}
                    <div className='overflow-hidden absolute -bottom-1.5 w-full h-[3px] flex items-center justify-center'>
                        <span className={`-translate-y-3 opacity-100 bg-emerald-600 h-1 transition-transform w-full group-[.active]:translate-y-0 duration-300`} ></span>
                    </div>
                </>: <>{children}</>
            )}
        </NavLink>
    )
}

const NavSearchbarButton = ({props})=>{
    return (
        <button className='h-10 min-w-10 w-12 rounded-full flex items-center justify-center text-gray-600 hover:text-emerald-700'>
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
        <div className={`relative flex items-center h-10 rounded-full bg-gray-100 focus-within:border-emerald-600 focus-within: border border-transparent ${props.className ? props.className : ""} ${props.width ? `w-[${props.width}]`: 'w-full'}`}>
            {children}
            <NavSearchbarInput/>
            <NavSearchbarButton/>
        </div>
    )
}

const NavCol =({children,...props})=>{
    return (
        <div className={`col-span-4 flex items-center space-x-3 ${props.className ? props.className : ""}`}>
            {children}
        </div>
    )
}
const NavLogo =()=>{
    return (
        <Link className='min-w-10 min-h-10 flex items-center justify-center' to={"/"}>
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

const Nav = ({children,...props}) => {
    return (
        <div {...props} className={`h-14 bg-white sticky z-50 top-0 grid grid-cols-12 duration-150 ${props.className ? props.className : ""}`}>
            {children}
            <NavCol className="justify-end">
                {
                    window.location.pathname !=='/' && (
                        <>
                            <button className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 duration-150 flex items-center justify-center'>
                                <BsGridFill size={20}></BsGridFill>
                            </button>
                            <button className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 duration-150 flex items-center justify-center'>
                                <FaFacebookMessenger  size={20}></FaFacebookMessenger>
                            </button>
                            <button className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 duration-150 flex items-center justify-center'>
                                <FaBell size={20}></FaBell>
                            </button>
                        </>
                    )
                }
                <Dropdown>
                    <Dropdown.Button>
                        <div className='rounded-full w-10 h-10 overflow-hidden relative'>
                            <img src={"https://phanmemmkt.vn/wp-content/uploads/2022/11/avatar-tet-2023-cute-31.jpg"} alt="your profile avatar" className='w-full h-full object-cover' />
                        </div>
                    </Dropdown.Button>
                    <Dropdown.DropdownContainer>
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
            </NavCol>
        </div>
    );
}

Nav.Item = NavItem;
Nav.Searchbar = NavSearchbar;
Nav.SearchbarButton = NavSearchbarButton
Nav.SearchbarInput = NavSearchbarInput
Nav.Col = NavCol
Nav.MiniBarButton = NavMiniBarButton
Nav.Logo = NavLogo

export default Nav;

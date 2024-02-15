
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useMatch} from "react-router-dom";

import { GoHeart, GoHeartFill, GoHome, GoHomeFill } from "react-icons/go";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi2";
import { PiCompass, PiCompassFill, PiMessengerLogo, PiMessengerLogoFill, PiVideo, PiVideoFill } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';
import {  BsPlusSquare } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import logoImg from "../assets/images/logo.png"
import { TbSquarePlus } from 'react-icons/tb';
const Sidebar = () => {
    const [mini,setMini] = useState(false)
    const matchPath = useMatch('/message');
    useEffect(() => {
        if (matchPath !== null) {
            setMini(true)    
        }else{
            setMini(false)
        }
    }, [matchPath]);
 
    
    return (
        <div className={`${mini ? 'w-20' :'min-w-80 '} sticky top-0 flex`}>
            <div className='w-full py-6 bg-white h-screen border-r'>
                <div className='w-full flex flex-col justify-between h-full'>
                    <div>
                        <div className='mx-6 mb-10'>
                            {mini ?<img alt='logo' src={logoImg} className='h-8 w-auto'/> : <Link to={'/'} className='text-2xl font-bold hover:text-gray-800'>My2hand</Link>}
                        </div>
                        <div className='mx-4 space-y-3'>
                            <NavLink to={'/newfeed'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                                {({isActive})=>(
                                    isActive ?
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <GoHomeFill className='text-gray-800 group-hover:scale-105 duration-150' size={28}></GoHomeFill> 
                                        </div>
                                        {!mini && <span className=' text-gray-800 font-bold'>Bảng tin</span>}
                                    </>
                                    :
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <GoHome className='text-gray-800 group-hover:scale-105 duration-150' size={28}></GoHome> 
                                        </div>
                                        {!mini && <span className=' text-gray-800'>Bảng tin</span>}
                                    </>
                                )}
                            </NavLink>
                            <button className='px-2 w-full flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                                <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                    <IoIosSearch className='text-gray-800 group-hover:scale-105 duration-150' size={30}></IoIosSearch> 
                                </div>
                                {!mini &&<span className=' text-gray-800'>Tìm kiếm</span>}
                            </button>
                            <NavLink to={'/explore'}  className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                                {({isActive})=>(
                                    isActive ?
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <PiCompassFill className='text-gray-800 group-hover:scale-105 duration-150' size={28}></PiCompassFill> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800 font-bold'>Khám phá</span>}
                                    </>
                                    :
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <PiCompass className='text-gray-800 group-hover:scale-105 duration-150' size={28}></PiCompass> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800'>Khám phá́</span>}
                                    </>
                                )}
                            </NavLink>
                            <NavLink to={'/shop'}  className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                                {({isActive})=>(
                                    isActive ?
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <HiShoppingBag className='text-gray-800 group-hover:scale-105 duration-150' size={28}></HiShoppingBag> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800 font-bold'>Mua sắm</span>}
                                    </>
                                    :
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <HiOutlineShoppingBag className='text-gray-800 group-hover:scale-105 duration-150' size={28}></HiOutlineShoppingBag> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800'>Mua sắm</span>}
                                    </>
                                )}
                            </NavLink>
                            <NavLink to={'/watch'}  className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                                {({isActive})=>(
                                    isActive ?
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <PiVideoFill className='text-gray-800 group-hover:scale-105 duration-150' size={28}></PiVideoFill> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800 font-bold'>Video</span>}
                                    </>
                                    :
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <PiVideo className='text-gray-800 group-hover:scale-105 duration-150' size={28}></PiVideo> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800'>Video</span>}
                                    </>
                                )}
                            </NavLink>
                            <NavLink to={'/message'}  onClick={()=>{setMini(true)}} className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                                {({isActive})=>(
                                    isActive ?
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <PiMessengerLogoFill className='text-gray-800 group-hover:scale-105 duration-150' size={28}></PiMessengerLogoFill> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800 font-bold'>Trò chuyện</span>}
                                    </>
                                    :
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <PiMessengerLogo className='text-gray-800 group-hover:scale-105 duration-150' size={28}></PiMessengerLogo> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800'>Trò chuyện</span>}
                                    </>
                                )}
                            </NavLink>
                            <NavLink to={'/saved'}  className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                        
                                {({isActive})=>(
                                    isActive ?
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <GoHeartFill className='text-gray-800 group-hover:scale-105 duration-150' size={28}></GoHeartFill> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800 font-bold'>Đã lưu</span>}
                                    </>
                                    :
                                    <>
                                        <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                            <GoHeart className='text-gray-800 group-hover:scale-105 duration-150' size={28}></GoHeart> 
                                        </div>
                                        {!mini &&<span className=' text-gray-800'>Đã lưu</span>}
                                    </>
                                )}
                            </NavLink>
                            <button className='px-2 w-full flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                                <div className='w-9 h-9 overflow-hidden flex items-center justify-center'>
                                    <TbSquarePlus className='text-gray-800 group-[.active]:text-gray-800 group-hover:scale-105 duration-150' size={28}></TbSquarePlus>
                                </div>
                                {!mini &&<span className='group-[.active]:font-bold text-gray-800'>Tạo</span>}
                            </button>
                            <NavLink to={'/user/hihi'}  className='px-2 flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                                <div className='w-9 h-9 overflow-hidden flex items-center justify-center rounded-full'>
                                    <div>
                                        <img src="https://i.ex-cdn.com/mgn.vn/files/content/2022/09/12/0080vbacgy1h5zi72ra0dj34mo2cu4qp-1808.jpg" className='w-7 h-7 object-cover rounded-full' alt="" />
                                    </div>
                                </div>
                                {!mini &&<span className='group-[.active]:font-bold text-gray-800'>Trang cá nhân</span>}
                            </NavLink>
                        </div>
                    </div>
                    <div className='px-4'>
                        <button className='px-2 w-full flex items-center py-1.5 hover:bg-gray-200 text-gray-800 rounded-lg duration-150 gap-3 group'>
                            <div className='w-9 h-9 overflow-hidden flex items-center justify-center' >
                                <SlMenu className='text-gray-800 group-[.active]:text-gray-800 group-hover:scale-105 duration-150' size={20}></SlMenu>
                            </div>
                            {!mini &&<span className='group-[.active]:font-bold text-gray-800'>Xem thêm</span>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

import React from 'react';
import Nav from '../components/Nav';
import { Outlet} from "react-router-dom";
import Button from '../components/Button';
import { RiMessengerFill} from "react-icons/ri";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoGrid, IoGridOutline } from "react-icons/io5";
import { PiCompassLight ,PiCompassFill, PiYoutubeLogoFill,PiYoutubeLogoLight } from "react-icons/pi";
import { AiOutlineFire,AiFillFire } from "react-icons/ai";

const ActiveBordered=()=>{
    return (
        <div className='animate-fade duration-50 overflow-hidden absolute -bottom-1.5 w-full h-[3px] flex items-center justify-center'>
            <span className={`-translate-y-3 opacity-100 bg-emerald-600 h-1 transition-transform w-full group-[.active]:translate-y-0 duration-300`} ></span>
        </div>
    )
}

const Layout = () => {
    return (
           <>
            <Nav className='px-4'>
                <Nav.Col>
                    <Nav.Logo/>
                    <Nav.Searchbar width='72'/>
                </Nav.Col>
                <Nav.Col className={'justify-between'}>
                    <Nav.Item className='w-full' to='/shop'>
                        {({isActive})=>(
                            isActive ? 
                            <>
                                <GoHomeFill  size={28}></GoHomeFill>
                                <ActiveBordered/> 
                            </>: <><GoHome size={28}></GoHome></>
                        )}
                    </Nav.Item>
                    <Nav.Item className='w-full' to='/newfeed'>
                        {({isActive})=>(
                            isActive ? 
                            <>
                                <IoGrid size={28}></IoGrid>
                                <ActiveBordered/> 
                            </>: <><IoGridOutline size={28}></IoGridOutline></>
                        )}
                    </Nav.Item>
                    <Nav.Item className='w-full' to='/watch'>
                        {({isActive})=>(
                            isActive ? 
                            <>
                                <PiYoutubeLogoFill size={32}></PiYoutubeLogoFill>
                                <ActiveBordered/> 
                            </>: <><PiYoutubeLogoLight  size={32}></PiYoutubeLogoLight></>
                        )}
                    </Nav.Item>
                    <Nav.Item className='w-full' to='/explore'>
                        {({isActive})=>(
                            isActive ? 
                            <>
                                <PiCompassFill size={32}></PiCompassFill>
                                <ActiveBordered/> 
                            </>: <><PiCompassLight  size={32}></PiCompassLight></>
                        )}
                    </Nav.Item>                    
                    <Nav.Item className='w-full' to='/hot'>
                        {({isActive})=>(
                            isActive ? 
                            <>
                                <AiFillFire size={32}></AiFillFire>
                                <ActiveBordered/> 
                            </>: <><AiOutlineFire size={32}></AiOutlineFire></>
                        )}
                    </Nav.Item>
                </Nav.Col>
            </Nav>
            <Outlet/>
            <div className='fixed bottom-4 right-4'>
                <Button variant='light' size='lg-icon' rounded='rounded-full' className="shadow-md hover:text-emerald-700 hover:!bg-white">
                    <RiMessengerFill size={24}/>
                </Button>
            </div>
           </>
    );
}


export default Layout;

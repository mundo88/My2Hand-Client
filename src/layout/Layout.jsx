import React from 'react';
import Nav from '../components/Nav';
import { Outlet} from "react-router-dom";
import Button from '../components/Button';
import { RiMessengerFill } from "react-icons/ri";
const Layout = () => {
    return (
           <>
            <Nav className='px-4 shadow-[0px_1px_3px_0px_#00000024]'>
                <Nav.Col>
                    <Nav.Logo/>
                    <Nav.Searchbar width='72'/>
                </Nav.Col>
                <Nav.Col className={'justify-between'}>
                   
                    <Nav.Item className='w-full' to='/shop'>
                        Cửa Hàng
                    </Nav.Item>
                    <Nav.Item className='w-full' to='/newfeed'>
                        Bảng tin
                    </Nav.Item>
                    <Nav.Item className='w-full' to='/watch'>
                        Watch
                    </Nav.Item>
                    <Nav.Item className='w-full' to='/explore'>
                        Khám phá
                    </Nav.Item>                    
                    <Nav.Item className='w-full' to='/hot'>
                        Hot
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

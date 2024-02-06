import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Watch = () => {
    return (
        <div className='h-screen flex flex-col'>
            <nav>
                <div className='py-3 px-8 flex bg-white border-b'>
                    <div className='flex items-center space-x-2'>
                        <p className='font-bold text-2xl text-gray-800 pr-2'>Video</p>
                        <NavLink to={'/watch'} className='px-4 py-2 font-semibold rounded-full bg-gray-200 hover:bg-gray-300 duration-150'>
                            Trang chủ
                        </NavLink>
                        <NavLink to={'/watch/short'} className='px-4 py-2 font-semibold rounded-full bg-gray-200 hover:bg-gray-300 duration-150'>
                            Short
                        </NavLink>
                        <NavLink to={'/watch/short'} className='px-4 py-2 font-semibold rounded-full bg-gray-200 hover:bg-gray-300 duration-150'>
                            Trực tiếp
                        </NavLink>
                        <NavLink to={'/watch/short'} className='px-4 py-2 font-semibold rounded-full bg-gray-200 hover:bg-gray-300 duration-150'>
                            Đang theo dõi
                        </NavLink>
                    </div>
                </div>
            </nav>
            <div className='h-full overflow-y-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Watch;

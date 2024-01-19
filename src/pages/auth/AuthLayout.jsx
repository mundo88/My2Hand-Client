import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import HeaderImg from '../../assets/images/header.jpg'
import Button from '../../components/Button';


export default function AuthLayout() {
    return (
        <div className='min-h-screen h-screen'>
            <div className='h-full grid grid-cols-12'>
                <div className='relative flex items-center justify-center h-full col-span-7'>
                    <div className='absolute inset-0'>
                        <div className='absolute inset-0 bg-black/60 flex items-center justify-center flex-col'>
                            <Link to={'/'} className='absolute p-10 top-0 left-0 z-10'>
                                <span className='font-extrabold text-4xl text-white'>My2Hand.vn</span>
                            </Link>
                            <div className=' max-w-lg'>
                                <h2 className='text-2xl font-medium text-white mb-2'>my2hand.vn</h2>
                                <p className='text-4xl font-medium text-white mb-8'>Kinh doanh dơn giản, dễ dàng bán hàng</p>
                                <Button to={'/sales/register'} className='w-fit' variant='light' size="lg">Tham gia ngay</Button>
                            </div>
                        </div>
                        <img src={HeaderImg} alt="" className='h-full w-full object-cover'/>
                    </div>
                </div>
                <div className="bg-white col-span-5 p-10 flex flex-col justify-center items-center">

                    <Outlet/>
                </div>
            </div>
        </div>

    );
}


import React from "react";
import HeaderImg from '../../assets/images/header.jpg'
import {Button} from '../../components/Button';
import Nav from '../../components/Nav';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";
import { LuHeart } from "react-icons/lu";
import { useEffect } from "react";
import axios from "axios";
import Dropdown from "../../components/Dropdown";

import { GoHeartFill,  GoHomeFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { PiCompassFill, PiMessengerLogoFill, PiVideoFill } from 'react-icons/pi';

const MySwiperSlide =(props,key)=>{
    return (
        <SwiperSlide className="h-full" key={key}>
            <div className="w-full h-full rounded-lg relative overflow-hidden group">
                <div className="w-full h-full">
                    <img src={props.images[0]} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute inset-0 rounded-lg group-hover:opacity-100 bg-black/60 opacity-0 duration-150 flex flex-col justify-between">
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex space-x-2 items-center">
                            <div className="h-8 w-8 overflow-hidden rounded-md">
                                <img className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/146798/screenshots/2691447/helping-hands_1x.png" alt="" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-white text-sm font-medium">Mundo shop</p>
                                <p className="text-gray-200 text-xs">11.2k follow</p>
                            </div>
                        </div>
                        <button className='text-gray-200 hover:text-white duration-150 active:scale-75'>
                            <LuHeart size={24}/>
                        </button>
                    </div>
                    <div className="p-4 relative">
                        <p className="text-sm text-white font-semibold">
                            Áo mùa đông chất liệu vải nhập đài loan
                        </p>
                        <p className="text-sm text-white bg-cyan-600 w-fit py-1 px-2 font-semibold rounded-md mt-1.5">
                            ${props.price}
                        </p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    )
}
const Home = () => {
    const [categories,setCategories] = useState([])
    const [tab,setTab] = useState('foru')
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/categories`).then((response)=>{
            setCategories(response.data.categories);
        })
    },[])
    const [products,setProducts] = useState([])
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/products`).then((response)=>{
            setProducts(response.data.products);
        })
    },[])
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
                                <h2 className='text-2xl font-medium text-white mb-2'>Hey.</h2>
                                <p className='text-4xl font-medium text-white mb-8'>Trao đổi món hàng đầu tiên của bạn chỉ trong vài bước!</p>
                                <Button to={'/sales/register'} className='w-fit' variant='light' size="lg">Trở thành người bán</Button>
                            </div>
                        </div>
                        <img src={HeaderImg} alt="" className='h-full w-full object-cover'/>
                    </div>
                </div>
                <div className="bg-white col-span-5 p-10 flex flex-col">
                    <Nav>
                        <Dropdown >
                            <Dropdown.Button>
                                <Nav.MiniBarButton/>
                            </Dropdown.Button>
                            <Dropdown.DropdownContainer postion={'bottom-right'} className='mt-2'>
                                <Dropdown.Item  to={'/newfeed'}>
                                    <Dropdown.ItemIcon>
                                        <GoHomeFill size={20} />
                                    </Dropdown.ItemIcon>
                                    <Dropdown.ItemText>
                                        Bảng tin
                                    </Dropdown.ItemText>
                                </Dropdown.Item>
                                <Dropdown.Item to={'/explore'}>
                                    <Dropdown.ItemIcon>
                                        <PiCompassFill size={20} />
                                    </Dropdown.ItemIcon>
                                    <Dropdown.ItemText>
                                        Khám phá
                                    </Dropdown.ItemText>
                                </Dropdown.Item>
                                <Dropdown.Item to={'/watch'}>
                                    <Dropdown.ItemIcon>
                                        <PiVideoFill size={20} />
                                    </Dropdown.ItemIcon>
                                    <Dropdown.ItemText>
                                        Video
                                    </Dropdown.ItemText>
                                </Dropdown.Item>
                                <Dropdown.Item to={'/shop'}>
                                    <Dropdown.ItemIcon>
                                        <HiShoppingBag size={20} />
                                    </Dropdown.ItemIcon>
                                    <Dropdown.ItemText>
                                        Mua sắm
                                    </Dropdown.ItemText>
                                </Dropdown.Item>
                                <Dropdown.Item to={'/message'}>
                                    <Dropdown.ItemIcon>
                                        <PiMessengerLogoFill size={20} />
                                    </Dropdown.ItemIcon>
                                    <Dropdown.ItemText>
                                        Trò chuyện
                                    </Dropdown.ItemText>
                                </Dropdown.Item>
                                <Dropdown.Item to={'/saved'}>
                                    <Dropdown.ItemIcon>
                                        <GoHeartFill size={20} />
                                    </Dropdown.ItemIcon>
                                    <Dropdown.ItemText>
                                        Đã lưu
                                    </Dropdown.ItemText>
                                </Dropdown.Item>
                            </Dropdown.DropdownContainer>
                        </Dropdown>  
                        
                    </Nav>
                    <div className='mt-16'>
                        <div>
                            <p className='text-4xl font-semibold'>Let's Enjoy</p>
                            <p className='text-4xl font-semibold'>Your Moment's !!</p>
                        </div>
                        <div className='relative w-full mt-8'>
                            <input type="text" name="" id="" className={'h-14 w-full rounded-full bg-gray-100 outline-none text-md px-6'} placeholder={'Tìm kiếm gì đó...'}/>
                            <div className='absolute right-6 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer'>
                                <IoSearch size={24}></IoSearch>
                            </div>
                        </div>
                        <div className='mt-8 flex justify-between space-x-4 w-full'>
                            <Swiper 
                                className="w-full"
                                spaceBetween={10}
                                slidesPerView={9.3}
                                slidesPerGroup={3}
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.button-next',
                                    prevEl: '.button-prev',
                                }}>
                                {categories.map((category,index) =>
                                <SwiperSlide>
                                    <Link to={category.id} className='flex flex-col space-y-2 group' key={index}>
                                        <div className='w-full h-auto aspect-square overflow-hidden rounded-lg'>
                                            <img src={category.image} alt=""  className='w-full h-full object-cover group-hover:scale-110 duration-150'/>
                                        </div>
                                        <span className='text-sm text-center group-hover:text-cyan-700 duration-150 truncate'>{category.name}</span>
                                    </Link>
                                </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                    <div className='mt-16 flex flex-col flex-1'>
                        <div className='flex items-center space-x-8 border-b border-b-gray-100'>
                            <button onClick={ ()=>setTab('foru') } className={`py-2 flex items-center border-b-2 duration-150 translate-y-0.5 ${tab==='foru' ? 'font-semibold border-cyan-700 text-cyan-700':'border-transparent font-semibold text-gray-600'}`} >
                                <span>Dành cho bạn</span>
                            </button>
                            <button onClick={ ()=>setTab('all') } className={`py-2 flex items-center border-b-2 duration-150 translate-y-0.5 ${tab==='all' ? 'font-semibold border-cyan-700 text-cyan-700':'border-transparent font-semibold text-gray-600'}`} >
                                <span>Tất cả</span>
                            </button>
                            <button onClick={ ()=>setTab('selling') } className={`py-2 flex items-center border-b-2 duration-150 translate-y-0.5 ${tab==='selling' ? 'font-semibold border-cyan-700 text-cyan-700':'border-transparent font-semibold text-gray-600'}`} >
                                <span>Bán chạy</span>
                            </button>
                            <button onClick={ ()=>setTab('new')}  className={`py-2 flex items-center border-b-2 duration-150 translate-y-0.5 ${tab==='new' ? 'font-semibold border-cyan-700 text-cyan-700':'border-transparent font-semibold text-gray-600'}`} >
                                <span>Sản phẩm mới</span>
                            </button>
                        </div>
                        <div className="mt-6 flex-1 ">
                            <Swiper 
                            className="mySwiper w-full relative h-full"
                            spaceBetween={24}
                            slidesPerView={3.3}>
                                {products.map((product,index)=>
                                    MySwiperSlide(product,index)
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;

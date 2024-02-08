import React, { useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Navigation } from 'swiper/modules';

import { FiPlus,FiChevronRight ,FiChevronLeft  } from "react-icons/fi";
import PostCard, {StoryCard,CreatePostCard} from "../../components/Card";
import axios from "axios";
import ProductlModal from '../../components/ProductlModal'; 


import { FaPlus } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsPatchCheckFill } from "react-icons/bs";

import { RiUserSharedLine } from "react-icons/ri";
import Avatar from '../../components/Avatar';

const Sidebar =()=>{
    return (
        <div className="min-w-80 flex flex-col pr-6 bg-white py-6 h-screen px-6">
            <div className='space-y-4 pb-4'>
                <p className='text-lg mb-2 bg-gradient-to-r from-violet-700 via-cyan-600 to-blue-500 bg-clip-text text-transparent font-bold'>Trending Hastag</p>
                <div className='flex flex-col'>
                    <Link className='py-2 space-y-1 flex flex-col'>
                        <span className='text-gray-800 text-md hover:text-cyan-700'>#art</span>
                        <span className='text-gray-600 text-sm'>400 post</span>
                    </Link>
                    <Link className='py-2 space-y-1 flex flex-col'>
                        <span className='text-gray-800 text-md hover:text-cyan-700'>#illustration</span>
                        <span className='text-gray-600 text-sm'>370 post</span>
                    </Link>
                    <Link className='py-2 space-y-1 flex flex-col'>
                        <span className='text-gray-800 text-md hover:text-cyan-700'>#painingtimelapse</span>
                        <span className='text-gray-600 text-sm'>352 post</span>
                    </Link>
                    <Link className='py-2 space-y-1 flex flex-col'>
                        <span className='text-gray-800 text-md hover:text-cyan-700'>#andscapepaintings</span>
                        <span className='text-gray-600 text-sm'>157 post</span>
                    </Link>
                    <Link className='py-2 space-y-1 flex flex-col'>
                        <span className='text-gray-800 text-md hover:text-cyan-700'>#acrylycoaintings</span>
                        <span className='text-gray-600 text-sm'>112 post</span>
                    </Link>
                    <Link className='py-2 space-y-1 flex flex-col'>
                        <span className='text-gray-800 text-md hover:text-cyan-700'>#HowToPaint</span>
                        <span className='text-gray-600 text-sm'>76 post</span>
                    </Link>
                    <Link className='py-2 space-y-1 flex flex-col'>
                        <span className='text-gray-800 text-md hover:text-cyan-700'>#paperflower</span>
                        <span className='text-gray-600 text-sm'>50 post</span>
                    </Link>
                </div>
            </div>
            <div className=''>
                <p className='text-lg mb-8 bg-gradient-to-r from-violet-700 via-cyan-600 to-blue-500 bg-clip-text text-transparent font-bold'>Shop của bạn</p>
                <div  className='flex flex-col px-2 pb-2'>
                    <div className='flex gap-2 items-center'>
                        <Avatar></Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-gray-800 font-semibold">Minh Phùng</p>
                                <span className='text-cyan-700'>
                                    <BsPatchCheckFill size={16} />
                                </span>
                            </div>
                            <p className='text-gray-600 text-sm'>Developer & Designer</p>
                        </div>
                    </div>
                </div>
            
                <div className='px-2 flex items-center py-2 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                    <div className='w-9 h-9 overflow-hidden bg-gray-200 text-gray-800 flex items-center justify-center rounded-full'>
                        <RiUserSharedLine size={20}></RiUserSharedLine>
                    </div>
                    <span className='text-gray-800'>Truy cập shop</span>
                </div>                        
                <div className='px-2 flex items-center py-2 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                    <div className='w-9 h-9 overflow-hidden bg-gray-200 text-gray-800 flex items-center justify-center rounded-full'>
                        <FaPlus  size={20}></FaPlus>
                    </div>
                    <span className='text-gray-800'>Thêm sản phẩm</span>
                </div>                        
                <div className='px-2 flex items-center py-2 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                    <div className='w-9 h-9 overflow-hidden bg-gray-200 text-gray-800 flex items-center justify-center rounded-full'>
                        <HiOutlineSpeakerphone size={20}></HiOutlineSpeakerphone>
                    </div>
                    <span className='text-gray-800'>Tạo quảng cáo</span>
                </div>                        
            </div>    
        </div>         
    )
}


const Newfeed = () => {
    const [tab,setTab] = useState('trending')
    const [stories,setStories] = useState(null)
    const [modal,setModal] = useState(false)
    const [productId,setProductId] = useState(null)

    const handleCloseModal =()=>{
        setModal(false)
    }
    const handleOpenModal =(productId=null)=>{
        setModal(true)
        setProductId(productId)
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/stories`).then((response) => {
            setStories(response.data.data);
        });
    },[]);
    
    const [posts,setpost] = useState(0)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/posts`).then((response) => {
            setpost(response.data.posts);
        });
    },[]);

    return (
        <div className='flex justify-between items-start w-full'>
            <div className='max-w-2xl py-6 mx-auto'>
                    <div className='flex-col gap-6 flex'>
                        <CreatePostCard/>
                        <div className=' flex flex-col'>
                            <div className='w-full flex border-b border-b-gray-300'>
                                <Link onClick={()=>setTab('trending')} className={`text-lg font-medium translate-y-0.5 pb-4 pr-4 border-b-[3px] duration-150 ${tab==='trending'? 'border-cyan-600 text-gray-800':'border-transparent text-gray-600'}`}>Trending</Link>
                                <Link onClick={()=>setTab('following')} className={`text-lg font-medium translate-y-0.5 pb-4 pr-4 border-b-[3px] duration-150 ${tab==='following'? 'border-cyan-600 text-gray-800':'border-transparent text-gray-600'}`}>Following</Link>
                            </div>
                            <div className='mt-2 relative'>
                
                                <Swiper
                                    slidesPerView={4.3} 
                                    spaceBetween={10} 
                                    slidesPerGroup={4}
                                    className='w-full !py-2'
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: '.button-next',
                                        prevEl: '.button-prev',
                                    }}>
                                    <SwiperSlide>
                                        <div className='h-56 card overflow-hidden relative group'>
                                            <div className='absolute inset-0 rounded-lg'>
                                                <img src="https://phanmemmkt.vn/wp-content/uploads/2022/11/avatar-tet-2023-cute-31.jpg" className='object-cover w-full h-full group-hover:scale-110 duration-150' alt="" />              
                                            </div>
                                            <div className='w-full h-full bg-black/60 relative'>
                                                <div className='flex flex-col justify-end h-full'>
                                                    <div className='w-full  bg-white flex flex-col items-center pb-4'>
                                                        <button className='min-w-10 min-h-10 w-10 h-10 flex justify-center items-center border-4 border-white -translate-y-1/2 rounded-full text-white bg-cyan-600'>
                                                            <FiPlus size={24}/>
                                                        </button>
                                                        <p className='text-sm text-gray-800'>Tạo tin</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                         
                                    {stories ? 
                                    stories.map((story,index) =>(
                                        <SwiperSlide key={index}>
                                            <StoryCard props={story}/>   
                                        </SwiperSlide>
                                    ))
                                    :
                                    <>
                                        <SwiperSlide>
                                            <StoryCard.Loader/>   
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <StoryCard.Loader/>   
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <StoryCard.Loader/>   
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <StoryCard.Loader/>   
                                        </SwiperSlide>
                                    </>
                                    }
                                </Swiper>
                                <div >
                                    <button  className='button-next w-10 h-10 bg-white shadow-md text-gray-600 rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-5 z-10 active:scale-95 hover:bg-gray-100 duration-150 [&.swiper-button-disabled]:opacity-0'>
                                        <FiChevronRight size={24}></FiChevronRight>
                                    </button>
                                    <button  className='button-prev w-10 h-10 bg-white shadow-md text-gray-600 rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-5 z-10 active:scale-95 hover:bg-gray-100 duration-150 [&.swiper-button-disabled]:opacity-0'>
                                        <FiChevronLeft size={24}></FiChevronLeft>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-6 flex-col'>
                            {posts ?
                                posts.map(post => (
                                    <PostCard post={post} handlePostDetail={handleOpenModal}/> 
                                )) :
                                <>
                                    <PostCard.Loader/> 
                                    <PostCard.Loader/> 
                                </>
                            }        
                        </div>
                    </div>
            </div>
            {/* <div className='sticky top-0 flex h-full'>
                <Sidebar></Sidebar>          
            </div>      */}
            {modal && <ProductlModal productId={productId} show={modal} onClose={handleCloseModal}></ProductlModal>}
        </div>
    );
}

export default Newfeed;

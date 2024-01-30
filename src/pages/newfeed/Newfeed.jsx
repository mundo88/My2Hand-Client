import React, { useEffect, useRef, useState } from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import Button from '../../components/Button';


import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiUserSharedLine } from "react-icons/ri";

import 'swiper/css';

import { Navigation } from 'swiper/modules';

import { FiPlus,FiChevronRight ,FiChevronLeft  } from "react-icons/fi";
import PostCard, {StoryCard,CreatePostCard} from "../../components/Card";
import axios from "axios";
import ProductlModal from '../../components/ProductlModal'; 
import Avatar from '../../components/Avatar';

const Sidebar = () => {
    return (
        <div className='min-w-80 py-6 main-h overflow-auto scroll min-h-screen'>
            <div className='w-full flex flex-col'>
                <div className='flex flex-col mx-4 px-2 pb-2'>
                    <div className='flex gap-2 items-center'>
                        <Avatar></Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-gray-800 font-semibold">Minh Phùng</p>
                                <span className='text-emerald-700'>
                                    <BsPatchCheckFill size={16} />
                                </span>
                            </div>
                            <p className='text-gray-600 text-sm'>Developer & Designer</p>
                        </div>
                    </div>
                </div>
                <div className='mx-4'>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden'>
                            <div className='w-full h-full bg-[url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)]' style={{backgroundPosition:'0 -296px'}}></div>
                        </div>
                        <span className='text-gray-800'>Bạn bè</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <img src={'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png'} alt="" />
                        <span className='text-gray-800'>Trung tâm quảng cáo</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <img src={'https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png'} alt="" />
                        <span className='text-gray-800'>Bảng feed</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden'>
                            <div className='w-full h-full bg-[url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)]' style={{backgroundPosition:'0 -37px'}}></div>
                        </div>
                        <span className='text-gray-800'>Nhóm</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden'>
                            <div className='w-full h-full bg-[url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)]' style={{backgroundPosition:'0 -407px'}}></div>
                        </div>
                        <span className='text-gray-800'>Marketplace</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <img src={'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/UcI9fM2oUUV.png'} alt="" />
                        <span className='text-gray-800'>Bảng điều khiển chuyên nghiệp</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden'>
                            <div className='w-full h-full bg-[url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)]' style={{backgroundPosition:'0 -185px'}}></div>
                        </div>
                        <span className='text-gray-800'>Đã lưu</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden'>
                            <div className='w-full h-full bg-[url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/vTDQ3deAsEh.png)]' style={{backgroundPosition:'0 -37px'}}></div>
                        </div>
                        <span className='text-gray-800'>Sự kiện</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <img src={'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png'} alt="" />
                        <span className='text-gray-800'>Yêu thích</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden'>
                            <div className='w-full h-full bg-[url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)]' style={{backgroundPosition:'0 -518px'}}></div>
                        </div>
                        <span className='text-gray-800'>Video</span>
                    </div>
                    <div className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3'>
                        <div className='w-9 h-9 overflow-hidden'>
                            <div className='w-full h-full bg-[url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png)]' style={{backgroundPosition:'0 -370px'}}></div>
                        </div>
                        <span className='text-gray-800'>Live</span>
                    </div>
                </div>
            </div>
        </div>
    );
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
        <>
            <div className='h-full relative grid grid-cols-12 bg-gray-100 items-start min-h-screen'>
                <div className='col-span-4 sticky top-14 flex'>
                    <Sidebar/>
                </div>
                <div className='col-span-4 py-6'>
                    <div className='flex-col gap-6 flex'>
                        <CreatePostCard/>
                        <div className=' flex flex-col'>
                            <div className='w-full flex border-b border-b-gray-300'>
                                <Link onClick={()=>setTab('trending')} className={`text-lg font-medium translate-y-0.5 pb-4 pr-4 border-b-[3px] duration-150 ${tab==='trending'? 'border-emerald-600 text-gray-800':'border-transparent text-gray-600'}`}>Trending</Link>
                                <Link onClick={()=>setTab('following')} className={`text-lg font-medium translate-y-0.5 pb-4 pr-4 border-b-[3px] duration-150 ${tab==='following'? 'border-emerald-600 text-gray-800':'border-transparent text-gray-600'}`}>Following</Link>
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
                                                        <button className='min-w-10 min-h-10 w-10 h-10 flex justify-center items-center border-4 border-white -translate-y-1/2 rounded-full text-white bg-emerald-600'>
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
                <div className='col-span-4 py-6 flex justify-end items-end sticky top-14'>
                    <div className="w-80 flex flex-col pr-6">
                        <div className='space-y-4 pb-4'>
                            <p className='text-lg mb-2 bg-gradient-to-r from-violet-700 via-emerald-600 to-blue-500 bg-clip-text text-transparent font-bold'>Trending Hastag</p>
                            <div className='flex flex-col'>
                                <Link className='py-2 space-y-1 flex flex-col'>
                                    <span className='text-gray-800 text-md hover:text-emerald-700'>#art</span>
                                    <span className='text-gray-600 text-sm'>400 post</span>
                                </Link>
                                <Link className='py-2 space-y-1 flex flex-col'>
                                    <span className='text-gray-800 text-md hover:text-emerald-700'>#illustration</span>
                                    <span className='text-gray-600 text-sm'>370 post</span>
                                </Link>
                                <Link className='py-2 space-y-1 flex flex-col'>
                                    <span className='text-gray-800 text-md hover:text-emerald-700'>#painingtimelapse</span>
                                    <span className='text-gray-600 text-sm'>352 post</span>
                                </Link>
                                <Link className='py-2 space-y-1 flex flex-col'>
                                    <span className='text-gray-800 text-md hover:text-emerald-700'>#andscapepaintings</span>
                                    <span className='text-gray-600 text-sm'>157 post</span>
                                </Link>
                                <Link className='py-2 space-y-1 flex flex-col'>
                                    <span className='text-gray-800 text-md hover:text-emerald-700'>#acrylycoaintings</span>
                                    <span className='text-gray-600 text-sm'>112 post</span>
                                </Link>
                                <Link className='py-2 space-y-1 flex flex-col'>
                                    <span className='text-gray-800 text-md hover:text-emerald-700'>#HowToPaint</span>
                                    <span className='text-gray-600 text-sm'>76 post</span>
                                </Link>
                                <Link className='py-2 space-y-1 flex flex-col'>
                                    <span className='text-gray-800 text-md hover:text-emerald-700'>#paperflower</span>
                                    <span className='text-gray-600 text-sm'>50 post</span>
                                </Link>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-lg mb-2 bg-gradient-to-r from-violet-700 via-emerald-600 to-blue-500 bg-clip-text text-transparent font-bold'>Shop của bạn</p>
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
                </div>
            </div>
            {modal && <ProductlModal productId={productId} show={modal} onClose={handleCloseModal}></ProductlModal>}
        </>
    );
}

export default Newfeed;

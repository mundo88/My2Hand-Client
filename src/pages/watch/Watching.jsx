import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { BsPatchCheckFill } from 'react-icons/bs';
import Button from '../../components/Button';
import { BiLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { GoBookmark } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Product from '../../components/Product';
import ProductlModal from '../../components/ProductlModal';
import { FaStar } from 'react-icons/fa';
import { FiChevronRight,FiChevronLeft } from 'react-icons/fi';
import { IoIosArrowUp,IoIosArrowDown, IoMdSend } from "react-icons/io";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { WatchCard } from '../../components/Card';


const Watching = () => {
    const video_id = useParams()
    const [video,setVideo] = useState(0)
    const [products,setProducts] = useState(null)
    const [modal,setModal] = useState(false)
    const [productId,setProductId] = useState(null)
    const [showProduct,setShowProduct] = useState(false)
    const [videos,setVideos] = useState(null)
    const [users,setUsers] = useState(null)

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/youtube/playlist`).then((response)=>{
            setVideos(response.data.youtube);
        })
    },[])
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/users`).then((response)=>{
            setUsers(response.data.users);
        })
    },[])
    const handleCloseModal =()=>{
        setModal(false)
    }
    const handleOpenModal =(productId=null)=>{
        setModal(true)
        setProductId(productId)
    }
    const video_api = `${process.env.REACT_APP_API_ENDPOINT}api/video`
    const product_api = `${process.env.REACT_APP_API_ENDPOINT}api/products`
    useEffect(() => {
        axios({
            url:video_api,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({video_id:video_id.str}),
        }).then(response => {
            setVideo(response.data)
        })
        axios({
            url:product_api,
            method: 'GET',
        }).then(response => {
            setProducts(response.data.products)
        })
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [video_id]);
    return (
        <>
            <div className='w-full grid grid-cols-12 py-8 px-28 gap-6 '>
                <div className='col-span-9'>
                    <div>
                        <div className='w-full h-auto aspect-video bg-neutral-900 rounded-md overflow-hidden relative'>
                            <ReactPlayer url={video.url} playing={true} width={'100%'} height={'100%'} controls></ReactPlayer>
                        </div>
                        <div className='py-4 text-xl font-semibold'>
                            <h1 className='text-gray-800'>{video.title}</h1>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                <span>{new Intl.NumberFormat( 'vi-Vn', { maximumFractionDigits: 1}).format(video.views)} lượt xem</span>
                                <span className="w-[3px] h-[3px] bg-gray-500 rounded-full"></span>
                                <span>{video.publish_date}</span>
                            </div>
                        </div>
                        <div className='rounded-md w-full bg-gray-50 relative p-4 mb-4'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div className='flex gap-2 items-center'>
                                        <Avatar online={true}></Avatar>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-gray-800 font-semibold">{video.author}</p>
                                                <span className='text-emerald-700'>
                                                    <BsPatchCheckFill size={16} />
                                                </span>
                                            </div>
                                            <p className='text-gray-600 text-sm'>284 N người theo dõi</p>
                                        </div>
                                    </div>
                                    <Button rounded={'rounded-full'} variant={'black'}>Theo dõi</Button>
                                </div>
                                <div className='flex gap-1'>
                                    <Button rounded="rounded-full">
                                        <BiLike size={24}></BiLike>
                                        <span>299 N</span>
                                    </Button>
                                    <Button rounded="rounded-full">
                                        <PiShareFat size={24}></PiShareFat>
                                        <span>Chia sẻ</span>
                                    </Button>
                                    <Button rounded="rounded-full">
                                        <GoBookmark size={24}></GoBookmark>
                                        <span>Lưu vào xem sau</span>
                                    </Button>
                                    <Button size={'md-icon'} rounded="rounded-full">
                                        <HiOutlineDotsHorizontal size={24}></HiOutlineDotsHorizontal>
                                    </Button>
                                </div>
                            </div>
                            <div className='px-2 font-semibold text-gray-800 text-sm pt-4 pb-2'>
                                <button className='flex gap-1 items-center' onClick={()=>setShowProduct(!showProduct)}>
                                    <span>Sản phẩm trong video</span>
                                    {showProduct ? <IoIosArrowUp size={16}></IoIosArrowUp>: <IoIosArrowDown size={16}></IoIosArrowDown>}
                                </button>
                            </div>
                            <div className={showProduct?'block':'hidden'}>
                                <Swiper 
                                    className="mySwiper w-full relative h-full !p-2"
                                    spaceBetween={16}
                                    slidesPerView={6.3}
                                    slidesPerGroup={6}
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: '.button-next',
                                        prevEl: '.button-prev',
                                    }}>
                                    {products&&products.map(product => 
                                        <SwiperSlide key={product.id} onClick={()=>handleOpenModal(product.id)}>
                                            <Product className='flex flex-col border rounded-lg group hover:border-emerald-700 duration-150 overflow-hidden'>
                                                <Product.Thumbnail>
                                                    <img src={product.images[0]} alt="" className='w-full h-full object-contain'/>
                                                </Product.Thumbnail>
                                                <Product.Content>
                                                    <div className='text-xs text-gray-600 font-semibold'>{product.category.name}</div>
                                                    <div className='text-gray-800 text-sm font-semibold duration-150 mt-0.5 truncate'>{product.title}</div>
                                                    <div className='flex items-center justify-between mt-3'>
                                                        <span className='font-semibold text-emerald-700 text-md'>${product.price}</span>
                                                        <div className='flex items-center gap-1'>
                                                            <span className='text-yellow-500'>
                                                                <FaStar size={12}/>
                                                            </span>
                                                            <span className='text-xs text-gray-600'>293</span>
                                                            <span className='text-xs text-gray-600'>|</span>
                                                            <span className='text-xs text-gray-600'>2356</span>
                                                        </div>
                                                    </div>
                                                    <Product.Sold sold='32' stock={product.stock || 999}/>
                                                </Product.Content>
                                            </Product>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                                <Button variant='light' className='button-next [&.swiper-button-disabled]:opacity-0 absolute right-2 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='rounded-full'>
                                    <FiChevronRight size={24}></FiChevronRight>
                                </Button>
                                <Button variant='light' className='button-prev [&.swiper-button-disabled]:opacity-0 absolute left-2 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='rounded-full'>
                                    <FiChevronLeft size={24}></FiChevronLeft>
                                </Button>
                            </div>
                        </div>
                        <div className='my-4'>
                            <div className='text-gray-800 text-xl font-semibold'>255 bình luận</div>
                        </div>   
                        <div className="w-full flex items-center gap-2">
                            <Avatar size={'lg'} ></Avatar>
                            <div className="flex items-center w-full h-12 rounded-full bg-white">
                                <input type="text" className="h-full w-full bg-transparent px-4 outline-none" placeholder="Nhập bình luận của bạn về bài viết" />
                            </div>
                            <Button variant='light' size='lg-icon' rounded='rounded-full' >
                                <MdOutlineInsertEmoticon size={24}/>
                            </Button>
                            <Button variant='light' size='lg-icon' rounded='rounded-full'>
                                <IoMdSend size={24} className='ml-1'/>
                            </Button>
                        </div>
                        <div className="w-full flex flex-col gap-6 mt-6">
                            {users && users.map(user => (
                                <div className='flex gap-2 items-start relative'>
                                    <Avatar img={user.image}></Avatar>
                                    <div className='flex flex-col gap-1 rounded-xl '>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-sm font-semibold text-gray-800'>@{user.username}</span>
                                        </div>
                                        <p className='text-black text-md'>Giọng Quân kiểu trầm Giọng Quân kiểu trầm Giọng Quân kiểu trầm ấm áp còn giọng Phúc kiểu trong trẻo ý mê lắm lun</p>
                                        <div className="flex gap-4 mt-1">
                                            <span className='text-sm text-gray-500'>{'9 tháng trước'}</span>
                                            <button className='text-sm text-gray-800 font-semibold hover:text-emerald-700 duration-150 hover:underline'>366 Thích</button>
                                            <button className='text-sm text-gray-800 font-semibold hover:text-emerald-700 duration-150 hover:underline'>7 Phản hồi</button>
                                            <button className='text-sm text-gray-800 font-semibold hover:text-emerald-700 duration-150 hover:underline'>21 Chia sẻ</button>
                                        </div>
                                    </div>
                                </div>           
                            ))}
                        </div> 
                    </div>
                </div>
                <div className='col-span-3 flex flex-col gap-2'>
                    {videos ? videos.map(video =>(
                        <WatchCard className='flex items-center' videoId={video.id}>
                            <WatchCard.Thumbnail thumbnail={video.thumbnail}/>
                            <WatchCard.Content author={video.author} title={video.title} publish_date={video.publish_date} views={video.views}/>
                        </WatchCard>
                        )):
                        <>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                            <WatchCard.Loader/>
                        </>
                    }
                </div>
            </div>
            {modal && <ProductlModal productId={productId} show={modal} onClose={handleCloseModal}></ProductlModal>}
        </>
    );
}

export default Watching;

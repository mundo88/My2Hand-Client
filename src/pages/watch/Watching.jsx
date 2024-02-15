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
import { IoIosArrowDown, IoMdSend } from "react-icons/io";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { WatchCard } from '../../components/Card';



const Watching = () => {
    const video_id = useParams()
    const [video,setVideo] = useState(0)
    const [products,setProducts] = useState(null)
    const [modal,setModal] = useState(false)
    const [productId,setProductId] = useState(null)
    const [fullDes,setfullDes] = useState(false)
    const [videos,setVideos] = useState(null)
    useEffect(()=>{
        axios.get(`/api/videos`).then((response)=>{
            setVideos(response.data.data);
        })
    },[])

    const handleCloseModal =()=>{
        setModal(false)
    }
    const handleOpenModal =(productId=null)=>{
        setModal(true)
        setProductId(productId)
    }
    const video_api = `/api/video`
    const product_api = `/api/products`
    useEffect(() => {
        axios({
            url:video_api,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({video_id:video_id.str}),
        }).then(response => {
            console.log(response.data)
            setVideo(response.data)
        })
        axios({
            url:product_api,
            method: 'GET',
        }).then(response => {
            setProducts(response.data.products)
        })
        window.scrollTo(0, 0)
        return setVideo(null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [video_id]);
    return (
        <>
            <div className='w-full grid grid-cols-12 py-8 px-8 gap-6 '>
                <div className='col-span-9'>

                    {video?<div>
                        <div className='w-full h-auto aspect-video bg-neutral-900 rounded-md overflow-hidden relative'>
                            <ReactPlayer url={video.url} playing={true} width={'100%'} height={'100%'} controls></ReactPlayer>
                        </div>
                        <div className='py-4 text-xl font-semibold'>
                            <h1 className='text-gray-800'>{video.title}</h1>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-4 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <Avatar online={true} img={video&&video.author.photo_picture}></Avatar>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-gray-800 font-semibold">{video&&video.author.name}</p>
                                            <span className='text-cyan-700'>
                                                <BsPatchCheckFill size={16} />
                                            </span>
                                        </div>
                                        <p className='text-gray-600 text-sm'>{video&&new Intl.NumberFormat( 'vi-Vn', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short"}).format(video.author.followCount)} người theo dõi</p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                <Button rounded={'full'} size={'sm'} variant={'black'}>Theo dõi</Button>
                                <Button rounded={'full'} size={'sm'} variant={'outline'}>Xem trang</Button>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <Button variant='light' rounded="full">
                                    <BiLike size={24}></BiLike>
                                    <span>{video&&new Intl.NumberFormat( 'vi-Vn', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short"}).format(video.likeCount)}</span>
                                </Button>
                                <Button variant='light' rounded="full">
                                    <PiShareFat size={24}></PiShareFat>
                                    <span>Chia sẻ</span>
                                </Button>
                                <Button variant='light' rounded="full">
                                    <GoBookmark size={24}></GoBookmark>
                                    <span>Lưu vào xem sau</span>
                                </Button>
                                <Button size={'md-icon'} variant='light' rounded="full">
                                    <HiOutlineDotsHorizontal size={24}></HiOutlineDotsHorizontal>
                                </Button>
                            </div>
                        </div>
                        <div className='rounded-md w-full bg-gray-200 relative p-4 my-4'>
                            <div className="text-sm text-gray-800 flex items-center gap-1 px-2 font-semibold">
                                <span>{new Intl.NumberFormat( 'vi-Vn', { maximumFractionDigits: 1}).format(video.views)} lượt xem</span>
                                <span className="w-[3px] h-[3px] bg-gray-500 rounded-full"></span>
                                <span>{video.publish_date}</span>
                            </div>
                            {!fullDes ?
                                <div className='px-2 mt-2 text-sm text-gray-800 flex'>
                                    <span className='whitespace-nowrap relative'>
                                        {video.description&& video.description.slice(0,66)}
                                        <span className='absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-gray-200 to-transparent'></span>
                                    </span>
                                    <button className='font-semibold ml-1 hover:text-cyan-700 duration-150' onClick={()=>{setfullDes(true)}}>...xem thêm</button>
                                </div>
                                :
                                <div >
                                    <div className='p-2 text-sm text-gray-800 flex'>
                                        <span className='whitespace-pre-wrap relative'>
                                            {video.description}
                                        </span>
                                    </div>
                                    <div className='px-2 font-semibold text-gray-800 text-sm pt-4'>
                                        <span>Sản phẩm trong video</span>
                                    </div>
                                    <div className='relative'>
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
                                                    <Product className='flex flex-col border rounded-lg group hover:border-cyan-700 duration-150 overflow-hidden'>
                                                        <Product.Thumbnail>
                                                            <img src={product.images[0]} alt="" className='w-full h-full object-contain'/>
                                                        </Product.Thumbnail>
                                                        <Product.Content>
                                                            <div className='text-xs text-gray-600 font-semibold'>{product.category.name}</div>
                                                            <div className='text-gray-800 text-sm font-semibold duration-150 mt-0.5 truncate'>{product.title}</div>
                                                            <div className='flex items-center justify-between mt-3'>
                                                                <span className='font-semibold text-cyan-700 text-md'>${product.price}</span>
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
                                        <Button variant='light' className='button-next [&.swiper-button-disabled]:opacity-0 absolute right-2 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='full'>
                                            <FiChevronRight size={24}></FiChevronRight>
                                        </Button>
                                        <Button variant='light' className='button-prev [&.swiper-button-disabled]:opacity-0 absolute left-2 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='full'>
                                            <FiChevronLeft size={24}></FiChevronLeft>
                                        </Button>
                                    </div>
                                    <Button variant='text' onClick={()=>{setfullDes(false)}}>Ẩn bớt</Button>
                                </div>
                            }
                        </div>
                        <div className='my-4'>
                            <div className='text-gray-800 text-xl font-semibold'>{video.commentCount} bình luận</div>
                        </div>   
                        <div className="w-full flex items-center gap-2 mb-8">
                            <Avatar size={'lg'} ></Avatar>
                            <div className="flex items-center w-full h-12 rounded-full bg-gray-200">
                                <input type="text" className="h-full w-full bg-transparent px-4 outline-none" placeholder="Nhập bình luận của bạn về bài viết" />
                            </div>
                            <Button variant='light' size='lg-icon' rounded='full' >
                                <MdOutlineInsertEmoticon size={24}/>
                            </Button>
                            <Button variant='light' size='lg-icon' rounded='full'>
                                <IoMdSend size={24} className='ml-1'/>
                            </Button>
                        </div>
                        <div className="w-full flex flex-col gap-6 mt-6">
                            {video.comments && video.comments.map(comment => (
                                <div className='flex gap-2 items-start relative'>
                                    <Avatar img={comment.authorProfileImageUrl}></Avatar>
                                    <div className='flex flex-col gap-1 rounded-xl '>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-sm font-semibold text-gray-800'>{comment.authorDisplayName}</span>
                                        </div>
                                        <p className='text-black text-md'>{comment.textDisplay}</p>
                                        <div className="flex gap-4 mt-1">
                                            <span className='text-sm text-gray-500'>{'9 tháng trước'}</span>
                                            <button className='text-sm text-gray-800 font-semibold hover:text-cyan-700 duration-150 hover:underline'>{comment.likeCount !==0 &&comment.likeCount} Thích</button>
                                            <button className='text-sm text-gray-800 font-semibold hover:text-cyan-700 duration-150 hover:underline'>Phản hồi</button>
                                            <button className='text-sm text-gray-800 font-semibold hover:text-cyan-700 duration-150 hover:underline'>Chia sẻ</button>
                                        </div>
                                        {comment.totalReplyCount!==0 && 
                                            <Button className='w-fit mt-2' rounded='full'>
                                                <span>{comment.totalReplyCount} phản hồi</span>
                                                <IoIosArrowDown size={16}></IoIosArrowDown>
                                            </Button>
                                        }
                                    </div>
                                </div>           
                            ))}
                        </div> 
                    </div>
                    :
                    <>
                        <div className='w-full h-auto aspect-video bg-gray-200 animate-pulse rounded-md overflow-hidden relative'>
                        </div>
                        <div className='my-4 text-xl font-semibold h-7 w-96 bg-gray-200 animate-pulse rounded-full'></div>
                            <div className='flex justify-between animate-pulse'>
                                <div className='flex gap-4 items-center'>
                                    <div className='flex gap-2 items-center'>
                                        <div className='w-10 h-10 bg-gray-200 animate-pulse rounded-full'></div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-gray-800 font-semibold w-24 h-5 rounded-full bg-gray-200"></p>
                                                <span className='w-5 h-5 bg-gray-200 rounded-full'>
                                                </span>
                                            </div>
                                            <p className="text-gray-800 font-semibold w-32 h-5 rounded-full bg-gray-200 mt-2"></p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className='w-16 h-8 bg-gray-200 animate-pulse rounded-full' ></div>
                                        <div className='w-16 h-8 bg-gray-200 animate-pulse rounded-full'></div>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <div className='w-24 h-10 bg-gray-200 animate-pulse rounded-full'></div>
                                    <div className='w-24 h-10 bg-gray-200 animate-pulse rounded-full'></div>
                                    <div className='w-40 h-10 bg-gray-200 animate-pulse rounded-full'></div>
                                    <div className='w-10 h-10 bg-gray-200 animate-pulse rounded-full'></div>
                                </div>
                        </div>
                    </>
                    }
                </div>
                <div className='col-span-3 flex flex-col gap-2'>
                    {videos ? videos.map(video =>(
                        <WatchCard videoId={video.id} className='flex'>
                            <WatchCard.Thumbnail thumbnail={video.thumbnail}/>
                            <WatchCard.Content author={video.author} title={video.title} publish_date={video.publish_date} views={video.views} avatar={true} />
                        </WatchCard>
                        )):
                        <>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                            <WatchCard.Loader className='flex'/>
                        </>
                    }
                </div>
            </div>
            {modal && <ProductlModal productId={productId} show={modal} onClose={handleCloseModal}></ProductlModal>}
        </>
    );
}

export default Watching;

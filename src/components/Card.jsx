import { BiLike ,BiSolidMessageDetail,BiSolidLike  } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaEarthAmericas } from "react-icons/fa6";
import { TbHeartFilled } from "react-icons/tb";
import Button from './Button';
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { Interweave } from 'interweave';
import { CiImageOn,CiLocationOn  } from "react-icons/ci";
import { IoBagHandleOutline,IoShareSocialOutline,IoPause,IoVolumeHigh,IoVolumeMute ,IoPlay } from "react-icons/io5";
import {RiMessengerFill } from "react-icons/ri";
import { MdOutlineInsertEmoticon,MdOutlineBookmarkBorder } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import testVideo from "../assets/video/pexels.mp4"
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation,Pagination} from "swiper/modules";

const CreatePostCard = () => {

    return (
        <div className='p-6 card'>
            <div className='flex gap-2 items-start'>
                <Avatar size='md'/>
                <div className='flex flex-col w-full'>
                    <div className='w-full'>
                        <input type="text" className="w-full h-10 rounded-full bg-gray-100 hover:bg-gray-200 outline-none text-sm font-semibold px-4" placeholder="Bạn đang nghĩ gì?"/>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <button className='flex items-center justify-center text-gray-600 hover:text-gray-800 gap-2 duration-150 active:scale-95'>
                                <CiImageOn size={20}></CiImageOn>
                                <span>Photo/video</span>
                            </button>
                            <button className='flex items-center justify-center text-gray-600 hover:text-gray-800 gap-2 duration-150 active:scale-95'>
                                <IoBagHandleOutline size={20}></IoBagHandleOutline>
                                <span>Sản phẩm</span>
                            </button>
                            <button className='flex items-center justify-center text-gray-600 hover:text-gray-800 gap-2 duration-150 active:scale-95'>
                                <CiLocationOn size={20}></CiLocationOn>
                                <span>Vị trí</span>
                            </button>
                        </div>
                        <Button variant='outline'>Post</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const StoryCard =({children,props})=>{
    return (
        <Link {...props} to={props.story.url} className='rounded-lg h-56 card overflow-hidden relative group flex'>
            <div className='absolute inset-0 rounded-lg'>
                <img src={props.story.thumbnail} className='object-cover w-full h-full group-hover:scale-110 duration-150' alt="" />              
            </div>
            <div className='w-full h-full bg-black/60 relative flex flex-col justify-between p-3'>
                <Avatar size='md' img={props.user.profile_picture}/>
                <p className='text-sm font-semibold text-white'>{props.user.name}</p>
            </div>
        </Link>
    )
}
const StoryCardLoader =({children,props})=>{
    return (
        <div className='rounded-lg h-56 card overflow-hidden relative group flex bg-black/60 w-full'>
            <div className='w-full h-full bg-black/60 relative flex flex-col justify-between p-3'>
                <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                <div className="w-24 h-4 rounded-full bg-gray-200 animate-pulse"></div>
            </div>
        </div>
    )
}
const PostCard = ({children,post,handlePostDetail,...props}) => {
    const swiperRef = useRef(null);
    const nextRef = useRef(null)
    const prevRef = useRef(null)
    const paginationRef = useRef(null)
    const [_, setInit] = useState(false)
    const [like,setLike] = useState(false)

    const handleLike = ()=>{
        setLike(!like)
    }
    return (
        <div className="card group/card">
            <div className='flex gap-2 items-center px-4 py-4 relative '>
                <div className='absolute top-4 right-4 hover:bg-gray-100 opacity-0 group-hover/card:opacity-100 w-10 h-10 rounded-full flex items-center justify-center'>
                    <HiOutlineDotsHorizontal size={24} className='text-gray-600 hover:text-gray-800'></HiOutlineDotsHorizontal>
                </div>
                <Avatar img={post.author.profile_picture}></Avatar>
                <div>
                    <div className="flex items-center gap-2">
                        <p className='font-semibold text-gray-800 text-sm'>{post.author.name}</p>
                        <span className='text-emerald-700'>
                            <BsPatchCheckFill size={16} />
                        </span>
                    </div>
                    <div className='text-gray-600 text-xs flex items-center gap-1 mt-1'>
                        <span>{post.time}</span> 
                        <span>•</span> 
                        <FaEarthAmericas size={12}/>
                    </div>
                </div>
            </div>
       
            <div className='bg-gray-100 overflow-hidden relative'>  
                <Swiper
                    modules={[Navigation,Pagination]}
                    pagination={{   
                        el : paginationRef.current,
                        clickable: true,
                        renderBullet: function (index, className) {
                          return (`<div className="w-2 h-2 bg-gray-100 rounded-full [&.swiper-pagination-bullet-active]:w-5 [&.swiper-pagination-bullet-active]:bg-emerald-500 ${className}"></div>`)
                    }}}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onInit={() => setInit(true)}
                >
                    {post.product.images.map((image,index)=>(
                        <SwiperSlide key={index}>
                            <img src={image} className='w-full h-full object-contain' alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div ref={paginationRef} className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10"></div>
                <button ref={nextRef} className='button-next w-10 h-10 bg-white shadow-md text-gray-600 rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-5 z-10 active:scale-95 hover:bg-gray-100 duration-150 opacity-100 [&.swiper-button-disabled]:opacity-0'>
                    <FiChevronRight size={24}></FiChevronRight>
                </button>
                <button ref={prevRef} className='button-prev w-10 h-10 bg-white shadow-md text-gray-600 rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-5 z-10 active:scale-95 hover:bg-gray-100 duration-150 opacity-100 [&.swiper-button-disabled]:opacity-0' >
                    <FiChevronLeft size={24}></FiChevronLeft>
                </button>
            </div>    
            <div className='p-2 flex items-center'>
                <div  onClick={()=>{handlePostDetail(post.product.id)}} className='px-2 py-2 bg-gray-100 hover:bg-gray-200 duration-150 rounded-md flex items-center justify-between w-full max-w-full gap-4'>
                    <div className="flex gap-2 items-center">
                        <div className="rounded-lg h-16 aspect-square overflow-hidden">
                            <img src={post.product.images[0]} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='flex flex-col flex-1 space-y-1'>
                            <p className='text-sm font-semibold text-gray-800'>{post.product.title}</p>
                            <p className='text-red-600 text-xs font-semibold'>${post.product.price}</p>
                            <p className='text-gray-600 text-xs'>Đã bán {post.product.sold}</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <Button variant='primary' rounded='rounded-full'>Chi tiết</Button>
                        <Button variant="light" size='md-icon' rounded='rounded-full'>
                            <RiMessengerFill size={20}></RiMessengerFill>
                        </Button>
                        <Button variant="light" size='md-icon' rounded='rounded-full'>
                            <TbHeartFilled size={20}></TbHeartFilled>
                        </Button>
                    </div>
                </div>
            </div>   
            <div className='px-4 pt-2'>
                <div className='text-sm text-gray-800 whitespace-pre-line'>
                    <Interweave content={post.content} />
                <p className='text-emerald-700 hover:*:underline *:cursor-pointer'><span>#Neymarsport</span> <span>#DaiNeymar</span> <span>#PremierLeague</span> <span>#Coach </span><span>#Challenge</span></p>
                </div>
            </div>
            <div className='px-2 mt-2 flex items-center justify-between'>
                <div className="flex items-center gap-1">
                    <Button variant='text' size='sm' rounded='rounded-full' onClick={handleLike}>
                       { like ? 
                         <BiSolidLike className="text-emerald-700" size={16}></BiSolidLike>:
                         <BiLike size={16}></BiLike>
                       }
                        <span className={like &&'text-emerald-700'}>312</span>
                    </Button>
                    <Button variant='text' size='sm' rounded='rounded-full'>
                        <GoComment size={16}></GoComment>
                        <span >17</span>
                    </Button>
                    <Button variant='text' size='sm' rounded='rounded-full'>
                        <IoShareSocialOutline size={16}></IoShareSocialOutline>
                        <span >3</span>
                    </Button>
                </div>
                <Button variant='text' size='sm' rounded='rounded-full'>
                    <MdOutlineBookmarkBorder  size={16}></MdOutlineBookmarkBorder >
                </Button>
            </div> 
            <div className="w-full mt-2 mb-4 flex items-center px-4 gap-1">
                <Avatar ></Avatar>
                <div className="flex items-center w-full h-10 rounded-full bg-gray-100">
                    <input type="text" className="h-full w-full bg-transparent px-4 outline-none" placeholder="Nhập bình luận của bạn về bài viết" />
                    <Button variant='secondary' size='sm' rounded='rounded-full' className="mr-1">
                        <MdOutlineInsertEmoticon size={20}/>
                    </Button>
                </div>
            </div>
        </div>        
    )
}
const PostCardLoader = ({children,...props}) =>{
    return (
        <div className="card">
            <div className="p-4 flex gap-2">
                <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                <div className="flex flex-col gap-2">
                    <div className="w-36 h-4 rounded-full bg-gray-200 animate-pulse"></div>
                    <div className="w-24 h-4 rounded-full bg-gray-200 animate-pulse"></div>
                </div>
            </div>
            <div className="w-full h-auto aspect-square bg-gray-200 animate-pulse"></div>
            <div className="p-4">

            </div>
        </div>
    )
}
const ShortCard =({children,video,...props}) => {
    const vidRef = useRef(0)
    const [playing,setPlaying] = useState(false)
    const [vidTime,setVidTime] = useState(0)
    const [currentTime,setCurrentTime] = useState(0)
    const [muteVid,setMuteVid] = useState(false)
    const [like,setLike] = useState(0)
    const handleMuteVid = ()=>{
        setMuteVid(!muteVid)
    }
    const handleCurrentTime = (time)=>{
        setCurrentTime(time.playedSeconds)
        if (time.playedSeconds===vidTime) {
            setPlaying(false)
        }
    }
    const handleVideoTime = (time)=>{
        setVidTime(time)
    }
    const handlePlayVideo = () => {
        setPlaying(!playing)
    }
    const handleLike = () => {
        setLike(!like)
    }
    return (
        <div className='relative w-[calc(56.25vh_-_72px)] h-[calc(100vh_-_128px)] bg-neutral-900 min-h-[560px] shadow-lg rounded-md  group flex items-center justify-center' key={props.key}>
            <div className="flex flex-col justify-between z-10 h-full w-full" >
                <div className="absolute inset-0 opacity-0 duration-150" onClick={handlePlayVideo}></div>
                <div className="flex items-center justify-between p-4 group-hover:opacity-100 opacity-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent rounded-t-md duration-150">
                    <button className="p-2 flex items-center justify-center text-white hover:text-gray-100 duration-150" onClick={handlePlayVideo}>
                        {playing ? <IoPause size={26}/> : <IoPlay size={26}/> }
                    </button>
                    <button onClick={handleMuteVid} className="p-2 flex items-center justify-center text-white hover:text-gray-100 duration-150 relative group/vol">
                        {muteVid ? 
                        <IoVolumeMute size={26}/>
                        :
                        <IoVolumeHigh size={26}/>
                        }
                    </button>
                </div>
                <div className='flex flex-col justify-end gap-2 absolute bottom-0 -right-16'>
                    <div className="flex flex-col items-center">
                        <Button variant='secondary' size='lg-icon' rounded='rounded-full' onClick={handleLike}>
                            <TbHeartFilled size={24}  className={`duration-150 ${like ? 'text-red-600 animate-jump animate-once animate-ease-linear' :''}`}></TbHeartFilled>
                        </Button>
                        <span className="text-sm font-semibold text-gray-800">75</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Button variant='secondary' size='lg-icon' rounded='rounded-full'>
                            <BiSolidMessageDetail size={24}></BiSolidMessageDetail>
                        </Button>
                        <span className="text-sm font-semibold text-gray-800">12</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Button variant='secondary' size='lg-icon' rounded='rounded-full'>
                            <IoIosShareAlt size={24}></IoIosShareAlt>
                        </Button>
                        <span className="text-sm font-semibold text-gray-800">3</span>
                    </div>
                    <Button variant='secondary' size='lg-icon' rounded='rounded-full'>
                        <HiOutlineDotsHorizontal size={24}></HiOutlineDotsHorizontal>
                    </Button>
                </div>
                <div className="flex flex-col gap-3 relative overflow-hidden rounded-b-md bg-gradient-to-t from-black/60 via-black/60 to-transparent">
                    <div className="flex justify-between items-end p-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <Avatar online={true}></Avatar>
                                <p className='font-semibold text-white text-md'>{video.author}</p>
                                <Button variant='light' size='sm' rounded='rounded-full'className='!px-3'>Theo dõi</Button>
                            </div>
                            <div className="text-white text-sm font-semibold line-clamp-2 mt-1">
                                {video.title}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1 relative bg-gray-100 opacity-0 group-hover:opacity-100 duration-150">
                        <div className={`absolute bottom-0 left-0 bg-emerald-500 h-1`} style={{width:`${(currentTime/vidTime)*100}%`}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 ">
                <ReactPlayer muted={muteVid} ref={vidRef} playing={playing} onProgress={handleCurrentTime} onDuration={handleVideoTime} className='rounded-md overflow-hidden relative w-full h-full' width={'100%'} height={'100%'} url={video.url?video.url:testVideo}></ReactPlayer>
            </div>
        </div>
    )
}


const WatchCardContent =({children,views,title,author,publish_date,...props}) =>{
    console.log(author)
    return(
        <div className={`p-2 flex gap-2`}>
            {children}
            <div>
                {title&&<div className="text-sm font-semibold text-gray-800 line-clamp-2 min-w-[220px]">{title}</div>}
                {author.name&&<div className="text-xs text-gray-500">{author.name}</div>}
                <div className="text-xs text-gray-500 flex items-center gap-1">
                    {views&&<span>{new Intl.NumberFormat( 'vi-Vn', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(views)} lượt xem</span>}
                    {publish_date&&
                        <>
                            <span className="w-[3px] h-[3px] bg-gray-500 rounded-full"></span>
                            <span>{publish_date}</span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

const WatchCardThumbnail =({children,thumbnail,...props}) =>{
    return (
        <div className="rounded-md overflow-hidden w-full relative m-0 aspect-video min-w-[168px] min-h-[94px]">
            <img src={thumbnail} className="w-full h-full object-cover group-hover/thumbnail:scale-110 duration-150" alt="" />
        </div>
    )
}
const WatchCard = ({children,videoId,...props}) =>{
    return (
        <Link to={`/watch/${videoId}`} className={`group/thumbnail ${props.className || ''}`}>
            {children}
        </Link>
    )
}
const WatchCardLoader = ({...props}) =>{
    return (
        <div {...props} >
            <div className="aspect-video rounded-md overflow-hidden bg-gray-200 animate-pulse w-full"></div>
            <div className="p-2 flex gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="flex flex-col gap-1">
                    <div className="w-32 h-5 rounded-full bg-gray-200 animate-pulse"></div>
                    <div className="w-16 h-5 rounded-full bg-gray-200 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}
PostCard.Loader = PostCardLoader
StoryCard.Loader = StoryCardLoader
WatchCard.Loader = WatchCardLoader
WatchCard.Thumbnail = WatchCardThumbnail
WatchCard.Content = WatchCardContent

export default PostCard
export  {
    StoryCard,
    CreatePostCard,
    ShortCard,
    WatchCard
}



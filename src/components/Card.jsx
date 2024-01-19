import { BiLike ,BiSolidMessageDetail } from "react-icons/bi";
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
import { IoBagHandleOutline,IoShareSocialOutline,IoPause,IoVolumeMedium  } from "react-icons/io5";
import {RiMessengerFill } from "react-icons/ri";
import { MdOutlineInsertEmoticon,MdOutlineBookmarkBorder } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import testVideo from "../assets/video/pexels.mp4"
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
    console.log(props)
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

const PostCard = ({children,props}) => {
    return (
        <div className="card group/card">
            <div className='flex gap-2 items-center px-4 py-4 relative '>
                <div className='absolute top-4 right-4 hover:bg-gray-100 opacity-0 group-hover/card:opacity-100 w-10 h-10 rounded-full flex items-center justify-center'>
                <HiOutlineDotsHorizontal size={24} className='text-gray-600 hover:text-gray-800'></HiOutlineDotsHorizontal>
                </div>
                <Avatar img={props.author.profile_picture}></Avatar>
                <div>
                    <div className="flex items-center gap-2">
                        <p className='font-semibold text-gray-800 text-sm'>{props.author.name}</p>
                        <span className='text-emerald-700'>
                            <BsPatchCheckFill size={16} />
                        </span>
                    </div>
                    <div className='text-gray-600 text-xs flex items-center gap-1 mt-1'>
                        <span>{props.time}</span> 
                        <span>•</span> 
                        <FaEarthAmericas size={12}/>
                    </div>
                </div>
            </div>
            <div className='px-4 mb-4'>
                <div className='text-sm text-gray-800 whitespace-pre-line'>
                    <Interweave content={props.content} />
                <p className='text-emerald-700 hover:*:underline *:cursor-pointer'><span>#Neymarsport</span> <span>#DaiNeymar</span> <span>#PremierLeague</span> <span>#Coach </span><span>#Challenge</span></p>
                </div>
            </div>
            <div className='bg-gray-100 overflow-hidden'>  
                <img src={props.attachment} className='w-full h-full object-contain' alt="" />
            </div>    
            <div className='p-2 flex items-center'>
                <div className='px-4 py-2 bg-gray-100 rounded-md flex items-center justify-between w-full max-w-full gap-4'>
                    <div className='flex flex-col flex-1 space-y-1'>
                        <p className='text-sm font-semibold text-gray-800'>{props.product.title}</p>
                        <p className='text-red-600 text-xs font-semibold'>{props.product.price}</p>
                        <p className='text-gray-600 text-xs'>Đã bán {props.product.sold}</p>
                    </div>
                    <div className='flex space-x-2'>
                        <Button variant='primary' rounded='rounded-full'>Mua ngay</Button>
                        <Button variant="light" size='md-icon' rounded='rounded-full'>
                            <RiMessengerFill size={20}></RiMessengerFill>
                        </Button>
                        <Button variant="light" size='md-icon' rounded='rounded-full'>
                            <TbHeartFilled size={20}></TbHeartFilled>
                        </Button>
                    </div>
                </div>
            </div>   
            
            <div className='px-2 mt-2 flex items-center justify-between'>
                <div className="flex items-center gap-1">
                    <Button variant='text' size='sm' rounded='rounded-full'>
                        <BiLike size={16}></BiLike>
                        <span >312</span>
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

const WatchCard =({children,props}) => {
    return (
        <div className='flex relative justify-center w-[calc(56.25vh_-_72px)] h-[calc(100vh_-_128px)] min-h-[560px] group'>
            <div className='rounded-2xl overflow-hidden shadow-lg w-full h-full relative'>
                <div className="absolute inset-0 flex flex-col justify-between p-4 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/60 opacity-0 duration-150 group-hover:opacity-100">
                    <div className="flex items-center justify-between">
                        <button className="p-2 flex items-center justify-center text-white hover:text-gray-100 duration-150">
                            <IoPause size={26}/>
                        </button>
                        <button className="p-2 flex items-center justify-center text-white hover:text-gray-100 duration-150">
                            <IoVolumeMedium size={26}/>
                        </button>
                     
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <Avatar></Avatar>
                            <p className='font-semibold text-white text-md'>Minh Phùng</p>
                            <Button variant='light' size='sm' rounded='rounded-full'className='!px-3'>Theo dõi</Button>
                        </div>
                        <div className="text-white">
                            #vang10k #lactay ✨ Lắc Nam Đúc Rồng
                        </div>
                    </div>
                </div>
                <video className='w-full h-full' thumbnail='https://i.vimeocdn.com/video/1784225672-a190cda358ccee184a6c86808891078c18f7c93a69268eb38d63a612fce5575b-d?mw=800&q=85' src={testVideo}></video>
            </div>

            <div className='flex flex-col justify-end gap-3 absolute bottom-0 -right-16'>
                <div className="flex flex-col items-center space-y-1">
                    <Button variant='light' size='lg-icon' rounded='rounded-full'>
                        <TbHeartFilled size={24}></TbHeartFilled>
                    </Button>
                    <span className="text-sm font-semibold">75</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                    <Button variant='light' size='lg-icon' rounded='rounded-full'>
                    <BiSolidMessageDetail size={24}></BiSolidMessageDetail>
                    </Button>
                    <span className="text-sm font-semibold">12</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                    <Button variant='light' size='lg-icon' rounded='rounded-full'>
                        <IoIosShareAlt size={24}></IoIosShareAlt>
                    </Button>
                    <span className="text-sm font-semibold">3</span>
                </div>
                <Button variant='light' size='lg-icon' rounded='rounded-full'>
                    <HiOutlineDotsHorizontal size={24}></HiOutlineDotsHorizontal>
                </Button>
            </div>
        </div>
    )
}


export default PostCard
export  {
    StoryCard,
    CreatePostCard,
    WatchCard
}



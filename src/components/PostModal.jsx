import React, { useEffect, useState } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FaBookmark, FaEarthAmericas, FaImage, FaRegBookmark } from 'react-icons/fa6';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import {  IoClose, IoSend } from "react-icons/io5";
import Avatar from './Avatar';
import {  TbHeart,  TbHeartFilled } from 'react-icons/tb';
import axios from 'axios';
import {  BiSolidChat } from 'react-icons/bi';
import InputField from './InputField'
import Button from './Button';
import { MdEmojiEmotions, MdKeyboardVoice } from 'react-icons/md';
import { RiUserFollowLine } from 'react-icons/ri';
import {  IoMdShare } from 'react-icons/io';

const PostModal = ({ children,show,onClose,onOpen,image, ...props }) => {
    const [users,setUsers] = useState([])
    const [tab,setTab] = useState('comment')
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/users`).then((response)=>{
            setUsers(response.data.users);
        })
    }, []);
    useEffect(() => {
		function close(event) {
			if (event.keyCode === 27) {
				onClose();
			}
		}
        if (show) {
            document.body.classList.add('overflow-hidden')
            window.addEventListener("keydown", close);
        }
        return function removeListener() {
            window.removeEventListener("keydown", close);
            document.body.classList.remove('overflow-hidden')
        }// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]); 
    return (
        <div className='fixed inset-0'>     
            <div className='absolute inset-0 bg-black/80' onClick={onClose}></div>
            <button className='absolute right-0 top-0 p-4 flex items-center justify-center text-white' onClick={onClose}>
                <IoClose size={32}/>
            </button>
            <div className='h-full w-full py-8 flex items-center justify-center'>
                <div className='h-full rounded-md relative animate-jump-in animate-once animate-duration-150 flex items-center justify-center overflow-hidden'>
                    <div className='h-full w-auto'>
                        <img src={image} alt="" className='w-auto h-full object-cover' />
                    </div>
                    <div className= 'bg-white min-w-[450px] w-[500px] h-full flex flex-col justify-between border-l'>
                        <div className='px-4 pt-4 relative group border-b'>
                            <div>
                                <div className='flex gap-4 items-center justify-between'>
                                    <div className='flex gap-4'>
                                        <Avatar ></Avatar>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className='font-medium text-gray-800 text-sm'>Mundo</p>
                                                <span className='text-cyan-700'>
                                                    <BsPatchCheckFill size={16} />
                                                </span>
                                            </div>
                                            <div className='text-gray-600 text-xs flex items-center gap-1'>
                                                <span>3 ngày trước</span> 
                                                <span>•</span> 
                                                <FaEarthAmericas size={12}/>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant='primary' size='sm' rounded='full' className='hover:bg-cyan-800 px-4 bg-cyan-700 text-white h-8 rounded-full flex items-center justify-center'>
                                        <span className='font-semibold text-sm'>Theo dõi</span>
                                        <RiUserFollowLine size={16} ></RiUserFollowLine>
                                    </Button>
                                </div>
                                <div className='mt-2 text-sm whitespace-pre-line'>
                                    <p>
                                        Có quà lì xì siêu to khổng lồ luôn nèeee…bạn bè mình có ai tuổi dê ngày mai rảnh thì ib mình nhaaaaaaa…
                                    </p>
                                </div>
                            </div>
                            <div className='bg-gray-100 flex items-center justify-between rounded-md text-sm mt-3 overflow-hidden'>
                                <div className="line-clamp-1 px-2 text-gray-500 pr-2">https://www.my2hand.com/@ideasjoseantonio/post/6758571167092591877</div>
                                <button className='font-medium py-2 px-2 active:bg-gray-200 duration-150 text-gray-800 whitespace-nowrap'>Sao chép liên kết</button>
                            </div>
                            <div className='flex items-center mt-3'>
                                <button onClick={()=>setTab('comment')} className={`w-full -mb-[2px] py-2 border-b-2 ${tab==='comment' && 'border-gray-500'}`}>
                                    Bình luận
                                </button>
                                <button onClick={()=>setTab('product')} className={`w-full -mb-[2px] py-2 border-b-2 ${tab==='product' && 'border-gray-500'}`}>
                                    Sản phẩm của kênh
                                </button>
                            </div>
                        </div>
                        <div className='flex-1 max-h-full overflow-hidden'>
                            <div className='flex flex-col gap-6 h-full overflow-auto p-4 scroll'>
                                {users.map(user=>(
                                    <div className='flex gap-4 relative'>
                                        <div className='h-full'>
                                            <Avatar img={user.image}></Avatar>  
                                        </div>
                                        <div className='flex flex-col gap-0.5 flex-1'>
                                            <div className='font-medium text-gray-800 text-xs leading-3'>{user.maidenName}</div>
                                            <div className='text-gray-800 text-sm font-normal'>{user.university}</div>
                                            <div className='text-gray-600 text-xs flex items-center gap-4 group'>
                                                <span>3 ngày trước</span> 
                                                <span className='font-medium'>Trả lời</span>
                                                <span className='hidden group-hover:block'>
                                                    <HiOutlineDotsHorizontal size={16} className='text-gray-600 hover:text-gray-800'></HiOutlineDotsHorizontal>
                                                </span>
                                            </div>
                                        </div>
                                        <button className='absolute top-1/2 -translate-y-1/2 right-0'>
                                            <TbHeart size={20} className='text-gray-500 hover:text-gray-800'></TbHeart>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='p-4 border-t'>
                            <div className="flex items-center justify-between gap-4">
                                <div className='flex gap-4 items-center'>
                                    <div className='flex items-center gap-2'>
                                        <Button rounded='full' size='sm-icon'>
                                            <TbHeartFilled size={20}></TbHeartFilled>
                                        </Button>
                                        <span className='text-sm font-medium'>3.2M</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Button rounded='full' size='sm-icon'>
                                            <BiSolidChat size={20}></BiSolidChat>
                                        </Button>
                                        <span className='text-sm font-medium'>2339</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Button rounded='full' size='sm-icon'>
                                            <IoMdShare size={20}></IoMdShare>
                                        </Button>
                                        <span className='text-sm font-medium'>274.7k</span>
                                    </div>
                                </div>
                                <button className='text-gray-800 hover:text-gray-500'>
                                    <FaBookmark size={20}></FaBookmark>
                                </button>
                            </div>
                        </div> 
                        <div className='border-t p-4  flex gap-2'>
                            <InputField  className='w-full' rounded='full'>
                                <Button size='sm-icon' text='text-gray-500' className='ml-1.5' rounded='full'>
                                    <MdKeyboardVoice size={24}></MdKeyboardVoice> 
                                </Button>
                                <InputField.Input className={'pl-1.5'} placeholder='Nhập bình luận'/>
                                <div className='flex gap-1 items-center mr-1.5'>
                                    <Button size='sm-icon' text='text-gray-500' rounded='full'>
                                        <FaImage size={18}></FaImage> 
                                    </Button>
                                    <Button size='sm-icon' text='text-gray-500' rounded='full'>
                                        <MdEmojiEmotions size={24}></MdEmojiEmotions> 
                                    </Button>
                                </div>
                            </InputField>
                            <Button size='md-icon' variant='primary' rounded='full'>
                                <IoSend className='ml-1' size={20}></IoSend>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostModal;

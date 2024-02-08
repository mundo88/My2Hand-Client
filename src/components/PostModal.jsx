import React, { useEffect } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FaEarthAmericas } from 'react-icons/fa6';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoClose } from "react-icons/io5";
import Avatar from './Avatar';
const PostModal = ({ children,show,onClose,onOpen,image, ...props }) => {
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
                <div className='h-full  rounded-md relative animate-jump-in animate-once animate-duration-150 flex items-center justify-center overflow-hidden'>
                    <div className='h-full w-auto'>
                        <img src={image} alt="" className='w-auto h-full object-cover' />
                    </div>
                    <div className= 'bg-white min-w-[450px] w-[500px] h-full'>
                        <div className='flex gap-2 items-center px-4 py-4 relative group border-b'>
                            <div className='absolute top-4 right-4 hover:bg-gray-100 opacity-0 group-hover:opacity-100 w-10 h-10 rounded-full flex items-center justify-center'>
                                <HiOutlineDotsHorizontal size={24} className='text-gray-600 hover:text-gray-800'></HiOutlineDotsHorizontal>
                            </div>
                            <Avatar ></Avatar>
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className='font-semibold text-gray-800 text-sm'>Mundo</p>
                                    <span className='text-cyan-700'>
                                        <BsPatchCheckFill size={16} />
                                    </span>
                                </div>
                                <div className='text-gray-600 text-xs flex items-center gap-1 mt-1'>
                                    <span>3 ngày trước</span> 
                                    <span>•</span> 
                                    <FaEarthAmericas size={12}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostModal;

import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { IoChatbubble, IoHeartSharp } from "react-icons/io5";
import PostModal from '../../components/PostModal';

const Explore = () => {
    const [images,setImages] = useState([])
    const [showPost,setShowPost] = useState(false)
    const [image,setImage] = useState(null)
    const handleClosePost =()=>{
        setShowPost(false)
    }
    const handleOpenPost =(img)=>{
        setShowPost(true)
        setImage(img)
    }
    useEffect(()=>{
        axios.get(`/api/images`).then((response)=>{
            setImages(response.data);
        })
    },[])
    
    return (
        <div className={`flex items-center justify-center min-h-screen`}>
            <div className='py-4 max-w-5xl w-full mx-auto grid grid-cols-3 gap-1'>
                {images.length ? images.map((image,index)=>(
                    <div onClick={()=>handleOpenPost(image.urls.regular)} className={`'w-full rounded-md overflow-hidden aspect-square relative group`}>
                        <img src={image.urls.regular} alt=""  className='w-full h-full object-cover'/>
                        <div className='absolute inset-0 bg-black/30 group-hover:opacity-100 opacity-0 duration-150 flex items-center justify-center'>
                            <div className='flex items-center justify-center mr-6 text-white gap-1.5'>
                                <IoHeartSharp size={24}></IoHeartSharp> 
                                <span className='font-semibold'>721</span>
                            </div>
                            <div className='flex items-center justify-center mr-6 text-white gap-1.5'>
                                <IoChatbubble size={24}></IoChatbubble> 
                                <span className='font-semibold'>36</span>
                            </div>
                        </div>
                    </div>
                )) 
                : 
                <>
                <div className='w-full rounded-md overflow-hidden aspect-square bg-gray-200 animate-pulse'></div>
                <div className='w-full rounded-md overflow-hidden aspect-square bg-gray-200 animate-pulse'></div>
                <div className='w-full rounded-md overflow-hidden aspect-square bg-gray-200 animate-pulse'></div>
                <div className='w-full rounded-md overflow-hidden aspect-square bg-gray-200 animate-pulse'></div>
                <div className='w-full rounded-md overflow-hidden aspect-square bg-gray-200 animate-pulse'></div>
                <div className='w-full rounded-md overflow-hidden aspect-square bg-gray-200 animate-pulse'></div>
                <div className='w-full rounded-md overflow-hidden aspect-square bg-gray-200 animate-pulse'></div>
                <div className='w-full rounded-md overflow-hidden aspect-square bg-gray-200 animate-pulse'></div>
                <div className='w-full rounded-md overflow-hidden aspect-square bg-gray-200 animate-pulse'></div>
                </>
                }
            </div>  
            {showPost&& <PostModal onClose={handleClosePost} show={showPost} image={image}></PostModal>}
        </div>
    );
}

export default Explore;

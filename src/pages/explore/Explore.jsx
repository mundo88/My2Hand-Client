import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Explore = () => {
    const [images,setImages] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/images`).then((response)=>{
            setImages(response.data);
        })
    },[])
    
    return (
        <div  className=' flex items-center justify-center min-h-screen overflow-auto'>
            <div className='py-4 max-w-5xl w-full mx-auto grid grid-cols-3 gap-1'>
                {images.map((image,index)=>(
                    <div className={`'w-full rounded-md overflow-hidden aspect-square`}>
                        <img src={image.urls.regular} alt=""  className='w-full h-full object-cover'/>
                    </div>
                ))}
            </div>  
        </div>
    );
}

export default Explore;

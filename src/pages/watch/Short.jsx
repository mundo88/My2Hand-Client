import React, { useEffect, useState } from 'react';
import { ShortCard } from '../../components/Card';
import axios from 'axios';

const Short = () => {
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/youtube/playlist`).then((response)=>{
            setVideos(response.data.youtube);
        })
    },[])    
    return (
        <div className='py-8 items-center justify-center flex flex-col w-full gap-8'>
            {videos.map((video,index)=>(
                <ShortCard key={index} video={video}></ShortCard>
            ))}
        </div>
    );
}

export default Short;

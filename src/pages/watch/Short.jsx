import React, { useEffect, useState } from 'react';
import { ShortCard } from '../../components/Card';
import axios from 'axios';

const Short = () => {
    const [videos,setVideos] = useState(null)
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/videos`).then((response)=>{
            setVideos(response.data.data);
            console.log(response.data.data)
        })
    },[])    
    return (
        <div className='py-8 items-center justify-center flex flex-col w-full gap-8'>
            {videos ? videos.map((video,index)=>(
                <ShortCard key={index} video={video}></ShortCard>
            )):<><ShortCard.Loader/><ShortCard.Loader/><ShortCard.Loader/><ShortCard.Loader/><ShortCard.Loader/><ShortCard.Loader/><ShortCard.Loader/></>}
        </div>
    );
}

export default Short;

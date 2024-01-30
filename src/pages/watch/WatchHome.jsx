import React, { useEffect, useState } from 'react';
import { WatchCard } from '../../components/Card';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const WatchHome = () => {
    const [videos,setVideos] = useState(null)
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/youtube/playlist`).then((response)=>{
            setVideos(response.data.youtube);
        })
    },[])

    return (
        <div className='p-8 grid grid-cols-5 gap-x-4 gap-y-12 content-start w-full'>
            {videos ? videos.map(video =>(
                <WatchCard videoId={video.id}>
                    <WatchCard.Thumbnail thumbnail={video.thumbnail}/>
                    <WatchCard.Content author={video.author} title={video.title} publish_date={video.publish_date} views={video.views} avatar={true} />
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
    );
}

export default WatchHome;

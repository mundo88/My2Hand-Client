import React, { useEffect, useState } from 'react';
import { WatchCard } from '../../components/Card';
import axios from 'axios';
import Avatar from '../../components/Avatar';

const WatchHome = () => {
    const [videos,setVideos] = useState(null)
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/videos`).then((response)=>{
            setVideos(response.data.data);
        })
    },[])
    
    return (
        <div>
            
            <div className='p-8 grid grid-cols-5 gap-4 content-start w-full'>
                {videos ? videos.map(video =>(
                    <WatchCard videoId={video.id}>
                        <WatchCard.Thumbnail thumbnail={video.thumbnail}/>
                        <WatchCard.Content author={video.author} title={video.title} publish_date={video.publish_date} views={video.views} avatar={true} >
                            <Avatar img={video.author.photo_picture}></Avatar>
                        </WatchCard.Content>
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
        </div>
    );
}

export default WatchHome;

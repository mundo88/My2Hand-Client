import React, { useEffect, useState } from 'react';
import { 
    TbHomeHeart,TbUsers,TbCompass,TbLivePhoto,TbBrandYoutube,
    TbBookmarks,TbCloudDownload,TbEyeHeart,TbAppWindow
} from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import { ShortCard } from '../../components/Card';
import axios from 'axios';
import { SiShortcut } from "react-icons/si";
const SidebarItem= ({children,...props})=>{
    return (
        <NavLink to={props.to} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3 [&.active]:text-emerald-700 [&.active]:bg-emerald-50  text-gray-800'>
            {children}
        </NavLink>
    )
}

const Sidebar = ()=>{
    const [users,setUsers] = useState([])
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/users`).then((response)=>{
            setUsers(response.data.users);
        })
    },[])
    return (
        <div className='py-6 px-2 w-80 overflow-y-auto main-h overflow-auto scroll sticky top-14' >
            <div className=''>
                <SidebarItem to={'/watch/foru'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbHomeHeart size={28}/>
                    </div>
                    <span>Dành cho bạn</span>
                </SidebarItem>
                <SidebarItem to={'/watch/short'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <SiShortcut size={28}/>
                    </div>
                    <span>Short</span>
                </SidebarItem>
                <SidebarItem to={'/watch/following'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbUsers size={28}/>
                    </div>
                    <span>Đang follow</span>
                </SidebarItem>
                <SidebarItem to={'/watch/explore'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbCompass size={28}/>
                    </div>
                    <span>Khám phá</span>
                </SidebarItem>
                <SidebarItem to={'/watch/onlive'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbLivePhoto size={28}/>
                    </div>
                    <span>Live</span>
                </SidebarItem>
            </div>
            <div className=''>
                <p className="mb-2 bg-gradient-to-r from-violet-700 via-emerald-600 to-blue-800  to-blue-500 bg-clip-text text-transparent px-2">Bạn</p>
                <SidebarItem to={'/profile/watch'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbBrandYoutube size={32}/>
                    </div>
                    <span>Kênh của bạn</span>
                </SidebarItem>
                <SidebarItem to={'/watch/favourite'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbBookmarks size={32}/>
                    </div>
                    <span>Đã lưu</span>
                </SidebarItem>
                <SidebarItem to={'/watch/downloaded'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbCloudDownload size={32}/>
                    </div>
                    <span>Nội dung tải xuống</span>
                </SidebarItem>
                <SidebarItem to={'/watch/watched'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbEyeHeart size={32}/>
                    </div>
                    <span>Xem lại</span>
                </SidebarItem>
            </div>            
            <div className=''>
                <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-violet-700 via-emerald-600 to-blue-800 bg-clip-text text-transparent px-2 pt-4">Shop nổi bật</p>
                {users.slice(0,6).map(user=>(
                    <SidebarItem to={'/profile/@mundo'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3 [&.active]:text-emerald-700 [&.active]:bg-emerald-50 text-gray-800'>
                        <Avatar img={user.image}/>
                        <span className='font-semibold'>{user.username}</span>
                        <div className="px-2 py-0.5 rounded-md flex items-center justify-center relative bg-red-600 text-white">
                            <span className='text-xs font-semibold'>Live</span>
                        </div>
                    </SidebarItem>                
                ))}
            </div>
            <div className='px-2 py-4'>
                <Button variant='gradient'>
                    <TbAppWindow size={24}></TbAppWindow>
                    <span>Tải xuống ứng dụng</span>
                </Button>
            </div>            

       </div> 
    )
}
const Watch = () => {
    const [urls,setUrls] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/youtube/playlist`).then((response)=>{
            setUrls(response.data.youtube);
            console.log(response.data.youtube)
        })
    },[])    
    return (
        <div className=' grid grid-cols-12 bg-gray-100'>
            <div className='col-span-4'>
                <Sidebar/>
            </div>
            <div className='col-span-4 py-8 items-center justify-center flex flex-col gap-8'>
                <ShortCard key={111}></ShortCard>
                {urls.map((url,index)=>(
                    <ShortCard key={index} url={url.url}></ShortCard>
                ))}
            </div>
        </div>
    );
}

export default Watch;

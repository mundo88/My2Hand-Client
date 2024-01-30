import { 
    TbHomeHeart,TbUsers,TbCompass,TbLivePhoto,TbBrandYoutube,
    TbBookmarks,TbCloudDownload,TbEyeHeart,TbAppWindow
} from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import axios from 'axios';
import { TfiVideoClapper } from "react-icons/tfi";
import React, { useEffect, useState } from 'react';

const SidebarItem= ({children,...props})=>{
    return (
        <NavLink to={props.to} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3 [&.active]:text-gray-800 [&.active]:font-bold  text-gray-500'>
            {children}
        </NavLink>
    )
}

const WatchSidebar = ()=>{
    const [users,setUsers] = useState(null)
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/users`).then((response)=>{
            setUsers(response.data.users);
        })
    },[])
    return (
        <div className='py-6 px-2 overflow-y-auto main-h overflow-auto scroll sticky top-14' >
            <div className=''>
                <SidebarItem to={'/watch/home' || '/watch'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbHomeHeart size={28}/>
                    </div>
                    <span>Dành cho bạn</span>
                </SidebarItem>
                <SidebarItem to={'/watch/short'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TfiVideoClapper size={28}/>
                    </div>
                    <span>Short</span>
                </SidebarItem>
                <SidebarItem to={'/watch/onlive'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbLivePhoto size={28}/>
                    </div>
                    <span>Live</span>
                </SidebarItem>
                <SidebarItem to={'/watch/explore'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbCompass size={28}/>
                    </div>
                    <span>Khám phá</span>
                </SidebarItem>
            </div>
            <div className=''>
                <p className="mb-2 bg-gradient-to-r from-violet-700 via-emerald-600 to-blue-500 bg-clip-text text-transparent px-2 font-bold">Bạn</p>
                <SidebarItem to={'/watch/u'}>
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
                {users? 
                
                users.slice(0,6).map(user=>(
                    <SidebarItem to={'/profile/@mundo'} >
                        <Avatar img={user.image}/>
                        <span className='font-semibold text-gray-800'>{user.username}</span>
                        <div className="px-2 py-0.5 rounded-md flex items-center justify-center relative bg-red-600 text-white">
                            <span className='text-xs font-semibold'>Live</span>
                        </div>
                    </SidebarItem>                
                )):
                    <div className="flex flex-col gap-2"> 
                        <div className="w-full gap-2 flex items-center px-2">
                            <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="w-24 h-5 bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
                        </div>
                        <div className="w-full gap-2 flex items-center px-2">
                            <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="w-24 h-5 bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
                        </div>
                        <div className="w-full gap-2 flex items-center px-2">
                            <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="w-24 h-5 bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
                        </div>
                        <div className="w-full gap-2 flex items-center px-2">
                            <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="w-24 h-5 bg-gray-200 animate-pulse rounded-full"></div>
                            <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
                        </div>
                    </div>
                }
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
WatchSidebar.Item = SidebarItem
export default WatchSidebar


import React from 'react';
import { 
    TbHomeHeart,TbUsers,TbCompass,TbLivePhoto,TbBrandYoutube,
    TbBookmarks,TbCloudDownload,TbEyeHeart,TbAppWindow
} from "react-icons/tb";


import { NavLink } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import { WatchCard } from '../../components/Card';

const SidebarItem= ({children,...props})=>{
    return (
        <NavLink to={props.to} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3 [&.active]:text-emerald-700 [&.active]:bg-emerald-50  text-gray-800'>
            {children}
        </NavLink>
    )
}

const Sidebar = ()=>{
    return (
        <div className='py-6 px-2 w-80 overflow-y-auto main-h overflow-auto scroll sticky top-14' >
            <div className='pb-4 border-b border-b-gray-300'>

                <SidebarItem to={'/video/foru'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbHomeHeart size={32}/>
                    </div>
                    <span className='font-semibold'>Dành cho bạn</span>
                </SidebarItem>
                <SidebarItem to={'/video/following'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbUsers size={32}/>
                    </div>
                    <span className='font-semibold'>Đang follow</span>
                </SidebarItem>
                <SidebarItem to={'/video/discover'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbCompass size={32}/>
                    </div>
                    <span className='font-semibold'>Khám phá</span>
                </SidebarItem>
                <SidebarItem to={'/video/onlive'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbLivePhoto size={32}/>
                    </div>
                    <span className='font-semibold'>Live</span>
                </SidebarItem>
            </div>
            <div className='py-4 border-b border-b-gray-30'>
                <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-violet-700 via-emerald-600 to-blue-800  to-blue-500 bg-clip-text text-transparent px-2">Bạn</p>
                <SidebarItem to={'/profile/video'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbBrandYoutube size={32}/>
                    </div>
                    <span className='font-semibold'>Kênh của bạn</span>
                </SidebarItem>
                <SidebarItem to={'/video/favourite'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbBookmarks size={32}/>
                    </div>
                    <span className='font-semibold'>Đã lưu</span>
                </SidebarItem>
                <SidebarItem to={'/video/downloaded'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbCloudDownload size={32}/>
                    </div>
                    <span className='font-semibold'>Nội dung tải xuống</span>
                </SidebarItem>
                <SidebarItem to={'/video/watched'}>
                    <div className={`w-9 h-9 overflow-hidden flex items-center justify-center`}>
                        <TbEyeHeart size={32}/>
                    </div>
                    <span className='font-semibold'>Video đã xem</span>
                </SidebarItem>
            </div>            
            <div className='pb-4 border-b border-b-gray-300'>
                <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-violet-700 via-emerald-600 to-blue-800 bg-clip-text text-transparent px-2 pt-4">Shop nổi bật</p>
                <SidebarItem to={'/profile/@mundo'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3 [&.active]:text-emerald-700 [&.active]:bg-emerald-50 text-gray-800'>
                    <Avatar img='https://cdn.dribbble.com/users/1044993/screenshots/11918320/adventure-dog_dribbble_1x.png'/>
                    <span className='font-semibold'>Mundo Shop</span>
                    <div className="px-2 py-0.5 rounded-md flex items-center justify-center relative bg-red-600 text-white">
                        <span className='text-xs font-semibold'>Live</span>
                    </div>
                </SidebarItem>                
                <SidebarItem to={'/profile/@mundo'}>
                    <Avatar img='https://cdn.dribbble.com/users/241248/screenshots/4115240/drop_1x.png' />
                    <span className='font-semibold'>Đồ trang sức đẹp</span>
                    <div className="px-2 py-0.5 rounded-md flex items-center justify-center relative bg-red-600 text-white">
                        <span className='text-xs font-semibold'>Live</span>
                    </div>
                </SidebarItem>                
                <SidebarItem to={'/profile/@mundo'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3 [&.active]:text-emerald-700 [&.active]:bg-emerald-50  text-gray-800'>
                    <Avatar img='https://cdn.dribbble.com/users/626327/screenshots/3606928/snap_1x.gif'/>
                    <span className='font-semibold'>Tiệm ăn nhà làm</span>
                    <div className="px-2 py-0.5 rounded-md flex items-center justify-center relative bg-red-600 text-white">
                        <span className='text-xs font-semibold'>Live</span>
                    </div>
                </SidebarItem>                
                <SidebarItem to={'/profile/@mundo'} className='px-2 flex items-center py-1.5 hover:bg-gray-200 rounded-lg duration-150 gap-3 [&.active]:text-emerald-700 [&.active]:bg-emerald-50  text-gray-800'>
                    <Avatar img='https://cdn.dribbble.com/users/413551/screenshots/12484193/drible_1x.png'/>
                    <span className='font-semibold'>Đồ uống 4 mùa</span>
                    <div className="px-2 py-0.5 rounded-md flex items-center justify-center relative bg-red-600 text-white">
                        <span className='text-xs font-semibold'>Live</span>
                    </div>
                </SidebarItem>    
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
    return (
        <div className='h-full w-full grid grid-cols-12 bg-gray-100'>
            <div className='col-span-4'>
                <Sidebar/>
            </div>
            <div className='col-span-4 mt-8 mb-8 flex items-center gap-6 flex-col'>
                <WatchCard></WatchCard>
                <WatchCard></WatchCard>
                <WatchCard></WatchCard>
                <WatchCard></WatchCard>
                <WatchCard></WatchCard>
                <WatchCard></WatchCard>
                <WatchCard></WatchCard>
                <WatchCard></WatchCard>
                <WatchCard></WatchCard>
            </div>
        </div>
    );
}

export default Watch;

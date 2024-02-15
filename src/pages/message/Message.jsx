import React, { useState } from 'react';
import { HiGif, HiMiniVideoCamera, HiOutlinePencilSquare } from "react-icons/hi2";
import InputField from "../../components/InputField"
import {  BiSearch, BiSolidCustomize } from 'react-icons/bi';
import { TiPin } from "react-icons/ti";
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';
import { IoCall, IoMail, IoSend, IoWarning } from 'react-icons/io5';
import { useEffect } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import { RiSettings4Fill } from "react-icons/ri";
import { FaBell, FaCartShopping, FaFile, FaImage, FaLink, FaLockOpen, FaTrash, FaVideo } from "react-icons/fa6";
import { MdEmojiEmotions, MdKeyboardVoice } from "react-icons/md";
import { FaPlusCircle, FaUserCircle } from "react-icons/fa";
import { BsEyeSlashFill, BsPinFill } from "react-icons/bs";
import { SiAdblock } from "react-icons/si";
import Toggle from "../../components/Toggle"

const Message = () => {
    const [tab,setTab] = useState('message')
    const [users,setUsers] = useState([])
    useEffect(() => {
        axios.get(`/api/users`).then((response)=>{
            setUsers(response.data.users);
        })
    }, []);
    const [detailShow,setDetailShow]= useState(false)
    return (
        <div className="flex">
            <div className='min-w-80 w-80 flex h-screen max-h-screen bg-white overflow-hidden'>
                <div className='h-full flex flex-col border-r pt-6'>
                    <div className='flex items-center justify-between px-4'>
                        <button className='text-lg font-bold text-gray-800'><span>Message</span><span className='ml-1 text-cyan-500'>(22)</span></button>
                        <button className='text-gray-800 hover:text-black'>
                            <HiOutlinePencilSquare size={24}></HiOutlinePencilSquare>
                        </button>
                    </div>
                    <div className='px-4 mt-2'>
                        <InputField rounded='full' size={'md'}>
                            <InputField.Input  className={'pl-4'} placeholder={'Tìm kiếm liên hệ'}/>
                            <InputField.Icon>
                                <BiSearch size={24} className='text-gray-500 hover:text-gray-800'></BiSearch>
                            </InputField.Icon>
                        </InputField>
                    </div>
                    <div className='px-4 mt-2'>
                        <div className='w-full p-1 rounded-full bg-gray-200 flex items-center mt-2'>
                            <button onClick={()=>setTab('message')} className={`w-full h-8 text-sm rounded-full flex items-center justify-center font-semibold ${tab==='message' &&'bg-white duration-150'}`}>
                                Tin nhắn
                            </button>
                            <button onClick={()=>setTab('call')} className={`w-full h-8 text-sm rounded-full flex items-center justify-center font-semibold ${tab==='call' &&'bg-white duration-150'}`}>
                                Cuộc gọi
                            </button>
                        </div>
                    </div>
                    <div className='pb-2 pt-4'>
                        <div className='flex items-center justify-between px-4'>
                            <div className='text-sm text-gray-500 flex items-center gap-1'>
                                <TiPin size={16}></TiPin>
                                <span>Đã ghim</span>
                            </div>
                            <button className='text-gray-800 hover:text-black flex items-center justify-center'>
                                <HiOutlineDotsHorizontal size={20}></HiOutlineDotsHorizontal>
                            </button>
                        </div>
                        <div className='pt-2 flex flex-col gap-1 px-2'>
                            <Link className='flex items-center justify-between p-2 duration-150 rounded-md hover:bg-gray-100'>
                                <div className='flex gap-2'>
                                    <Avatar size={'lg'} online={true}></Avatar>
                                    <div className='flex flex-col justify-center'>
                                        <div className='font-semibold text-sm text-gray-800'>Emilia</div>
                                        <div className='text-md flex items-center gap-1'>
                                            <span className='text-xs font-semibold text-gray-800'>Nay có tiền chưa bạn</span>
                                            <div className='w-[3px] h-[3px] min-w-[3px] aspect-square bg-gray-500 rounded-full'></div>
                                            <div className="text-gray-500 text-xs whitespace-nowrap">3 giờ</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center h-full'>
                                    <div className='text-white flex items-center text-xs justify-center w-5 h-5 font-semibold rounded-full bg-cyan-600'>
                                        <span>5</span>
                                    </div>
                                </div>
                            </Link>
                            <Link className='flex items-center justify-between p-2 duration-150 rounded-md hover:bg-gray-100'>
                                <div className='flex gap-2'>
                                    <Avatar img={'https://cdn.dribbble.com/users/7825060/avatars/small/a8fb77672f4c213e9ea6834c31b6472a.jpeg?1637661013'} size={'lg'} online={true}></Avatar>
                                    <div className='flex flex-col justify-center'>
                                        <div className='font-semibold text-sm text-gray-800'>Mung phình</div>
                                        <div className='text-md flex items-center gap-1'>
                                            <span className='text-xs text-gray-500 line-clamp-1'>Mừng tết đến bạn bè chúc nhà nhà tết nay được nhiều lộc hơn tết xưa</span>
                                            <div className='w-[3px] h-[3px] min-w-[3px] aspect-square bg-gray-500 rounded-full'></div>
                                            <div className="text-gray-500 text-xs whitespace-nowrap">15 giờ</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className='flex items-center justify-between p-2 duration-150 rounded-md hover:bg-gray-100'>
                                <div className='flex gap-2'>
                                    <Avatar img={'https://img.cand.com.vn/resize/800x800/NewFiles/Images/2022/05/13/Le_Cat_trong_Ly_bieu_dien_trong_-1652412669233.jpg'} size={'lg'}></Avatar>
                                    <div className='flex flex-col justify-center'>
                                        <div className='font-semibold text-sm text-gray-800'>Lê Cát Trọng Lý</div>
                                        <div className='text-md flex items-center gap-1'>
                                            <span className='text-xs text-gray-500 line-clamp-1'>bạn: Đêm qua anh mơ thấy em yêu đến trong mộng tưởng</span>
                                            <div className='w-[3px] h-[3px] min-w-[3px] aspect-square bg-gray-500 rounded-full'></div>
                                            <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center justify-between px-4 pb-2'>
                        <div className='text-sm text-gray-500 flex items-center gap-1'>
                            <IoMail size={16}></IoMail>
                            <span>Liên hệ gần đây</span>
                        </div>
                        <button className='text-gray-800 hover:text-black flex items-center justify-center'>
                            <HiOutlineDotsHorizontal  size={20}></HiOutlineDotsHorizontal>
                        </button>
                    </div>
                    <div className='pb-2 overflow-hidden'>
                        <div className='flex flex-col gap-1 px-2 scroll h-full overflow-auto'>
                            {users.map(user=>(
                                <Link className='flex items-center justify-between p-2 duration-150 rounded-md hover:bg-gray-100'>
                                    <div className='flex gap-2'>
                                        <Avatar size={'lg'} online={true} img={user.image}></Avatar>
                                        <div className='flex flex-col justify-center pr-4'>
                                            <div className='font-semibold text-sm text-gray-800'>{user.firstName}</div>
                                            <div className='text-md flex items-center gap-1'>
                                                <span className='text-xs font-semibold text-gray-800 line-clamp-1'>{user.university}</span>
                                                <div className='w-[3px] h-[3px] min-w-[3px] aspect-square bg-gray-500 rounded-full'></div>
                                                <div className="text-gray-500 text-xs whitespace-nowrap">3 giờ</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center h-full'>
                                        <div className='text-white flex items-center text-xs justify-center w-5 h-5 font-semibold rounded-full bg-cyan-600'>
                                            <span>5</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 h-screen flex '>
                <div className='flex-1 flex flex-col bg-white'>
                    <div className='py-4 px-4  border-b flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <Avatar size={'md'} online={true} ></Avatar>
                            <div className='flex flex-col justify-center pr-4'>
                                <div className='font-semibold text-md text-gray-800'>Mun Phình</div>
                                <div className='text-md flex items-center gap-1'>
                                    <div className="text-cyan-500 text-xs whitespace-nowrap font-semibold">Trực tuyến</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Button size='md-icon' variant='secondary' rounded='full'>
                                <IoCall size={24}></IoCall> 
                            </Button>
                            <Button size='md-icon' variant='secondary' rounded='full'>
                                <HiMiniVideoCamera size={24}></HiMiniVideoCamera> 
                            </Button>
                            <Button onClick={()=>setDetailShow(!detailShow)} size='md-icon' variant='secondary' rounded='full'>
                                <RiSettings4Fill size={24}></RiSettings4Fill> 
                            </Button>
                        </div>
                    </div>
                    <div className='flex-1 relative'>
                        {/* <div className='absolute inset-0'>
                                <img className='w-full h-full object-cover' src="https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png" alt="" />
                        </div> */}
                    </div>
                    <div className='p-4 flex gap-2'>
                        <InputField  size='xl' className='w-full' rounded='full'>
                            <Button size='md-icon' text='text-gray-500' className='ml-2.5' rounded='full'>
                                <MdKeyboardVoice size={24}></MdKeyboardVoice> 
                            </Button>
                            <InputField.Input className={'pl-2.5'} placeholder='Gửi tin nhắn cho Mun Phình'/>
                            <div className='flex gap-1 items-center mr-2.5'>
                                <Button size='md-icon' text='text-gray-500' rounded='full'>
                                    <FaPlusCircle size={22}></FaPlusCircle> 
                                </Button>
                                <Button size='md-icon' text='text-gray-500' rounded='full'>
                                    <FaImage size={18}></FaImage> 
                                </Button>
                                <Button size='md-icon' text='text-gray-500' rounded='full'>
                                    <MdEmojiEmotions size={24}></MdEmojiEmotions> 
                                </Button>
                                <Button size='md-icon' text='text-gray-500' rounded='full'>
                                    <HiGif size={24}></HiGif> 
                                </Button>
                            </div>
                          
                        </InputField>
                        <Button size='xl-icon' variant='primary' rounded='full'>
                            <IoSend className='ml-1' size={20}></IoSend>
                        </Button>
                    </div>
                </div>
                {detailShow&&
                <div className='w-80 border-l'>
                    <div className='flex flex-col gap-3 h-full'>
                        <div className='flex items-center justify-center py-6 flex-col bg-white'>
                            <div className='w-20 h-20 rounded-full overflow-hidden'>
                                <img src="https://i.pinimg.com/564x/22/2a/6c/222a6ca470efcf9a002240e2ed746e6f.jpg" className='w-full h-full object-cover' alt="" />
                            </div>
                            <div className='text-gray-800 font-semibold text-lg mt-2'>Mun Phình</div>
                            <div className='flex items-center justify-center gap-6 mt-2'>
                                <div className='text-center flex flex-col items-center justify-center gap-1'>
                                    <Button size='md-icon' rounded={'full'}>
                                        <FaUserCircle size={20}></FaUserCircle>
                                    </Button>
                                    <div className='text-xs '>Trang cá nhân</div>
                                </div>
                                <div className='text-center flex flex-col items-center justify-center gap-1'>
                                    <Button size='md-icon' rounded={'full'}>
                                        <BsPinFill size={20}></BsPinFill>
                                    </Button>
                                    <div className='text-xs '>Ghim</div>
                                </div>
                                <div className='text-center flex flex-col items-center justify-center gap-1'>
                                    <Button size='md-icon' rounded={'full'}>
                                        <BiSearch size={24}></BiSearch>
                                    </Button>
                                    <div className='text-xs '>Tìm kiếm</div>
                                </div>
                            </div>
                        </div>
                        <div className='py-2 bg-white flex flex-col gap-1 px-2'>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <BiSolidCustomize size={20}></BiSolidCustomize>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Tùy chỉnh đoạn chat</span>
                                </div>
                            </button>
                            <div className='flex items-center justify-between py-2 pl-2 pr-2.5'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <FaBell size={20}></FaBell>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Thông báo về đoạn chat</span>
                                </div>
                                <Toggle></Toggle>
                            </div>
                        </div>
                        <div className='py-2 bg-white flex flex-col gap-1 px-2'>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <FaImage size={20}></FaImage>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Ảnh (241)</span>
                                </div>
                            </button>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <FaVideo size={20}></FaVideo>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Video (2)</span>
                                </div>
                            </button>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <FaFile size={20}></FaFile>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>File (8)</span>
                                </div>
                            </button>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <FaLink size={20}></FaLink>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Link (1)</span>
                                </div>
                            </button>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <FaCartShopping size={20}></FaCartShopping>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Sản phẩm (3)</span>
                                </div>
                            </button>                           
                        </div>
                        <div className='py-2 bg-white flex flex-col gap-1 px-2 h-full'>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <FaLockOpen size={20}></FaLockOpen>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Mã hóa đầu cuối</span>
                                </div>
                            </button>
                            <div className='flex items-center justify-between py-2 pl-2 pr-2.5'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <BsEyeSlashFill size={20}></BsEyeSlashFill>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Ẩn trò chuyển</span>
                                </div>
                                <Toggle></Toggle>
                            </div>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <SiAdblock size={20}></SiAdblock>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Chặn người dùng</span>
                                </div>
                            </button>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-gray-500'>
                                        <IoWarning size={20}></IoWarning>
                                    </div>
                                    <span className='text-gray-800 font-semibold text-sm'>Báo cáo cuộc trò chuyện</span>
                                </div>
                            </button>
                            <button className='flex items-center justify-between p-2 rounded-md hover:bg-gray-200'>
                                <div className="flex items-center">
                                    <div className='mr-4 flex items-center justify-center text-red-700'>
                                        <FaTrash size={20}></FaTrash>
                                    </div>
                                    <span className='text-red-700 font-semibold text-sm'>Xóa cuộc trò chuyện</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Message;

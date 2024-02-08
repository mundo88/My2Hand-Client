import React, { useState } from 'react';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import InputField from "../../components/InputField"
import { BiSearch } from 'react-icons/bi';
import { TiPin } from "react-icons/ti";
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';
import { IoMail } from 'react-icons/io5';

const Message = () => {
    const [tab,setTab] = useState('message')
    return (
        <div className='w-full flex'>
            <div className='min-h-screen h-screen min-w-80 w-80 py-6 bg-white'>
                <div className='flex items-center justify-between px-4 '>
                    <div className='text-lg font-bold text-gray-800'><span>Message</span><span className='ml-1 text-cyan-500'>(22)</span></div>
                    <button className='text-gray-800 hover:text-black'>
                        <HiOutlinePencilSquare size={24}></HiOutlinePencilSquare>
                    </button>
                </div>
                <div className='px-4 mt-4'>
                    <InputField rounded='full' size={'md'}>
                        <InputField.Input  className={'pl-4'} placeholder={'Tìm kiếm tin nhắn'}/>
                        <InputField.Icon>
                            <BiSearch size={24} className='text-gray-500 hover:text-gray-800'></BiSearch>
                        </InputField.Icon>
                    </InputField>
                </div>
                <div className='px-4 mt-4'>
                    <div className='w-full p-1 rounded-full bg-gray-200 flex items-center mt-2'>
                        <button onClick={()=>setTab('message')} className={`w-full h-8 rounded-full flex items-center justify-center font-semibold ${tab==='message' &&'bg-white duration-150'}`}>
                            Tin nhắn
                        </button>
                        <button onClick={()=>setTab('call')} className={`w-full h-8 rounded-full flex items-center justify-center font-semibold ${tab==='call' &&'bg-white duration-150'}`}>
                            Cuộc gọi
                        </button>
                    </div>
                </div>
                <div className='pb-2 pt-4'>
                    <div className='flex items-center justify-between px-4'>
                        <div className='text-sm text-gray-500 flex items-center gap-1'>
                            <TiPin size={16}></TiPin>
                            <span>Pin message</span>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='pb-2'>
                    <div className='flex items-center justify-between px-4'>
                        <div className='text-sm text-gray-500 flex items-center gap-1'>
                            <IoMail size={16}></IoMail>
                            <span>All message</span>
                        </div>
                        <button className='text-gray-800 hover:text-black flex items-center justify-center'>
                            <HiOutlineDotsHorizontal  size={20}></HiOutlineDotsHorizontal>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
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
                                        <div className='w-[3px] h-[3px] bg-gray-500 rounded-full'></div>
                                        <div className="text-gray-500 text-xs whitespace-nowrap">1 ngày</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;

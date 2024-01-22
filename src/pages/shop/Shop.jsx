
import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight,FiChevronLeft,FiSearch } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Button from '../../components/Button';
import { FaStar} from "react-icons/fa";
import  Avatar  from "../../components/Avatar";
import Product from '../../components/Product';
import ProductlModal from './ProductlModal';
import InputField from '../../components/InputField';
const ShopCardContainer = ({children,...props}) => {
    return (
        <div className={`relative max-w-7xl mx-auto w-full ${props.className}`} >
            {children}
        </div>
    )
}

const Shop = () => {
    const [categories,setCategories] = useState([])
    const [users,setUsers] = useState([])
    const [modal,setModal] = useState(0)
    const [productId,setProductId] = useState(0)

    const handleCloseModal =()=>{
        setModal(false)
    }
    const handleOpenModal =(productId=null)=>{
        setModal(true)
        setProductId(productId)
    }
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/users`).then((response)=>{
            setUsers(response.data.users);
        })
    },[])
    const [products,setProducts] = useState([])
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/products`).then((response)=>{
            setProducts(response.data.products);
        })
    },[])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/categories`).then((response)=>{
            setCategories(response.data.categories);
        })
    },[])    
    const tabs = ['Mã giảm giá','Voucher','Săn sale','Bắt trend','Freeship']
    const [tab,setTab] = useState(tabs[0])
    const [counter,setCounter] = useState(60)
    setTimeout(() => {
        setCounter(new Date().getSeconds())
    }, 1000);
    return (
        <>
            <div className={`flex flex-col h-full w-full relative gap-6 bg-gray-100 pb-12 ${modal? 'overflow-hidden':'overflow-auto'}`}>
                <div className='w-full relative overflow-hidden'>
                    <div className='absolute inset-0 bg-black/50'></div>
                    <video loop="loop" autoplay="autoplay" preload="" muted="muted" src="https://a.sinaimg.cn/mintra/pic/2112130543/weibo_login.mp4" poster="https://a.sinaimg.cn/mintra/pic/2112130400/18weibo_login.png" class="LoginTopNav_video_1W33g"></video>
                    <div className='absolute inset-0 max-w-7xl w-full mx-auto flex items-center justify-center'>
                        <InputField placeholder='Your email or username' size={'lg'} rounded='full' className="w-full max-w-5xl">
                            <InputField.Icon>
                                <FiSearch size={24}></FiSearch>
                            </InputField.Icon>
                        </InputField>
                    </div>
                </div>
                <ShopCardContainer className='-mt-20 grid grid-cols-2 gap-6'>
                    <div className='card p-4 w-full'>
                        <div className="flex justify-between items-center">
                            <div className='font-semibold text-md text-gray-800'>Danh mục</div>
                            <Link className='font-semibold text-md text-emerald-700'>Xem thêm</Link>
                        </div>
                        <div className='relative mt-6'>
                            <div className='flex gap-3 '>
                                <Swiper 
                                className="mySwiper w-full relative h-full gap-4"
                                spaceBetween={16}
                                slidesPerView={3.2}
                                slidesPerGroup={9}
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.button-next',
                                    prevEl: '.button-prev',
                                }}>
                                {categories.map((category,index) => 
                                    <SwiperSlide key={index}>
                                        <Link to={category.url} className='flex flex-col p-2 border rounded-lg group hover:border-emerald-700 duration-150'>
                                            <div className="w-full h-auto aspect-square overflow-hidden rounded-lg ">
                                                <img src={category.image} alt="" className='w-full h-full object-cover group-hover:scale-105 duration-150' />
                                            </div>
                                            <div className='text-gray-800 text-sm font-semibold mt-2 text-center'>{category.name}</div>
                                        </Link>
                                    </SwiperSlide>
                                )}
                                </Swiper>
                            </div>
                            <Button variant='light' className='button-next [&.swiper-button-disabled]:opacity-0 absolute -right-3 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='rounded-full'>
                                <FiChevronRight size={24}></FiChevronRight>
                            </Button>
                            <Button variant='light' className='button-prev [&.swiper-button-disabled]:opacity-0 absolute -left-3 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='rounded-full'>
                                <FiChevronLeft size={24}></FiChevronLeft>
                            </Button>
                        </div>
                    </div>
                    <div className='card w-full h-full flex flex-col'>
                        <div className=" border-b border-b-gray-300 flex items-center justify-between px-1">
                            {tabs.map((item,index)=>(
                                <div key={index} onClick={()=>setTab(item)} className={`w-full whitespace-nowrap px-4 py-2 relative text-center border-b-4 translate-y-0.5 hover:text-emerald-700 duration-150 cursor-pointer ${tab ===item ? 'text-emerald-700 border-b-emerald-700':'border-b-transparent text-gray-600'}`}>
                                    <span className="font-semibold text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className='p-4 flex h-full flex-1 gap-4 relative'>
                            <Button variant='light' className='button-next [&.swiper-button-disabled]:opacity-0 absolute right-2 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='rounded-full'>
                                <FiChevronRight size={24}></FiChevronRight>
                            </Button>
                            <Button variant='light' className='button-prev [&.swiper-button-disabled]:opacity-0 absolute left-2 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='rounded-full'>
                                <FiChevronLeft size={24}></FiChevronLeft>
                            </Button>
                            <Swiper 
                                className="mySwiper w-full relative"
                                spaceBetween={16}
                                slidesPerView={3.2}
                                slidesPerGroup={6}
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.button-next',
                                    prevEl: '.button-prev',
                                }}>
                                {users.map(user => (
                                    <SwiperSlide key={user.id}>
                                        <div className='flex flex-col justify-between rounded-lg p-2 border border-gray-300 h-full gap-3 hover:border-emerald-700 duration-150'>
                                            <div className='flex items-center justify-center gap-2 mb-2'>
                                                <Avatar img={user.image}></Avatar>
                                                <div className='flex-col flex'>
                                                    <span className='font-semibold text-gray-800 text-sm'>{user.username}</span>
                                                    <span className='bg-emerald-700 px-2 py-0.5 font-semibold text-xs text-white rounded-md w-fit'>Shop mall</span>
                                                </div>
                                            </div>
                                            <div className="border-t border-t-gray-300 border-dashed relative w-full"></div>
                                            <div className='flex flex-col items-center justify-center flex-1'>
                                                <div className='flex text-red-700 font-bold'>
                                                    <div className='text-4xl'>-15</div>
                                                    <div className='text-md'>%</div>
                                                </div>
                                                <span className='text-gray-800 font-semibold text-sm'>
                                                    Giảm tối đa 179k 
                                                </span>
                                            </div>
                                            <Button className='w-full' size='sm' variant='secondary'>Lưu mã</Button>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </ShopCardContainer>
                <ShopCardContainer>
                    <div className='card p-2 w-full flex flex-col relative'>
                        <div className="flex justify-between items-center pt-2 px-2">
                            <div className='flex items-center'>
                                <div className='h-7 w-auto'>
                                    <img src="https://web-static.scdn.vn/sendo-buyers-flash-sale-widget/47ddffad-web/media/flashsale-icon.6d0b98fffda3d7d526b45c53de367840.svg" className='h-full' alt="" />
                                </div>
                                <div className='flex items-center ml-4 gap-1'>
                                    <div className='w-7 h-7 rounded-md bg-gray-800 flex items-center justify-center text-white font-semibold'>02</div>
                                    :
                                    <div className='w-7 h-7 rounded-md bg-gray-800 flex items-center justify-center text-white font-semibold'>08</div>
                                    :
                                    <div className='w-7 h-7 rounded-md bg-gray-800 flex items-center justify-center text-white font-semibold'>{counter}</div>
                                </div>
                            </div>
                            <Link className='font-semibold text-md text-emerald-700'>Xem thêm</Link>
                        </div>
                        <div className='relative'>
                            <Swiper 
                                className="mySwiper w-full relative h-full mt-4 !p-2"
                                spaceBetween={16}
                                slidesPerView={6.3}
                                slidesPerGroup={6}
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.button-next',
                                    prevEl: '.button-prev',
                                }}>
                                {products.map(product => 
                                    <SwiperSlide key={product.id} onClick={()=>handleOpenModal(product.id)}>
                                        <Product className='flex flex-col border rounded-lg group hover:border-emerald-700 duration-150 overflow-hidden'>
                                            <Product.Thumbnail>
                                                <img src={product.images[0]} alt="" className='w-full h-full object-contain'/>
                                            </Product.Thumbnail>
                                            <Product.Content>
                                                <div className='text-xs text-gray-600 font-semibold'>{product.category.name}</div>
                                                <div className='text-gray-800 text-sm font-semibold duration-150 mt-0.5 truncate'>{product.title}</div>
                                                <div className='flex items-center justify-between mt-3'>
                                                    <span className='font-semibold text-emerald-700 text-md'>${product.price}</span>
                                                    <div className='flex items-center gap-1'>
                                                        <span className='text-yellow-500'>
                                                            <FaStar size={12}/>
                                                        </span>
                                                        <span className='text-xs text-gray-600'>293</span>
                                                        <span className='text-xs text-gray-600'>|</span>
                                                        <span className='text-xs text-gray-600'>2356</span>
                                                    </div>
                                                </div>
                                                <Product.Sold sold='32' stock={product.stock || 999}/>
                                            </Product.Content>
                                        </Product>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                            <Button variant='light' className='button-next [&.swiper-button-disabled]:opacity-0 absolute -right-1 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='rounded-full'>
                                <FiChevronRight size={24}></FiChevronRight>
                            </Button>
                            <Button variant='light' className='button-prev [&.swiper-button-disabled]:opacity-0 absolute -left-1 border top-1/2 -translate-y-1/2 z-10' size='sm-icon' rounded='rounded-full'>
                                <FiChevronLeft size={24}></FiChevronLeft>
                            </Button>
                        </div>
                    </div>
                </ShopCardContainer>
                <ShopCardContainer>
                    <div className="w-full grid grid-cols-11 gap-4">
                        <div className='card col-span-3 rounded-xl overflow-hidden'>
                            <img src="https://cf.shopee.vn/file/vn-50009109-b4c24dd00323f1b7eb75bb45e64ef018_xxhdpi" className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className="col-span-5 rounded-xl overflow-hidden">
                            <img src="https://cf.shopee.vn/file/vn-50009109-d2b4d40f34a6efb626ebb5abe4fc2f0c_xhdpi" className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className="col-span-3 rounded-xl overflow-hidden">
                            <img src="https://cf.shopee.vn/file/vn-50009109-82b7a817a7d2378ea5e07ab4adb0f4d9_xhdpi" className='w-full h-full object-cover' alt="" />
                        </div>
                    </div>
                </ShopCardContainer>
    
                <ShopCardContainer>
                    <div className='card p-2 w-full flex flex-col relative'>
                        <div className="flex justify-between items-center pt-2 px-2">
                            <div className='flex items-center gap-2'>
                                <div className='h-7 w-auto'>
                                    <img src="https://media3.scdn.vn/img4/2023/05_17/2qchQKBYZR2DeGt4eAa3.png" className='h-full' alt="" />
                                </div>
                                <div className='font-semibold text-md text-gray-800'>Shop tiêu biểu</div>
                            </div>
                            <Link className='font-semibold text-md text-emerald-700'>Xem thêm</Link>
                        </div>
                        <div className='mt-4 p-2'>
                            <div className='relative w-full rounded-lg overflow-hidden'>
                                <img src="https://media3.scdn.vn/img4/2024/01_15/kRpu5MfRaTCOL4NpS7O9.jpg" alt="" />
                            </div>    
                            <div className='grid grid-cols-6 gap-4 mt-4'>
                                {products.slice(0,6).map(product => (
                                    <div onClick={()=>handleOpenModal(product.id)} key={product.id} className='flex flex-col items-center gap-3 rounded-lg border border-gray-300 hover:shadow-md duration-150 p-4 '>
                                        <div className=' aspect-square w-full h-auto overflow-hidden rounded-lg'>
                                            <img src={product.images[0]} className='w-full h-full object-contain' alt=""  />
                                        </div>
                                        <div className='py-1 px-1 rounded-full w-fit flex items-center gap-2 border border-gray-300 max-w-full'>
                                            <Avatar size='sm'></Avatar>
                                            <div className='text-sm text-gray-800 font-semibold mr-2 truncate'>{product.category.name}</div>
                                        </div>
                                        <div className='max-w-full'>
                                            <div className='text-sm text-emerald-700 font-semibold mr-2 truncate'>{product.title}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ShopCardContainer>
                <ShopCardContainer>
                    <div className='card w-full relative'>
                        <div className='flex items-center gap-2 justify-center p-4'>
                            <div className='text-2xl font-semibold bg-gradient-to-r mb-1 from-violet-700 via-emerald-600 to-blue-800 bg-clip-text text-transparent px-2'>Gợi ý hôm nay</div>
                        </div>
                        <div className='absolute bottom-0 w-full h-1 bg-gradient-to-r from-violet-700 via-emerald-600 to-blue-800'>
                        </div>
                    </div>
                    <div className='mt-6 grid grid-cols-6 gap-4'>
                        {products.map(product => 
                            <Product to={product.id} key={product.id} onClick={()=>handleOpenModal(product.id)} >
                                <Product.Thumbnail>
                                    <img src={product.images[0]} alt="" className='w-full h-full object-cover'/>
                                </Product.Thumbnail>
                                <Product.Content >
                                    <div className='text-gray-800 text-md font-semibold duration-150 mt-0.5 line-clamp-2'>{product.title}</div>
                                    <div className=' mt-2'>
                                        <Product.DiscountPercen number={product.discountPercentage || 10}/>
                                        <div className='flex items-center justify-between mt-1'>
                                            <span className='font-semibold text-red-700 text-md'>${product.price}</span>
                                            <span className='text-sm font-semibold text-gray-600'>Đã bán {product.stock || 999}</span>
                                        </div>
                                    </div>
                                </Product.Content>
                            </Product>
                        )}        
                    </div>
                </ShopCardContainer>
                <ShopCardContainer>
                    <Button variant='outline' className='w-fit m-auto'>/ Xem thêm</Button>
                </ShopCardContainer>
            </div>
            {modal && <ProductlModal productId={productId} show={modal} onClose={handleCloseModal}></ProductlModal>}
        </>
    );
}

export default Shop;




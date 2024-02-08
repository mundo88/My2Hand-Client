
import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight,FiChevronLeft } from 'react-icons/fi';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Button from '../../components/Button';
import { FaStar} from "react-icons/fa";
import  Avatar  from "../../components/Avatar";
import Product from '../../components/Product';
import ProductlModal from '../../components/ProductlModal';



const Shop = () => {
    const [categories,setCategories] = useState([])
    const [users,setUsers] = useState([])
    const [modal,setModal] = useState(null)
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
    const [counter,setCounter] = useState(60)
    setTimeout(() => {
        setCounter(new Date().getSeconds())
    }, 1000);
    return (
            <div className={`flex flex-col min-h-screen w-full p-8 gap-8 bg-gray-100 pb-12`}>
                <div className=''>
                    <div className="flex justify-between items-center">
                        <div className='font-semibold text-md text-gray-800'>Danh mục</div>
                        <Link className='font-semibold text-md text-cyan-700'>Xem thêm</Link>
                    </div>
                    <div className='relative mt-4'>
                        <div className='flex gap-3 '>
                            <Swiper 
                            className="mySwiper  relative h-full gap-4"
                            spaceBetween={16}
                            slidesPerView={9.2}
                            slidesPerGroup={9}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.button-next',
                                prevEl: '.button-prev',
                            }}>
                            {categories.map((category,index) => 
                                <SwiperSlide key={index}>
                                    <Link to={category.url} className='flex flex-col p-2 border rounded-lg group hover:border-gray-800 bg-white duration-150'>
                                        <div className=" h-auto aspect-square overflow-hidden rounded-lg ">
                                            <img src={category.image} alt="" className=' h-full object-cover group-hover:scale-105 duration-150' />
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
                <div className=' flex flex-col relative'>
                    <div className="flex justify-between items-center">
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
                        <Link className='font-semibold text-md text-cyan-700'>Xem thêm</Link>
                    </div>
                    <div className='relative'>
                        <Swiper 
                            className="mySwiper  relative h-full mt-4 !py-2"
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
                                    <Product className='flex flex-col border rounded-lg group hover:border-gray-800 duration-150 overflow-hidden'>
                                        <Product.Thumbnail>
                                            <img src={product.images[0]} alt="" className=' h-full object-contain'/>
                                        </Product.Thumbnail>
                                        <Product.Content>
                                            <div className='text-xs text-gray-600 font-semibold'>{product.category.name}</div>
                                            <div className='text-gray-800 text-sm font-semibold duration-150 mt-0.5 truncate'>{product.title}</div>
                                            <div className='flex items-center justify-between mt-3'>
                                                <span className='font-semibold text-cyan-700 text-md'>${product.price}</span>
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
                <div className=' flex flex-col relative'>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center gap-2'>
                            <div className='h-7 w-auto'>
                                <img src="https://media3.scdn.vn/img4/2023/05_17/2qchQKBYZR2DeGt4eAa3.png" className='h-full' alt="" />
                            </div>
                            <div className='font-semibold text-md text-gray-800'>Shop tiêu biểu</div>
                        </div>
                        <Link className='font-semibold text-md text-cyan-700'>Xem thêm</Link>
                    </div>
                    <div className='mt-4'>
                        <div className='relative w-full rounded-lg overflow-hidden'>
                            <img src="https://media3.scdn.vn/img4/2024/01_15/kRpu5MfRaTCOL4NpS7O9.jpg" className=' object-contain w-full' alt="" />
                        </div>    
                        <div className='grid grid-cols-6 gap-4 mt-4'>
                            {products.slice(0,6).map(product => (
                                <div onClick={()=>handleOpenModal(product.id)} key={product.id} className='flex flex-col items-center gap-3 rounded-lg border border-gray-300 hover:shadow-md hover:border-gray-800 duration-150 p-4 '>
                                    <div className=' aspect-square  h-auto overflow-hidden rounded-lg'>
                                        <img src={product.images[0]} className=' h-full object-contain' alt=""  />
                                    </div>
                                    <div className='py-1 px-1 rounded-full w-fit flex items-center gap-2 border border-gray-300 max-'>
                                        <Avatar size='sm'></Avatar>
                                        <div className='text-sm text-gray-800 font-semibold mr-2 truncate'>{product.category.name}</div>
                                    </div>
                                    <div className='max-'>
                                        <div className='text-sm text-cyan-700 font-semibold mr-2 truncate'>{product.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' relative'>
                        <div className='font-semibold text-md text-gray-800'>Gợi ý hôm nay</div>
                        <div className='absolute bottom-0 h-1 bg-gray-800'>
                        </div>
                    </div>
                    <div className='mt-4 grid grid-cols-6 gap-4'>
                        {products.map(product => 
                            <Product to={product.id} key={product.id} onClick={()=>handleOpenModal(product.id)} >
                                <Product.Thumbnail>
                                    <img src={product.images[0]} alt="" className=' h-full object-cover'/>
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
                </div>
                <div>
                    <Button variant='outline' className='w-fit m-auto'>/ Xem thêm</Button>
                </div> 
                {modal && <ProductlModal productId={productId} show={modal} onClose={handleCloseModal}></ProductlModal>}
            </div>
    );
}

export default Shop;




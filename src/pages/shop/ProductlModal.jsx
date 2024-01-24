import React, {
  useState,
  useRef,
  useEffect
} from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { BsCartCheckFill } from "react-icons/bs";
import Dropdown from "../../components/Dropdown";
import { BiDotsHorizontal, BiSolidLike } from "react-icons/bi";
import {
  FaStar,
  FaStarHalfAlt,
  FaHeart,
  FaPlay,
  FaComment,
  FaFacebookMessenger,
  FaStore,
} from "react-icons/fa";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import { FaPause } from "react-icons/fa6";
import "swiper/css/thumbs";
import axios from "axios";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";

const ProductlModal = ({ children,show,onClose,onOpen,productId, ...props }) => {
    const swiperRef = useRef(null);
    const swiperThumbRef = useRef(null);
    const [play, setPlay] = useState([]);
    const [data,setData] = useState(false)
    useEffect(() => {
		function close(event) {
			if (event.keyCode === 27) {
                console.log('hehe')
				onClose();
			}
		}
        if (show) {
            window.addEventListener("keydown", close);
        }
        return function removeListener() {
            window.removeEventListener("keydown", close);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]); 
    useEffect(()=>{
        if(productId){
             axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/products/${productId}`).then(response => {
                setData(response.data)
            })
        }return setData(false)

    },[productId])
    const handleAutoPlay = () => {
        play
        ? swiperRef.current?.autoplay.stop()
        : swiperRef.current?.autoplay.start();
        setPlay(!play);
    };
    return(
        <div className={`fixed w-screen h-screen top-0 left-0 z-[100] duration-200`} {...props}>

            <div className={`absolute inset-0 bg-black/80 z-10 duration-100`} onClick={()=>onClose()}></div>
            <div className="h-full pt-12">
                <div className={`bg-gray-100 z-20 relative rounded-t-3xl duration-300 transition-transform h-full ${show? 'ModalOpen':'ModalClosed'}`}>
                    {
                        data ?
                        <div className="relative container mx-auto h-full">
                            <div className="absolute -left-20 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center justify-center">
                                <Button variant='light' size='lg-icon'> 
                                    <TbListDetails  size={20}/>    
                                </Button>
                                <Button variant='light' size='lg-icon'> 
                                    <BiMessageDetail size={20}/>    
                                </Button>
                                <Button variant='light' size='lg-icon'> 
                                    <BiDotsHorizontal size={20}/>    
                                </Button>
                            </div>
                            <div className="flex h-full justify-center pb-12 items-center">
                                <div className="grid grid-cols-12 gap-20 ">
                                    <div className="flex justify-between flex-col col-span-3">
                                    <div>
                                        <p className="text-gray-800 text-xs font-bold">
                                            {data.category.name}
                                        </p>
                                        <h1 className="text-gray-800 text-3xl font-bold mt-8">
                                            {data.title}
                                        </h1>
                                    </div>
                                    <p className="text-gray-500 text-2xl font-bold line-clamp-4">
                                        {data.description}
                                    </p>
                                    <div className="flex items-center -mx-2">
                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            watchSlidesProgress={true}
                                            
                                            modules={[Navigation, Thumbs]}
                                            className="mySwiper !p-2 w-full translate-y-2"
                                            onBeforeInit={(swiper) => {
                                                swiperThumbRef.current = swiper;
                                            }}
                                        >
                                        {data.images&&data.images.map((image,index)=>(
                                            <SwiperSlide key={index} className="aspect-square overflow-hidden rounded-lg p-2 bg-gray-50 hover:bg-white [&.swiper-slide-thumb-active]:bg-white [&.swiper-slide-thumb-active]:ring-2 [&.swiper-slide-thumb-active]:ring-gray-800 ring-offset-2 ring-offset-gray-100 duration-150 !max-h-24 !max-w-24">
                                                <img src={image} alt="" className="w-full h-full object-contain" />
                                            </SwiperSlide>
                                        ))}
                                        </Swiper>
                                    </div>
                                    </div>
                                    <div className="col-span-6 flex items-center justify-center max-h-[456px] min-h-[456px] h-[456px] bg-white rounded-xl overflow-hidden">
                                        <Swiper
                                            className="mySwiper w-full relative h-full gap-4"
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            loop={true}
                                            slidesPerGroup={1}
                                            thumbs={{ swiper: swiperThumbRef.current }}
                                            modules={[Navigation, Autoplay, Thumbs]}
                                            autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                            }}
                                            onBeforeInit={(swiper) => {
                                                swiperRef.current = swiper;
                                            }}
                                        >
                                            {data.images&&data.images.map((image,index)=>(
                                                <SwiperSlide key={index}>
                                                    <img src={image} alt="" className="w-full h-full object-contain" />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        </div>
                                        <div className="flex justify-between flex-col col-span-3">
                                    <div className="flex justify-between items-center font-bold">
                                        <span className="text-lg text-gray-800">Price</span>
                                        <span className="text-2xl text-red-700 font-semibold">
                                            ${data.price}
                                        </span>
                                    </div>
                                    <div className="">
                                        <span className="text-lg text-gray-800 font-bold">
                                        Size
                                        </span>
                                        <div className="flex justify-between items-center gap-3 mt-4">
                                        <div className="w-full h-auto aspect-square rounded-xl font-semibold hover:bg-gray-800 hover:text-white duration-150 bg-gray-800 text-white flex items-center justify-center">
                                            <span>37</span>
                                        </div>
                                        <div className="w-full h-auto aspect-square rounded-xl font-semibold hover:bg-gray-800 hover:text-white duration-150 border-2 border-gray-800 text-gray-800 flex items-center justify-center">
                                            <span>38</span>
                                        </div>
                                        <div className="w-full h-auto aspect-square rounded-xl font-semibold hover:bg-gray-800 hover:text-white duration-150 border-2 border-gray-400 text-gray-400 flex items-center justify-center pointer-events-none">
                                            <span>41</span>
                                        </div>
                                        <div className="w-full h-auto aspect-square rounded-xl font-semibold hover:bg-gray-800 hover:text-white duration-150 border-2 border-gray-800 text-gray-800 flex items-center justify-center">
                                            <span>41</span>
                                        </div>
                                        <div className="w-full h-auto aspect-square rounded-xl font-semibold hover:bg-gray-800 hover:text-white duration-150 border-2 border-gray-800 text-gray-800 flex items-center justify-center">
                                            <span>42</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <span className="text-lg text-gray-800 font-bold">
                                        Color
                                        </span>
                                        <div className="flex justify-between items-center gap-3 mt-4">
                                        <div className="w-full h-auto aspect-square rounded-xl duration-150 bg-sky-500 border"></div>
                                        <div className="w-full h-auto aspect-square rounded-xl duration-150 bg-yellow-300 border"></div>
                                        <div className="w-full h-auto aspect-square rounded-xl duration-150 bg-green-500 border"></div>
                                        <div className="w-full h-auto aspect-square rounded-xl duration-150 bg-white border"></div>
                                        <div className="w-full h-auto aspect-square rounded-xl duration-150 bg-black border"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg text-gray-800 font-bold">
                                        Đánh giá
                                        </span>
                                        <div className="flex items-center justify-center gap-2">
                                        <span className="text-gray-800">
                                            <FaStar size={16} />
                                        </span>
                                        <span className="text-gray-800">
                                            <FaStar size={16} />
                                        </span>
                                        <span className="text-gray-800">
                                            <FaStar size={16} />
                                        </span>
                                        <span className="text-gray-800">
                                            <FaStar size={16} />
                                        </span>
                                        <span className="text-gray-800">
                                            <FaStarHalfAlt size={16} />
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="bg-white w-full rounded-t-xl absolute bottom-0 left-0 grid grid-cols-12 py-6 px-12">
                                    <div className="flex items-center gap-2 col-span-3">
                                    <Dropdown>
                                        <Dropdown.Button>
                                            <div className="flex items-center gap-2 duration-150">
                                                <Avatar size='lg' online={true}></Avatar>
                                                <div className=" flex flex-col">
                                                    <div className="flex gap-1 items-center">
                                                        <p className="font-semibold text-gray-800 text-md">My Store</p>
                                                        <p className="font-semibold text-gray-800 text-md">·</p>
                                                        <p className='font-semibold text-emerald-700 text-md duration-150 hover:underline'>Theo dõi</p>
                                                    </div>
                                                    <p className="font-semibold text-gray-600 text-xs">@mundoshop</p>
                                                </div>
                                            </div>
                                        </Dropdown.Button>
                                        <Dropdown.DropdownContainer postion='top'>
                                            <Dropdown.Item>
                                            <Dropdown.ItemIcon>
                                                <FaFacebookMessenger size={20} />
                                            </Dropdown.ItemIcon>
                                            <Dropdown.ItemText>Chat với shop</Dropdown.ItemText>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                            <Dropdown.ItemIcon>
                                                <FaStore size={20} />
                                            </Dropdown.ItemIcon>
                                            <Dropdown.ItemText>Xem shop</Dropdown.ItemText>
                                            </Dropdown.Item>
                                        </Dropdown.DropdownContainer>
                                    </Dropdown>
                                    </div>
                                    <div className="flex items-center justify-center gap-6 col-span-6">
                                    <Button
                                        variant="light"
                                        size={"lg"}
                                        onClick={() => swiperRef.current?.slidePrev()}
                                    >
                                        <HiArrowLongLeft size={24}></HiArrowLongLeft>
                                    </Button>
                                    <Button
                                        size="lg-icon"
                                        onClick={() => {
                                        handleAutoPlay();
                                        }}
                                    >
                                        {play ? (
                                        <FaPause size={16}></FaPause>
                                        ) : (
                                        <FaPlay size={16}></FaPlay>
                                        )}
                                    </Button>
                                    <Button
                                        variant="light"
                                        size={"lg"}
                                        onClick={() => swiperRef.current?.slideNext()}
                                    >
                                        <HiArrowLongRight size={24}></HiArrowLongRight>
                                    </Button>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 col-span-3">
                                    <Button variant="black" size="lg">
                                        Thêm vào giỏ hàng
                                    </Button>
                                    <Button variant="text" size="lg-icon">
                                        <FaHeart></FaHeart>
                                    </Button>
                                    </div>
                                </div>
                                <div className="absolute top-16 left-0 flex items-center justify-between w-full">
                                    <Button className="-ml-6" onClick={onClose}>
                                        <HiArrowLongLeft size={24}></HiArrowLongLeft>
                                        <span>Back</span>
                                    </Button>

                                </div>
                            </div>
                        </div>
                        : 
                        <div className="container m-auto ">
                            <div className="grid grid-cols-12 w-full pt-44 gap-20 h-full">
                                <div className=" col-span-3 flex flex-col justify-between h-[456px]">
                                   <div className="bg-gray-200 animate-pulse rounded-full h-8 w-48"></div>
                                   <div className="bg-gray-200 animate-pulse rounded-full h-8 w-48"></div>
                                   <div className="bg-gray-200 animate-pulse rounded-full h-8 w-32"></div>
                                   <div className="bg-gray-200 animate-pulse rounded-full h-8 w-44"></div>
                                </div>
                                <div className=" bg-gray-200 animate-pulse rounded-xl col-span-6 h-[456px]"></div>
                                <div className="col-span-3 flex flex-col justify-between items-end h-[456px]">
                                    <div className="bg-gray-200 animate-pulse rounded-full h-8 w-48"></div>
                                    <div className="bg-gray-200 animate-pulse rounded-full h-8 w-32"></div>
                                    <div className="bg-gray-200 animate-pulse rounded-full h-8 w-32"></div>
                                    <div className="bg-gray-200 animate-pulse rounded-full h-8 w-44"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-1/2 h-32 w-full container -translate-x-1/2 bg-gray-200 animate-pulse rounded-t-lg">

                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ProductlModal;

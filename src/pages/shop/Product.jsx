import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({children,...props}) => {
  return (
    <Link {...props} className='flex flex-col border rounded-lg group hover:shadow-md overflow-hidden bg-white hover:border-emerald-700 duration-150'>
        {children}
    </Link>
  )
}

const ProductThumbnail = ({children,...props}) =>{
    return (
        <div className='w-full h-auto aspect-square overflow-hidden'>
            {children}
        </div>
    )
}

const ProductContent = ({children,...props}) =>{
    return (
        <div className='px-3 pb-3 mt-1 flex flex-col justify-between flex-1'>
            {children}
        </div>
    )
}
const ProductSold = ({children,...props}) =>{
    return (
        <div className='flex items-center justify-between gap-1 mt-3'>
            <div className='h-3 relative w-full bg-gray-200 rounded-full'>
                <img className='absolute bottom-0 left-0.5 w-5 z-10' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/c5316dd01de2b0d41d267a57f5b32844.png" alt="" />
                <div className='absolute top-0 left-0 w-3/5 h-full rounded-full bg-gradient-to-r from-red-600 to-orange-500'></div>
            </div>
            <span className='text-xs text-gray-600'><span className='font-bold'>{props.sold}</span><span>/{props.stock}</span></span>
        </div>
    )
}
const ProductDiscountPercen = ({children,...props}) =>{
    return (
        <div className='px-1 py-0.5 text-white font-semibold text-center w-fit bg-red-700 rounded-md text-xs'>
            <span>-{props.number}%</span>
        </div>
    )
}
Product.Thumbnail = ProductThumbnail
Product.Content = ProductContent
Product.Sold = ProductSold
Product.DiscountPercen = ProductDiscountPercen


export default Product

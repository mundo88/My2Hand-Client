import React, { createRef, useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { PiPasswordFill,PiEyeFill } from "react-icons/pi";
import { ImCheckboxUnchecked,ImCheckboxChecked  } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { FaArrowRightLong } from "react-icons/fa6";

const SignUp = () => {
  const [sendNotification,setSendNotification] = useState(true);
  const [pwShow,setPwShow] = useState(false)
  const sendNotificationRef = createRef([])

  return (
      <>
          <div className='max-w-md w-full mx-auto mb-8'>
              <p className='text-4xl font-semibold text-gray-800'>Đăng ký</p>
              <p className='text-md font-semibold text-gray-800 mt-4'>Đã có tài khoản? <Link to={'/login'} className='text-emerald-700'>Đăng nhập ngay.</Link></p>
          </div>
          <div className='flex flex-col mt-8 max-w-md w-full mx-auto gap-6'>
              <InputField placeholder='Your email or username' size={'lg'}>
                  <InputField.Icon>
                      <MdEmail size={24}></MdEmail>
                  </InputField.Icon>
              </InputField>
              <InputField placeholder='Your password' type={pwShow ? 'text' : 'password'} size={'lg'}>
                  <InputField.Icon>
                      <PiPasswordFill size={24}></PiPasswordFill>
                  </InputField.Icon>
                  <button onClick={()=>setPwShow(!pwShow)} className='absolute min-w-12 h-12 right-0 flex items-center justify-center text-gray-600 hover:text-gray-800 duration-150 active:scale-95'>
                      <PiEyeFill size={24}></PiEyeFill>
                  </button>
              </InputField>
              <InputField placeholder='re password' type={pwShow ? 'text' : 'password'} size={'lg'}>
                  <InputField.Icon>
                      <PiPasswordFill size={24}></PiPasswordFill>
                  </InputField.Icon>
                  <button onClick={()=>setPwShow(!pwShow)} className='absolute min-w-12 h-12 right-0 flex items-center justify-center text-gray-600 hover:text-gray-800 duration-150 active:scale-95'>
                      <PiEyeFill size={24}></PiEyeFill>
                  </button>
              </InputField>
              <div className='flex items-center justify-between'>
                  <label className='has-[:checked]:text-emerald-700 flex items-center justify-center text-gray-600 hover:text-emerald-600 gap-2 duration-150'>
                      {sendNotification ? <ImCheckboxUnchecked size={16}/> :<ImCheckboxChecked size={16}/> }
                      <input type="checkbox" ref={sendNotificationRef} hidden onInput={()=>{setSendNotification(!sendNotification)}}/>
                      <span className='font-semibold text-sm'>Gửi thông báo qua email của tôi</span>
                  </label>
              </div>
              <Button variant='gradient' size={'lg'}>
                  <FaArrowRightLong size={24}></FaArrowRightLong>
                  <span className='ml-1'>Tiếp tục</span>
              </Button>
              <div className='relative mx-auto w-full text-center py-4'>
                  <span className='absolute w-full h-[1px] top-1/2 -translate-y-1/2 bg-gray-300 left-0'></span>
                  <span className='px-4 bg-white relative z-10 text-gray-600'>Hoặc đăng ký bằng</span>
              </div>
              <div className='flex items-center justify-center gap-4'>
                  <Button className='w-full space-x-1'>
                      <FcGoogle size={24}></FcGoogle>
                      <span>Google</span>
                  </Button>
                  <Button className='w-full space-x-1'>
                      <BsGithub color='#000000' size={24}></BsGithub>
                      <span>Github</span>
                  </Button>
              </div>
          </div>       
      </>
  );
}
export default SignUp
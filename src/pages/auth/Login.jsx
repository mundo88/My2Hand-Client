import React, { createRef, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { PiPasswordFill,PiEyeFill } from "react-icons/pi";
import { ImCheckboxUnchecked,ImCheckboxChecked  } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import InputField from '../../components/InputField';

const Login = () => {
    const [remember,setRemember] = useState(true);
    const [pwShow,setPwShow] = useState(false)

    const passwordRemember = createRef([])

    return (
       <>
            <div className='max-w-md w-full mx-auto mb-8'>
                <p className='text-4xl font-semibold text-gray-800'>Đăng nhập</p>
                <p className='text-md font-semibold text-gray-800 mt-4'>Chưa có tài khoản? <Link to={'/signup'} className='text-cyan-700'>Đăng ký ngay.</Link></p>
            </div>
            <div className='flex flex-col mt-8 max-w-md w-full mx-auto gap-6'>
                <InputField  size={'lg'}>
                    <InputField.Icon>
                        <MdEmail size={24}></MdEmail>
                    </InputField.Icon>
                    <InputField.Input placeholder='Your email or username'></InputField.Input>
                </InputField>
                <InputField placeholder='Your password' type={pwShow ? 'text' : 'password'} size={'lg'}>
                    <InputField.Icon>
                        <PiPasswordFill size={24}></PiPasswordFill>
                    </InputField.Icon>
                    <InputField.Input placeholder='Your password' type={pwShow ? 'text' : 'password'}></InputField.Input>
                    <button onClick={()=>setPwShow(!pwShow)} className='absolute min-w-12 h-12 right-0 flex items-center justify-center text-gray-600 hover:text-gray-800 duration-150 active:scale-95'>
                        <PiEyeFill size={24}></PiEyeFill>
                    </button>
                </InputField>
                <div className='flex items-center justify-between'>
                    <label className='has-[:checked]:text-cyan-700 flex items-center justify-center text-gray-600 hover:text-cyan-600 gap-2 duration-150'>
                        {remember ? <ImCheckboxUnchecked size={16}/> :<ImCheckboxChecked size={16}/> }
                        <input type="checkbox" ref={passwordRemember} hidden onInput={()=>{setRemember(!remember)}}/>
                        <span className='font-semibold text-sm'>Ghi nhớ mật khẩu</span>
                    </label>
                    <Link className='text-gray-600 hover:text-cyan-700 duration-150 text-sm font-semibold hover:underline'>
                        Quên mật khẩu?
                    </Link>
                </div>
                <Button variant='primary' size={'lg'}>
                    Đăng nhập
                </Button>
                <div className='relative mx-auto w-full text-center py-4'>
                    <span className='absolute w-full h-[1px] top-1/2 -translate-y-1/2 bg-gray-300 left-0'></span>
                    <span className='px-4 bg-white relative z-10 text-gray-600'>Hoặc đăng nhập bằng</span>
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

export default Login;

import React from 'react';

const Avatar = ({children,...props}) => {
    const size = {
        'sm':'min-w-8 min-h-8 w-8 h-8',
        'md':'min-w-10 min-h-10 w-10 h-10',
        'lg':'min-w-12 min-h-12 w-12 h-12',
        'xl':'min-w-14 min-h-14 w-14 h-14',
        '2xl':'min-w-16 min-h-16 w-16 h-16',
        '3xl':'min-w-18 min-h-18 w-18 h-18',
        '4xl':'min-w-20 min-h-20 w-20 h-20',
    }
    
    return (
        <div className={`${ size[props.size] || size['md'] } rounded-full bg-white relative`}>
            <div className='overflow-hidden rounded-full w-full h-full'>
                <img src={props.img ||'https://phanmemmkt.vn/wp-content/uploads/2022/11/avatar-tet-2023-cute-31.jpg'} className="object-cover w-full h-full" alt=""/>
            </div>
            {props.online && <div className='absolute h-3 w-3 bg-emerald-700 rounded-full right-0 -bottom-0.5'></div>}
        </div>
    );
}

export default Avatar;

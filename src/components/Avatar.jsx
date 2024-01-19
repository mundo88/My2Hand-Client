import React from 'react';

const Avatar = ({children,...props}) => {
    const size = {
        'sm':'min-w-8 min-h-8 w-8 h-8',
        'md':'min-w-10 min-h-10 w-10 h-10',
        'lg':'min-w-12 min-h-12 w-12 h-12',
        'xl':'min-w-14 min-h-14 w-14 h-14',
        '2xl':'min-w-16 min-h-16 w-16 h-16',
    }
    
    return (
        <div className={`${ size[props.size] || size['md'] } overflow-hidden rounded-full`} {...props}>
            <img src={props.img ||'https://phanmemmkt.vn/wp-content/uploads/2022/11/avatar-tet-2023-cute-31.jpg'} className="object-cover w-full h-full" alt=""/>
        </div>
    );
}

export default Avatar;

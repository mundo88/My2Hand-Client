import React from 'react';

const InputFieldIcon =({children,...props})=>{

    return (
        <div className='flex items-center text-gray-800 justify-center bg-gray-200 h-full aspect-square' {...props}>
            {children}
        </div>
    )
};

const InputField = ({children,...props}) => {
    const size = {
        'sm':'h-8',
        'md':'h-10',
        'lg':'h-12',
        'xl':'h-14',
        '2xl':'h-16',
        'default':'h-10'
    }
    return (
        <div className={`flex ${size[props.size] || size['default']} bg-gray-100 overflow-hidden items-center rounded-md relative focus-within:ring-2 ring-offset-2 ring-offset-emerald-50 duration-150 ring-emerald-200`}>
            {children}
            <input type="text" className='h-full outline-none w-full bg-transparent px-4' {...props}/>
        </div>
    );
}

InputField.Icon = InputFieldIcon

export default InputField;

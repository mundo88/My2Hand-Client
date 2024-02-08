import React from 'react';

const InputFieldIcon =({children,...props})=>{

    return (
        <div className='flex items-center text-gray-800 justify-center h-full aspect-square' {...props}>
            {children}
        </div>
    )
};
const InputFieldInput = ({children,className,...props})=>{
    return (
        <input className={`h-full outline-none w-full bg-transparent ${className}`} {...props}/>
    )
}
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
        <div className={`flex ${size[props.size] || size['default']} bg-gray-100 overflow-hidden items-center rounded-${props.rounded || 'md'} relative focus-within:ring-2 ring-offset-2 ring-offset-cyan-50 duration-150 ring-cyan-200 overflow-hidden ${props.className}`}>
            {children}
        </div>
    );
}

InputField.Icon = InputFieldIcon
InputField.Input = InputFieldInput

export default InputField;

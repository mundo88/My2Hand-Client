import React from 'react'

const Button = ({children,text,...props})=>{
    var variantProps = {
        'primary': `${text || 'text-white'} bg-cyan-700 hover:bg-cyan-800`,
        'secondary' :`${text || 'text-gray-800'} bg-gray-100 hover:bg-gray-200`,
        'outline' : `${text || 'text-gray-800'} bg-white border border-gray-300 hover:bg-gray-100`,
        'text' : `${text || 'text-gray-600'} hover:text-cyan-700 bg-transparent hover:bg-gray-100`,
        'light' :`${text || 'text-gray-800'} bg-white hover:bg-gray-200`,
        'gradient':`${text || 'text-white'} bg-gradient-to-r from-purple-700 via-cyan-600 to-cyan-700`,
        'black':`${text || 'text-white'} bg-gray-800 hover:bg-gray-900`,
    }
    var sizeProps = {
        'sm': 'text-sm px-2 h-8 min-h-8',
        'md' :'text-md px-4 h-10 min-h-10',
        'lg' : 'text-lg px-6 h-12 min-h-12',
        'xl' : 'text-xl px-8 h-14 min-h-14',
        'sm-icon': 'text-sm w-8 h-8 min-h-8 min-w-8 max-h-8 max-w-8',
        'md-icon' :'text-md w-10 h-10 min-h-10 min-w-10 max-h-10 max-w-10',
        'lg-icon' : 'text-lg w-12 h-12 min-h-12 min-w-12 max-h-12 max-w-12',
        'xl-icon' : 'text-lg w-14 h-14 min-h-14 min-w-14 max-h-14 max-w-14',
    }
    
    return (
        <button {...props} className={`rounded-${props.rounded || 'lg'} font-medium duration-150 active:scale-95 ${sizeProps[props.size] || sizeProps['md']} ${variantProps[props.variant] || variantProps['secondary']} ${props.className ? props.className : ""} flex items-center justify-center gap-2 whitespace-nowrap` }>
            {children}
        </button>
    )
}




export default Button
export  {
    Button,
}
import React from 'react'

const Button = ({color, children}) => {

    return (
        <button style={{color: color}}>
            {children}
        </button>
    )
}

export default Button 
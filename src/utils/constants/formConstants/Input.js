import React from 'react'

const Input = ({ input, meta, ...rest }) => (
    <>
    <label>{rest.labelName}</label>
    <input {...input} {...rest} />
    
{meta.touched && meta.error && <span>{meta.error}</span>}
</>
    )



export default Input

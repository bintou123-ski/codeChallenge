import React from 'react'

function Input({type,name,placeholder,required,onChangeInput,value}) {
  return (
       
        <input
           type={type} 
           name={name} 
           placeholder={placeholder} 
           required={required} 
           value={value} 
           onChange={onChangeInput}
         />
    
  )
}

export default Input
import React from 'react'

import {IconContainer, InputContainer, InputText} from '../Input/styles'

const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputText {...rest}/>
    </InputContainer>
  )
}

export {Input};
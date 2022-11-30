import React from 'react'
import { TextInput } from 'react-native'

function Input({style, ...props}) {
    return (
        <TextInput
        {...props}
        style={{...style}}
        />
    )
}

export default Input
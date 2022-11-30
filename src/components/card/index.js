import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

function Card({children, style}) {
    return (
        <View style={{...styles.cardContainer, ...style}}>
            {children}
        </View>
    )
}

export default Card
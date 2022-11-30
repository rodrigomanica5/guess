import React from 'react'
import { Text } from 'react-native'
import { styles } from './styles'

function NumberContainer({number}) {
    return (
        <Text style={styles.number}>{number}</Text>
    )
}

export default NumberContainer
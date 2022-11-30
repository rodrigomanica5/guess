import React from 'react'
import { styles } from './styles'
import { Text, View } from 'react-native'
import colors from '../../constants/colors'


function Header() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.text}>GUESS</Text>
        </View>
    )
}

export default Header
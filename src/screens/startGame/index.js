import React, { useState } from 'react'
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Card, Input } from '../../components'
import colors from '../../constants/colors'
import { styles } from './styles'



function StartGameScreen() {

    const [number, setNumber] = useState('')

    const onHandleChange = (num) => {
        setNumber(num.replace(/[^0-9]/g, ''))
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Ready to start?</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Choose your number</Text>
                    <Input
                        style={styles.input}
                        placeholder='0'
                        maxLength={2}
                        keyboardType="number-pad"
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={number}
                        onChangeText={onHandleChange}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            title='Clear'
                            onPress={() => null}
                            color={colors.text}
                        />
                        <Button
                            style={styles.button}
                            title='Confirm'
                            onPress={() => null}
                            color={colors.text}
                        />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen
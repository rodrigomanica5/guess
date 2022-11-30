import React, { useState } from 'react'
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Card, Input, NumberContainer } from '../../components'
import colors from '../../constants/colors'
import { styles } from './styles'



function StartGameScreen({onHandleStartGame}) {

    const [number, setNumber] = useState('')
    const [numberConfirmed, setNumberConfirmed] = useState(null)
    // Estado de uso para render condicional
    const [confirmed, setConfirmed] = useState(false)

    const onHandleChange = (num) => {
        setNumber(num.replace(/[^0-9]/g, ''))
    }

    const onHandleClear = () => {
        setNumber('')
        setConfirmed(false)
    }

    const onHandleConfirm = () => {
        const selectedNumber = Number(number)
        // Este if valida si el input parseado es un número, si es mayor a 0 o si es menor a 99
        if ((isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99)) {
            return
        } else {
            setNumberConfirmed(selectedNumber)
            setConfirmed(true)
            setNumber('')
            Keyboard.dismiss()
        }
    }

    const confirmedOutput = () => {
        return (
            confirmed
                ? <Card style={styles.confirmedNumberCard}>
                    <View style={styles.confirmedNumberContainer}>
                        {
                            (numberConfirmed % 2 == 0)
                                ? <Text style={styles.confirmedText}>Even number!</Text>
                                : <Text style={styles.confirmedText}>Odd number!</Text>
                        }
                        <NumberContainer number={numberConfirmed}/>
                    </View>
                    <View>
                        <Button
                            title='Start Game'
                            onPress={() => onHandleStartGame(numberConfirmed)}
                            color={colors.text}
                        />
                    </View>
                </Card>
                : null
        )
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
                            onPress={onHandleClear}
                            color={colors.text}
                        />
                        <Button
                            style={styles.button}
                            title='Confirm'
                            onPress={onHandleConfirm}
                            color={colors.text}
                        />
                    </View>
                </Card>
                {confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen
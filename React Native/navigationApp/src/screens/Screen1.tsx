import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {
    Button,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

export const Screen1 = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Screen #1</Text>
            <Button
                title="Screen 2"
                onPress={() => { navigation.navigate('Screen2') }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={styles.bigButton}
                    onPress={() => navigation.navigate("PersonScreen", {
                        id: 1,
                        name: 'Kevin'
                    })}
                >
                    <Text style={styles.btnColorWhite}>Kevin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bigButton}
                    onPress={() => navigation.navigate("PersonScreen", {
                        id: 2,
                        name: 'María'
                    })}
                >
                    <Text style={styles.btnColorWhite}>María</Text>
                </TouchableOpacity>
            </View>
            <Button
                title="Person"
                onPress={() => { navigation.navigate('PersonScreen') }}
            />
        </View>
    )
}
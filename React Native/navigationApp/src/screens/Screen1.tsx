import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import {
    Button,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any, any> { }

export const Screen1 = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button 
                    title="Menú"
                    onPress={() => navigation.toggleDrawer()}
                />
            )
        });
    }, []);

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

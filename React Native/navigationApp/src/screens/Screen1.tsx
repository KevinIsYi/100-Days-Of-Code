import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Button,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { colors, styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any, any> { }

export const Screen1 = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 15
                    }}
                >
                    <Icon
                        name="menu-outline"
                        size={35}
                        color={colors.primary}
                        onPress={() => navigation.toggleDrawer()}
                    />
                </TouchableOpacity>
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
                    <Icon
                        name="body-outline"
                        size={35}
                        color="white"
                    />
                    <Text style={styles.btnColorWhite}>Kevin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bigButton}
                    onPress={() => navigation.navigate("PersonScreen", {
                        id: 2,
                        name: 'María'
                    })}
                >
                    <Icon
                        name="woman-outline"
                        size={35}
                        color="white"
                    />
                    <Text style={styles.btnColorWhite}>María</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

import React from 'react'
import { useState } from 'react'
import { View, Text, Button, Modal } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const ModalScreen = () => {

    const [isVissible, setIsVissible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />

            <Button
                title="Open Modal"
                onPress={() => setIsVissible(true)}
            />

            <Modal
                animationType="fade"
                visible={isVissible}
                transparent
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Modal's Body</Text>
                        <Button
                            title="Close"
                            onPress={() => setIsVissible(false)}
                        />
                    </View>
                </View>
            </Modal>

        </View>
    )
}

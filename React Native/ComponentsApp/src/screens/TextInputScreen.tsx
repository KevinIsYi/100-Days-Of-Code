import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const { name, email, phone } = form;

    const onChange = (value: string, field: string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="TextInputs" />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Name"
                            autoCorrect={false}
                            autoCapitalize="words"
                            value={name}
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                            keyboardAppearance="dark" // IOS
                        />

                        <HeaderTitle title={JSON.stringify(form, null, 4)} />
                        <HeaderTitle title={JSON.stringify(form, null, 4)} />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Phone"
                            value={phone}
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                        />

                        <HeaderTitle title={JSON.stringify(form, null, 4)} />

                        <View style={{ height: 100 }} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    }
});
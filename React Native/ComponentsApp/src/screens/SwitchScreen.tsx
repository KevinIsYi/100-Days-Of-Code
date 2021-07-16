import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const { isActive, isHungry, isHappy } = state;

    const onChange = (value: boolean, field: keyof typeof state) => {
        setstate({
            ...state,
            [field]: value
        });
    }

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Switches" />

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isActive</Text>
                <CustomSwitch
                    isOn={isActive}
                    onChange={(value) => onChange(value, 'isActive')}
                />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHungry</Text>
                <CustomSwitch
                    isOn={isHungry}
                    onChange={(value) => onChange(value, 'isHungry')}
                />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isActive</Text>
                <CustomSwitch
                    isOn={isHappy}
                    onChange={(value) => onChange(value, 'isHappy')}
                />
            </View>

            <Text style={styles.switchText}>
                {JSON.stringify(state, null, 4)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    }
});
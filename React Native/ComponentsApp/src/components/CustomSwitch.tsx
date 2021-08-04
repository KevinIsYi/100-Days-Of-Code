import React from 'react'
import { useState } from 'react'
import { Platform } from 'react-native'
import { Switch } from 'react-native-gesture-handler'

interface Props {
    isOn: boolean;
    onChange: (isEnabled: boolean) => void;
};

const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
            thumbColor={(Platform.OS === 'android' ? "#5856D6" : "")}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

export default CustomSwitch
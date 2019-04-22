import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChange, placeholder, secureTextEntry }) => {
    const { inputContainerStyle, inputStyle, labelStyle } = styles;
    return (
        <View style={inputContainerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChange}

            />
        </View>
    );
};
const styles = {
    inputContainerStyle: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
};
export { Input };

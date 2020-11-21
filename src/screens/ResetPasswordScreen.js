import React, { useState, useContext } from 'react';
import {AuthContext} from '../navigation/AuthRoute';
import {StyleSheet, Text, View} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';



export default function ResetPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const { resetPassword } = useContext(AuthContext);
    const [showMessage, setShowMessage] = useState(false);

    function onButtonClickHandler() {
        resetPassword(email);
        setShowMessage(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please enter your email address</Text>
            <FormInput
                value={email}
                placeholderText='Email'
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
            />
            <FormButton buttonTitle='Send' onPress={onButtonClickHandler} />
            {showMessage && <Text style={styles.textMessage}> If such email exists, you can now reset your password.</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        marginBottom: 25
    },
    textMessage: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 25,
        color: '#367f99',
        marginTop: 25
    },
});

import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthRoute';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>StartMeUp</Text>
            <FormInput
                value={email}
                placeholderText='Email'
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
            />
            <FormInput
                value={password}
                placeholderText='Password'
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry={true}
            />
            <FormButton buttonTitle='Login' onPress={() => login(email, password)} />
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.navButtonText}>Don't have an account?<Text style={styles.navButtonTextBold}> Signup here</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('ResetPassword')}
            >
                <Text style={styles.navResetText}>Forgot you password? Reset it here</Text>
            </TouchableOpacity>
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
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 50
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 16,
        color: '#000000',
        marginTop: 50
    },
    navResetText: {
        fontSize: 14,
        color: '#000000',
        marginTop: 20
    },
    navButtonTextBold: {
        fontWeight: "bold",
        color: '#367f99',
    }
});

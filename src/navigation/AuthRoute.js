import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

/**
 * This provider is created
 * to access user in whole app
 */

export const AuthContext = createContext({});

export const AuthRoute = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                        switch(e.code) {
                            case 'auth/wrong-password':
                                Alert.alert('The password is invalid.');
                                break;
                            case 'auth/invalid-email':
                                Alert.alert('The email address is badly formatted.');
                                break;
                        }
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                        switch(e.code) {
                            case 'auth/email-already-in-use':
                                Alert.alert('The email address is already in use by another account.');
                                break;
                            case 'auth/weak-password':
                                Alert.alert('The given password is invalid.');
                                break;
                            case 'auth/invalid-email':
                                Alert.alert('An email address must be provided or is badly formatted.');
                                break;
                        }
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.error(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

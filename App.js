import React, {useContext, useEffect, useState} from 'react';
import {AuthContext, AuthRoute} from './src/navigation/AuthRoute';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
// import components
import Loading from './src/components/Loading';
// import screens
import HomeStack from './src/navigation/HomeStack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

export function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
        setLoading(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <NavigationContainer>
            {user ?
                <HomeStack />
                :
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen
                        name='Login'
                        component={LoginScreen}
                        options={{ header: () => null }}
                    />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                </Stack.Navigator>}
        </NavigationContainer>
    );
}


function App() {
    return (
        <AuthRoute>
            <Routes />
        </AuthRoute>
    );
}

export default App

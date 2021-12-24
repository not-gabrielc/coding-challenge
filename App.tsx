import * as React from 'react';
import { AppRegistry, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { expo as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import CoinInfo from './src/CoinInfo';

const Stack = createNativeStackNavigator();


export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Info" component={CoinInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
    }
});

AppRegistry.registerComponent(appName.name, () => Main);
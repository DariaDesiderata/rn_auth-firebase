import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDCbbT5wx1XaAq3QgLp7ANq5Bc855jgHtI',
            authDomain: 'rn-auth-e0026.firebaseapp.com',
            databaseURL: 'https://rn-auth-e0026.firebaseio.com',
            projectId: 'rn-auth-e0026',
            storageBucket: 'rn-auth-e0026.appspot.com',
            messagingSenderId: '756133761639'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Login" />
                <LoginForm />
            </View>
        );
    }
}

export default App;

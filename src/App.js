import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = {
        loggedIn: null,
    }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDCbbT5wx1XaAq3QgLp7ANq5Bc855jgHtI',
            authDomain: 'rn-auth-e0026.firebaseapp.com',
            databaseURL: 'https://rn-auth-e0026.firebaseio.com',
            projectId: 'rn-auth-e0026',
            storageBucket: 'rn-auth-e0026.appspot.com',
            messagingSenderId: '756133761639'
        });
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    handleLogOut() {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => this.handleLogOut()}>Log out</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.containerStyle}>
                        <Spinner size="large" />
                    </View>);
        }
    }
    render() {
        return (
            <View style={{ height: 125 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </ View>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 30,
        height: 100,
        flex: 1
    }
};
export default App;

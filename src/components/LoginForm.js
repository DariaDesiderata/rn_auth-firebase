import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Card, CardItem, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }
    onLoginFail() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        });
    }
    renderButton() {
        return this.state.loading
            ? <Spinner size="small" />
            : <Button
                onPress={() => this.onButtonPress()}
            >Login</Button>;
    }
    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChange={email => this.setState({ email })}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={password => this.setState({ password })}
                    />
                </CardItem>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardItem>
                    {this.renderButton()}
                </CardItem>
            </Card>

        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
export default LoginForm;    

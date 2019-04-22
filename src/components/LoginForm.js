import React, { Component } from 'react';
import firebase from 'firebase';

import { Card, CardItem, Button, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' }
    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password);
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
                <CardItem>
                    <Button
                        onPress={() => this.onButtonPress()}
                    >Login</Button>
                </CardItem>
            </Card>

        );
    }
}
export default LoginForm;    

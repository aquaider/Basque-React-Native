import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Alert
} from 'react-native';
import Header from './src/components/Header';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
           email: "",
           password: ""
        };
    }

    onLogin() {
        Alert.alert(
            'Success',
            'You are authenticated with: ' + this.state.email,
            [
                {text: 'Ok', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: true }
        )
    }

    onEmailChange(text) {
        this.setState({
            email: text
        })
    }

    onChange(text) {
        this.setState({
            password: text
        })
    }

    render() {
        return (
            <View>
                <Header title="login"/>
                <View style={styles.body}>
                    <View>
                        <Text>Email address:</Text>
                        <TextInput onChangeText={this.onEmailChange.bind(this)}
                            placeholder="Please enter your email."/>
                    </View>
                    <View style={styles.passwordContainer}>
                        <Text>Password:</Text>
                        <TextInput secureTextEntry onChangeText={this.onChange.bind(this)} placeholder="Please enter your password."/>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={this.onLogin.bind(this)} style={styles.btn}>
                            <Text style={styles.btnTxt}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    body: {
        padding: 60
    },
    passwordContainer: {
        marginTop: 12
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: 25
    },
    btn: {
       width: 220,
       height: 40,
       backgroundColor: '#0aab0b',
       alignItems: 'center',
       justifyContent: 'center'

    },
    btnTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    }
});

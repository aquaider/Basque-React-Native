import React, {Component} from  'react';
import  { View, Text, StyleSheet, Platform } from 'react-native';

class Header extends Component{

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.headerTxt}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'android'? 56: 60,
        justifyContent: 'center',
        backgroundColor: '#0aab0b',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 4
    },
    headerTxt: {
        fontSize: 18,
        color: "white"
    }
});

export default Header;
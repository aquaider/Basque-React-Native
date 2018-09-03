import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTxt} >Back</Text>
            <Text style={styles.headerTxt} >Grocery</Text>
            <Text style={styles.headerTxt} >Next</Text>
          </View>
          <Text style={styles.welcomeTxt}>Welcome To React Native</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  header: {
    height: 56,
    backgroundColor: '#1c6623',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
    headerTxt: {
      color: '#FFF',
      fontSize: 20,
    },
    welcomeTxt: {
      fontSize: 24,
      marginTop: 15,
      textAlign: 'center'
    }

});

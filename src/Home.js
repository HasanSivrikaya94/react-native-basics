import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class home extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.headerText}>
                    This is the Homepage!
                </Text>   
                <TouchableOpacity style={styles.buttonCon}
                                    onPress={() => Actions.main()}>                            
                                    <Text style = {styles.text}>Tab here to switch to MainMenu</Text>
                </TouchableOpacity>              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonCon: {
        width: '45%',
        height: '10%',
        backgroundColor: '#7c7575',
        margin: 120,
        marginTop: 450,
        borderRadius: 10
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#6681d1'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        color: 'black'
    }
});
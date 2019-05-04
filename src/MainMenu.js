import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class home extends Component {

    
    constructor (props) {
        super(props);
        this.state = {
            filePath: {},
        };

        
    }
    chooseFile = () => { 
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert ('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                let source = response;
                this.setState({
                    filePath: source,
                });
              }
            });
          };
    render() {
        return (
            <View style={style.containerMain}>
                <View style={style.container}>
                <Text style={style.mainText}>
                    Import here your Image
                </Text>
                    <Image style={style.container}
                        source={{ uri: this.state.filePath.uri }}
                        style={{ width: 350, height: 350 }}
                    />
                    <TouchableOpacity style={style.imageButton}
                                       onPress={this.chooseFile.bind(this)} >
                        <Text style={style.textButton}>
                            IMPORT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimension.get('window').width,
    },
    containerMain: {
        height: '100%',
        width: '100%',
        backgroundColor: '#6681d1'
    },
    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        color: 'white'

    },
    imageButton: {
        backgroundColor: '#827777',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 10,
        width: '45%',
        height: '8%',
        marginTop: 13,
    },
    textButton: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
})
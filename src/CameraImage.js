import React, { Component } from 'react'
import { View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity, Image } from 'react-native'
import { RNCamera } from 'react-native-camera'
import RNFS, { stat } from 'react-native-fs'
import CameraRoll from '@react-native-community/cameraroll'

export default class CameraImage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: RNCamera.Constants.Type.back,
            size: {
                height: 50,
                width: 50
            },
            linked: 'true'
        }
    }

    componentDidMount() {
        try {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA

            )
        } catch (err) {
            console.warn(err)
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <RNCamera
                    ref={(ref) => { this.camera = ref }}
                    type={this.state.type}
                    style={styles.preview}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.capture} onPress={() => {
                        if (this.state.type == RNCamera.Constants.Type.back) {
                            return this.setState({ type: RNCamera.Constants.Type.front })
                        }
                        return this.setState({ type: RNCamera.Constants.Type.back })
                    }}>
                        <Text>SWITCH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text>SNAP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Large', { image: this.state.image })} style={styles.capture}>
                        <Image source={{ uri: this.state.image }} style={this.state.size} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            data = await this.camera.takePictureAsync(options)
            this.setState({ ...this.state, image: data.uri })
        }
    }

}
let data

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    }
})
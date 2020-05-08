import React from 'react'
import {Image, View, StyleSheet} from 'react-native'

export default class LargeImage extends React.Component{

    constructor(props){
        super(props)
    }

    render()
    {return(
        <View style={styles.main}>
            <Image source={{uri:this.props.navigation.getParam('image')}} style={{height:600, width:null}} />
        </View>
    )}

}

const styles=StyleSheet.create({
    main:{
        flex:1
    }

})

// export default LargeImage
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import CameraImage from './CameraImage'
import LargeImage from './LargeImage'

const Navigator = createStackNavigator({
    main:CameraImage,
    Large:LargeImage
},
{
    initailRouteName:'Search',
    navigationOptions: {
        headerVisible: false,
    }
})

export default createAppContainer(Navigator)


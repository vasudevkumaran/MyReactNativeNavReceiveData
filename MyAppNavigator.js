import React, {Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import Main from './screens/Main';
import Next from './screens/Next';

const Route = createStackNavigator(
    {
        Home:{screen:Main},
        Next:{screen:Next}
    },
    {
        initialRouteName:'Home'
    }
);

const AppContainer = createAppContainer(Route);

export default class MyComponent extends Component{
    render(){
        return <AppContainer/>
    }
}
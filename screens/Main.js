import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Main extends Component {

    static navigationOptions = {
        title:'Home'
    };

    constructor(props) {
        super(props);
        this.state = {textValue:''}
    }

    handleValue = (text) => this.setState({textValue:text});

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize:18,margin:10}}>{this.state.textValue}</Text>
                <Button title="Click this" onPress={() => { this.props.navigation.navigate('Next',{sendBack:this.handleValue})}}  />
            </View>
        );
    }
}

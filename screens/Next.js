import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';

export default class Next extends Component {
  static navigationOptions = {
    title: 'Next'
  };

  constructor(props){
      super(props)
      this.state = {inputValue:''}
  }

  sendPayloadBack = () => {
    this.props.navigation.state.params.sendBack(this.state.inputValue);
    this.props.navigation.goBack();
  }

  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput style={{width:200,height:40,borderWidth:1,borderColor:'blue',borderRadius:4, margin:10}} 
        value={this.state.inputValue} keyboardType='default' onChangeText={(text)=> this.setState({inputValue:text})}
        placeholder="Type here"
        />
        <Button title="Send back" onPress={this.sendPayloadBack}  />
    </View>
    );
  }
}
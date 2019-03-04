import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
import PlaceInputStyles from './PlaceInputStyles';

const { inputContainer, inputStyle } = PlaceInputStyles;

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={inputStyle}
        />
        <Button
          title="Add"
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

export default PlaceInput;
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from './components/PlaceList/PlaceList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      places: [] 
    };
  }

  addPlaceNameHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          value: placeName
        })
      }
    })
  }

  deletedPlaceHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.addPlaceNameHandler} />
        <PlaceList 
          places={this.state.places} 
          onItemDeleted={this.deletedPlaceHandler} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

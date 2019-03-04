import React, { Component } from 'react'
import { FlatList } from 'react-native'
import PlaceListStyles from './PlaceListStyles';
import ListItem from '../ListItem/ListItem'; 

const { listItemContainer } = PlaceListStyles;

const PlaceList = props => {
  return (
    <FlatList 
      style={listItemContainer}
      data={props.places}
      renderItem={(info) => {
        <ListItem
          placeName={info.item.value} 
          onItemPressed={() => props.onItemDeleted(info.item.key)} 
        />
      }} 
    />
  );
}

export default PlaceList;

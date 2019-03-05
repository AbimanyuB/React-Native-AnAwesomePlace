import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ListItemStyles from './ListItemStyles';

const { listItemContainer, listItemStyle } = ListItemStyles;

const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={listItemContainer}>
      <Image resizeMode='cover' source={props.placeImage} style={listItemStyle} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

export default ListItem;

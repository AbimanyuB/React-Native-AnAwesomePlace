import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import ListItemStyles from './ListItemStyles';

const { listItemContainer } = ListItemStyles;

const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={listItemContainer}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

export default ListItem;

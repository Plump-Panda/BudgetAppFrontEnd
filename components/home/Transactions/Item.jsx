import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Item({title, price, backgroundColor}) {
  return (
    <View style={{backgroundColor: backgroundColor}}>
      <Text>{title}   {price}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

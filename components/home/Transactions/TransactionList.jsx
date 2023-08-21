import React from 'react'
import { ScrollView, FlatList, StyleSheet, Text } from 'react-native'
import Item from './Item';

const DATA = [
  {price: 18, title: "Burger King"},
  {price: 18, title: "Burger King"},
  {price: 18, title: "Burger King"},
  {price: 18, title: "Burger King"},
  {price: 18, title: "Burger King"},
];

export default function TransactionList() {
  const colors = ["#FFFFFF", "#F1F1F1"];
  return (
    <ScrollView style={{textAlign: 'center'}}>
      <Text styles={styles.title}>Transactions</Text>
      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={({item, index}) => <Item backgroundColor={colors[index % 2 > 0 ? 0 : 1]} title={item.title} price={item.price}/>}
        keyExtractor={(item, index) => item.key}
      />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  title:{
    fontSize: 16,
    fontWeight: "bold",
  },
  list:{
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
  }
});

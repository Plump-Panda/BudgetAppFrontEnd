import React from 'react'
import { View, Text } from 'react-native'

import TransactionList from '../Transactions/TransactionList'

export default function Main() {
  return (
    <View>
      <Text>Main Page</Text>
      <TransactionList/>
    </View>
  )
};

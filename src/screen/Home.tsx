import { View, FlatList, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

import BottomOption from './../components/BottomOption'
import Header from './../components/Header'
import Content from './../components/Chat/Content'
import { data } from '../utils/Constant'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={data.result}
        inverted={true}
        renderItem={({ item, index }) => <Content {...item} />}
        keyExtractor={(item, index) => index.toString()}
        // onEndReached={getChatLog}
        onEndReachedThreshold={0.2} />
      <BottomOption />
    </SafeAreaView>
  )
}

export default Home

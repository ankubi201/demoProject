import { KeyboardAvoidingView, FlatList, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'

import BottomOption from './../components/BottomOption'
import Header from './../components/Header'
import Content from './../components/Chat/Content'
import { data } from '../utils/Constant'

const Home = () => {
  const onPress = () => {

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle={'light-content'} />
      <Header
        roomName={data.roomName}
        roomAvatarURL={data.roomAvatar}
        status={data.online}
        onPressCall={() => onPress}
        onPressVideoCall={() => onPress}
        onPressInformation={() => onPress}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior='padding'
        keyboardVerticalOffset={Platform.OS === 'android' ? -335 : 50}
      >
        <FlatList
          contentContainerStyle={{ padding: 16 }}
          data={data.result}
          inverted={true}
          renderItem={({ item, index }) => <Content {...item} />}
          keyExtractor={(item, index) => index.toString()}
          // onEndReached={getChatLog}
          onEndReachedThreshold={0.2} />
        <BottomOption
          onPressMore={() => onPress}
          onPressCamera={() => onPress}
          onPressImage={() => onPress}
          onPressRecord={() => onPress}
          onPressIcon={() => onPress}
          onPressSticker={() => onPress}
          onChangeText={() => onPress}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Home

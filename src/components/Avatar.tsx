import { View, Text, Image, StyleSheet, ImageStyle, FlexStyle } from 'react-native'
import React from 'react'

import { COLORS, FONT_SIZE } from '../utils/styleGlobal'

const Avatar = ({ style, dotStyle }: any) => {
    return (
        <View >
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/44/15/ba/4415ba5df0f4bfcee5893d6c441577e0.jpg' }}
                style={style}
            />
            <View style={[dotStyle, styles.dot]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: COLORS.GREEN,
    },
})
export default Avatar
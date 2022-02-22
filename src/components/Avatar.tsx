import { View, Image, StyleSheet, ImageStyle, ViewStyle } from 'react-native'
import React from 'react'

import { COLORS } from '../utils/styleGlobal'

interface AvatarProps {
    avatarURL: string
    style: ImageStyle
    dotStyle: ViewStyle
    status: Boolean
}
const Avatar = (props: AvatarProps) => {
    return (
        <View >
            <Image
                source={{ uri: props.avatarURL }}
                style={props.style}
            />
            {props.status ? <View style={[props.dotStyle, styles.dot]}></View> : null}
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
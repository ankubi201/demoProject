import { View, Text, StyleSheet, Dimensions, ViewStyle } from 'react-native'
import React from 'react'

import { COLORS, FONT_SIZE } from '../../utils/styleGlobal'

const { width } = Dimensions.get('window')

interface LineChatProps {
    content: string,
    style?: ViewStyle
}

const LineChat = (props: LineChatProps) => {
    return (
        <View style={[styles.lineChatContain, props.style]}>
            <Text style={styles.lineChatText}>{props.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    lineChatContain: {
        marginVertical: 2,
        padding: 10,
        borderRadius: 20,
        alignSelf: 'baseline',
        maxWidth: width * 0.8,
    },
    lineChatText: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE.CONTENT
    },
})

export default LineChat
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import { COLORS, FONT_SIZE } from '../../utils/styleGlobal'

const { width } = Dimensions.get('window')

const LineChat = ({ content }: any) => {
    let is_user = false
    return (
        <View style={[styles.lineChatContain, { alignSelf: is_user ? 'flex-start' : 'flex-end' }]}>
            <Text style={styles.lineChatText}>{content}</Text>
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
        backgroundColor: COLORS.PLACEHOLDER_TEXT_COLOR
    },
    lineChatText: {
        // color: COLORS.WHITE,
        color: "#f6f6f6",
        fontSize: FONT_SIZE.CONTENT
    },



})

export default LineChat
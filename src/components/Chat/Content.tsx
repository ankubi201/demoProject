import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import LineChat from './LineChat'
import Avatar from '../Avatar'
import { me } from './../../utils/Constant'
import { COLORS } from '../../utils/styleGlobal'

const Content = (item: any) => {
    const is_mainuser = item?.username !== me.username
    return (
        <View >
            {item?.time ? <Text style={styles.textTime}>{item?.time}</Text> : null}
            {
                is_mainuser ?
                    <View style={styles.chatItem}>
                        <View style={{ justifyContent: "flex-end" }}>
                            <Avatar style={styles.avatar} dotStyle={styles.dot} />
                        </View>
                        <View style={{ marginLeft: 8 }}>
                            <Text style={styles.textName}>{item?.username}</Text>
                            {item?.message?.map((item: any) =>
                                <LineChat content={item.value} is_mainuser={is_mainuser} />
                            )}
                        </View>
                    </View>
                    :
                    item?.message?.map((item: any) =>
                        <LineChat content={item.value} is_mainuser={is_mainuser} />
                    )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     // paddingHorizontal: 16,
    // },
    textTime: {
        textAlign: "center",
        marginBottom: 12,
        color: COLORS.BORDER_BOTTOM_COLOR
    },
    chatItem: {
        flexDirection: "row",
        marginBottom: 12
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 20,
    },
    textName: {
        marginLeft: 8,
        color: COLORS.TEXT_COLOR_DESCRIPTION
    },
    dot: {
        bottom: 2,
        right: 0,
        position: "absolute"
    },
})
export default Content
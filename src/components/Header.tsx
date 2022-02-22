import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, FONT_SIZE } from '../utils/styleGlobal'
import Avatar from '../components/Avatar'

interface OptionProps {
    roomName: string
    roomAvatarURL: string
    status: Boolean
    onPressCall: () => {}
    onPressVideoCall: () => {}
    onPressInformation: () => {}
}

interface TitleProps {
    roomName: string
    roomAvatarURL: string
    status: Boolean
}

interface OptionButtonProps {
    onPressCall: () => {}
    onPressVideoCall: () => {}
    onPressInformation: () => {}
}

const OptionButton = (props: OptionButtonProps) => {
    return (
        <View style={styles.viewButtonOption}>
            <TouchableOpacity onPress={props.onPressCall}>
                <Icon name="call" size={FONT_SIZE.HEADER} color={COLORS.PURPLE} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={props.onPressVideoCall}>
                <Icon name="videocam" size={FONT_SIZE.HEADER} color={COLORS.PURPLE} />
                <View style={styles.dot}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPressInformation}>
                <Icon name="ios-information-circle-sharp" size={FONT_SIZE.HEADER} color={COLORS.PURPLE} />
            </TouchableOpacity>
        </View>
    )
}

const Title = (props: TitleProps) => {
    return (
        <TouchableOpacity style={styles.viewTitle} activeOpacity={0.8}>
            <Avatar
                style={styles.avatar}
                dotStyle={styles.status}
                avatarURL={props.roomAvatarURL}
                status={props.status} />
            <Text style={styles.title}>{props.roomName}</Text>
        </TouchableOpacity>
    )
}

const Header = (props: OptionProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="ios-arrow-back" size={FONT_SIZE.HEADER} color={COLORS.PURPLE} />
            </TouchableOpacity>
            <Title
                roomName={props.roomName}
                roomAvatarURL={props.roomAvatarURL}
                status={props.status}
            />
            <OptionButton
                onPressCall={props.onPressCall}
                onPressVideoCall={props.onPressVideoCall}
                onPressInformation={props.onPressInformation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 56,
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: "black"
    },
    viewButtonOption: {
        flexDirection: "row",
        height: 56,
        alignItems: 'center',
        flex: 1,
        justifyContent: "space-between"
    },
    viewTitle: {
        flexDirection: "row",
        height: 56,
        alignItems: 'center',
        flex: 2,
        paddingHorizontal: 10,
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginLeft: 3,
        backgroundColor: COLORS.GREEN
    },
    title: {
        color: "#fff",
        fontWeight: "700",
        fontSize: FONT_SIZE.CONTENT
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    status: {
        right: 10,
        bottom: 3,
        position: "absolute"
    }
})

export default Header
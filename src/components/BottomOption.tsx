import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, FONT_SIZE } from '../utils/styleGlobal'

const OptionButtonView = () => {
    return (
        <View style={styles.buttonViewContainer}>
            <TouchableOpacity>
                <Icon name="apps" size={FONT_SIZE.HEADER} color={COLORS.PRIMARY_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="camera" size={FONT_SIZE.HEADER} color={COLORS.PRIMARY_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="md-image-sharp" size={FONT_SIZE.HEADER} color={COLORS.PRIMARY_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="mic" size={FONT_SIZE.HEADER} color={COLORS.PRIMARY_COLOR} />
            </TouchableOpacity>
        </View>
    )
}

const BottomOption = () => {
    return (
        <View style={styles.container}>
            <OptionButtonView />
            <View style={styles.inputViewContainer}>
                <TextInput style={styles.textInput} placeholder={"Aa"} placeholderTextColor={"#989898"}/>
                <TouchableOpacity style={{ flex: 1 }}>
                    <Icon name="happy" size={FONT_SIZE.HEADER} color={COLORS.PRIMARY_COLOR} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.iconView}>
                <IconAntDesign name="like1" size={FONT_SIZE.HEADER} color={COLORS.PRIMARY_COLOR} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 56,
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: "black",
    },
    buttonViewContainer: {
        flexDirection: "row",
        height: 56,
        alignItems: 'center',
        flex: 4,
        justifyContent: "space-between"
    },
    inputViewContainer: {
        flexDirection: "row",
        alignItems: 'center',
        flex: 7,
        borderRadius: 20,
        height: 40,
        backgroundColor: COLORS.GREY,
        paddingHorizontal: 5,
        justifyContent: "space-between"
    },
    textInput: {
        height: 40,
        flex: 7,
        marginRight: 5
    },
    iconView: {
        flex: 1,
        alignItems: "flex-end"
    }
})

export default BottomOption
import React, { useState, useReducer} from 'react'
import {
    View, Text, Image, StyleSheet, Dimensions
} from 'react-native'
import * as Location from 'expo-location'

const screenWidth = Dimensions.get('screen').width

export const LandingScreen = () => {

    const [errorMsg, setErrorMsg] = useState("")
    const [address, setAddress] = useState<Location.Address>()

    const [displayAddress, setDisplayAddress] = useState("")
     
    return (
        <View style={styles.container}>
            <View style={styles.navigation} />
             <View style={styles.body}>
                 <Image source={require('../images/')} style={styles.deliveryIcon} />
                 <View style={styles.addressContainer}>
                    <Text style={styles.addresTitle}>
                         Your delivery adress
                    </Text>
                 </View>
             </View>

        <View style={styles.footer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(242,242,242,1)'
    },
    navigation: {
        flex: 2,
    },
    addressContainer: {
        width: screenWidth - 100,
        borderBottomColor: '#707',
        borderBottomWidth: 0.5,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    addresTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#707070'
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(242,242,242,1)'
    },
    deliveryIcon: {
        width: 120,
        height: 120
    },
    footer: {
        flex: 1,
    }
})
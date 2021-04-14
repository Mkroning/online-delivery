import React, { useState, useReducer, useEffect} from 'react'
import {
    View, Text, Image, StyleSheet, Dimensions
} from 'react-native'
import * as Location from 'expo-location'

import { connect } from 'react-redux'
import { onUpdateLocation, UserState, ApplicationState } from '../redux'

import { useNavigation } from '../utils'

const screenWidth = Dimensions.get('screen').width

interface LandingProps{
  userReducer: UserState,
  onUpdateLocation: Function
}

const _LandingScreen: React.FC<LandingProps> = (props) => {
    const { userReducer, onUpdateLocation} = props;

    const { navigate } = useNavigation();

    const [errorMsg, setErrorMsg] = useState("")
    const [address, setAddress] = useState<Location.Address>()

    const [displayAddress, setDisplayAddress] = useState("")

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync()

            if (status !== 'granted'){
                setErrorMsg('Permission to acess location is not granted')
            }
            let location: any = await Location.getCurrentPositionAsync({})

            const { coords } = location

            if (coords) {
                const { latitude, longitude } = coords

                let addressResponse: any = await Location.reverseGeocodeAsync({
                    latitude, longitude
                })
                for(let item of addressResponse){
                  setAddress(item)
                  onUpdateLocation(item)
                  let currentAddress = `${item.name},${item.street}, ${item.postalCode}, ${item.country}`
                  setDisplayAddress(currentAddress)

                    if(currentAddress.length > 0) {
                        setTimeout(() => {
                            navigate('homeStack')
                        }, 10)
                    }

                    return;
                }

            } else {

            }
        })();

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.navigation} />
             <View style={styles.body}>
                 <Image source={require('../images/icon.png')} style={styles.deliveryIcon} />
                 <View style={styles.addressContainer}>
                    <Text style={styles.addresTitle}>
                        BeautyArt
                    </Text>
                 </View>
                <Text style={styles.addressText}> {displayAddress}</Text>

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
    addressText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#4f4f4f'
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


const mapToStateProps = (state:ApplicationState) => ({
  useReduce: state.userReducer
})

const LandingScreen = connect(mapToStateProps, { onUpdateLocation })(_LandingScreen)

export { LandingScreen }

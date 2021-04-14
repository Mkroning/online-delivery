import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { connect } from 'react-redux'
import { onAvailability, UserState, ApplicationState, ServiceState } from '../redux'
// import { Container } from './styles';

interface HomeProps{
  userReducer: UserState,
  serviceReducer: ServiceState,
  onAvailability: Function
}

const _HomeScreen: React.FC<HomeProps> = (props) => {

  const { location } = props.userReducer;
  const { availability } = props.serviceReducer;
  const { categories, services, providers } = availability
  useEffect(() => {
    props.onAvailability(location.postalCode)
  }, [])

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
              <View style={{marginTop:50, flex:1, backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, alignItems: 'center', justifyContent:'center', flexDirection: 'row'}}>
              <Text>{`${location.name}, ${location.street}, ${location.city}`}</Text>
              </View>
              <View style={{ flex: 8, backgroundColor: '#D3D3D3'}}>
                <Text>Search bar</Text>
              </View>
            </View>
            <View style={styles.body}>
                <Text>  </Text>
            </View>
            <View style={styles.footer}>
                <Text>  </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f4f4f'
    },
    navigation: {
        flex: 2,
        backgroundColor: '#D3D3D3'
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3'
    },
    footer: {
        flex: 1,
        backgroundColor: '#D3D3D3'
    }
})

const mapToStateProps = (state:ApplicationState) => ({
  useReduce: state.userReducer,
  serviceReducer: state. serviceReducer

})

const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen)

export { HomeScreen }

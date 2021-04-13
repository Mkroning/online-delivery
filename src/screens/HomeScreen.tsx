import React from 'react';
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

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text>{JSON.stringify(location)}</Text>
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
        backgroundColor: 'white'
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    footer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

const mapToStateProps = (state:ApplicationState) => ({
  useReduce: state.userReducer,
  serviceReducer: state. serviceReducer

})

const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen)

export { HomeScreen }

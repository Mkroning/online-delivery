import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

export  const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}> 
                <Text></Text> 
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

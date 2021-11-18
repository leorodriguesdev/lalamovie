import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';

export function Home() {

    return (

        <View style={styles.container}>
            <Header />
            <Slider />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#000',
    }
});

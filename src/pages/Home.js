import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { TopRated } from '../components/TopRated';

export function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
                <Slider />
                <TopRated />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        justifyContent: 'flex-start',
        backgroundColor: '#000',
    }
});

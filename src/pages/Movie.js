import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { Header } from '../components/Header';
import { MovieDetails } from '../components/MovieDetails';

export function Movie() {

    return (
           <SafeAreaView style={styles.container}>
                <View>
                    <Header />
                    <MovieDetails />
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

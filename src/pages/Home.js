import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { TopRated } from '../components/TopRated';
import { LowestRated } from '../components/LowestRated';

export function Home( { navigation } ) {
    

    return (
        <ScrollView >
           <SafeAreaView style={styles.container}>
                <View>
                    <Header />
                    <Slider />
                    <TopRated 
                    navigate={navigation.navigate}
                    />
                    <LowestRated/>
                </View>
            </SafeAreaView>
        </ScrollView>
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

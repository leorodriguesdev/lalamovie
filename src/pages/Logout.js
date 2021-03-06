import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { Text } from 'react-native-elements';

export function Logout() {


    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View>
                    <Header />

                    <Text>Logout</Text>
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

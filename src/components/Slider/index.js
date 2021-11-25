import React from 'react';
import {StyleSheet,View, Image} from 'react-native';




export function Slider(){

    return (
            <View>
                <Image source={require('../../assets/ethernals.jpg')} //temporario para teste
                        style={styles.banner}
                />

            </View>
            
)}

const styles = StyleSheet.create({

    banner:{
        width: '100%',
        height: 300,
        marginTop: 10,

    }
});
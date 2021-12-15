import React, { useState } from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';





export function Header(){
    const [text, setText] = useState('');

    return (

        <View  style={styles.container}>
            <Icon name="menu" size={35} color="white"/>
            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <Icon name="search" size={35} color="white"/>
            
        </View>

)}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    logo: {
        width: 150,
        height: 90,
    }
});
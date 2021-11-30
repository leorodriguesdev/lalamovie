import React, { useState } from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';





export function Header(){
    const [text, setText] = useState('');

    return (

        <View  style={styles.container}>
            
            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <TextInput 
                 style={styles.input}   
                 placeholder='Search'
                 autoCapitalize='none'
                 autoCorrect={false}
                 value={text}
                 onChangeText={(value) => setText(value)}    
            />
            <Icon name="search" size={30} color="white"/>
            <Icon name="menu" size={50} color="white"/>
            
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
    },
    input: {
        flex: 1,
        backgroundColor: '#484646',
        borderRadius: 15,
        fontSize: 18,
        paddingHorizontal: 10,
        marginHorizontal: 10,  
    }


});
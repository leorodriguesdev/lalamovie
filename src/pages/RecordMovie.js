import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';
import { Header } from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-elements/dist/buttons/Button';


export function RecordMovie() {


    return (

        <ScrollView>
            <Header />
            <SafeAreaView style={styles.container}>

                <View style={styles.content}>

                    <Text style={styles.text}>
                        <Text style={styles.bar}>|</Text>  Record New Movie
                    </Text>
                    
                    <View style={styles.uploadImg}>
                    <Icon name="upload-file" size={100} color="white" />
                    <Text style={styles.selectImg}>Select Image to Upload</Text>
                    </View>

                    <TextInput style={styles.input} placeholder="Movie Title" />
                    <View style={styles.inputRow}>
                    <TextInput type='number 'style={styles.inputYear} placeholder="Year" />
                    <TextInput style={styles.inputGender} placeholder="Gender" />
                    </View>
                    <TextInput style={styles.inputDescrip} placeholder="Description" />
                    <TextInput style={styles.input} placeholder="Director" />
                    <TextInput style={styles.input} placeholder="Cast" />
                    <Button     
                    title="Record Movie"
                    buttonStyle={styles.button}
                    />
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    content: {
        width: '95%',
        height: '100%',
        backgroundColor: '#121212',
        borderRadius: 4,
        marginVertical: 5,
        paddingVertical: 10,        
        marginTop: 20,

        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        marginVertical: 20,

    },
    bar: {
        color: "#FDD030",
    },
    uploadImg: {
        width: 200,
        height: 200,
        borderRadius: 10,
        backgroundColor: '#484646',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectImg: {
        fontSize: 14,
        color: "#c4c4c4",
    },
    input: {
        width: '95%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#484646',
        marginVertical: 10,
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: 16,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
    },
    inputYear: {
        width: '47%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#484646',
        marginVertical: 10,
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: 16,
    },
    inputGender: {
        width: '47%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#484646',
        marginVertical: 10,
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: 16,
    },
    inputDescrip: {
        width: '95%',
        height: 120,
        borderRadius: 10,
        backgroundColor: '#484646',
        marginVertical: 10,
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: 16,
    },
    button: {
        width: 350,
        height: 50,
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: '#FDD030',
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

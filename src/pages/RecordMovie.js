import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {storeData, getData} from '../store/storage';
import saveMovieService from '../services/movieService';

export function RecordMovie() {

    const [title, setTitle] = React.useState(null);      
    const [year, setYear] = React.useState(null);
    const [genre, setGenre] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [director, setDirector] = React.useState(null);
    const [cast, setCast] = React.useState(null);
    const [image, setImage] = React.useState(null);


// metodo factory metodo responsavel por criar objetos 
    function createNewMovie(){ 
        const movie = {
            title: title,
            year: year, 
            genre: genre,
            description: description,
            director: director,
            cast: cast
        }
        return movie;
    }

    function saveMovie (){
        const movie = createNewMovie() 
        saveMovieService(movie);
    }




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

                    <TextInput 
                    style={styles.input} 
                    placeholder="Movie Title" 
                    placeholderTextColor="gray"
                    />
                    <View style={styles.inputRow}>
                    <TextInput 
                    style={styles.inputYear} 
                    placeholder="Year" 
                    placeholderTextColor="gray"
                    />
                    <TextInput 
                    style={styles.inputGender} 
                    placeholder="Gender" 
                    placeholderTextColor="gray"
                    />
                    </View>
                    <TextInput 
                    style={styles.inputDescrip} 
                    placeholder="Description" 
                    placeholderTextColor="gray"
                    />
                    <TextInput 
                    style={styles.input} 
                    placeholder="Director" 
                    placeholderTextColor="gray"
                    />
                    <TextInput 
                    style={styles.input} 
                    placeholder="Cast" 
                    placeholderTextColor="gray"
                    />
                    
                    <TouchableOpacity   
                    style={styles.button}
                    onPress={saveMovie}
                    underlayColor='#fff'>
                    <Text style={styles.buttonText}>Record Movie</Text>
                    </TouchableOpacity>    

                </View>
            </SafeAreaView>
        </ScrollView>
    );

// () executa a funcao
// sem () referencia a funcao 


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
        alignItems: 'center',
        },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign:'center',
        paddingVertical: 15,

    },
});


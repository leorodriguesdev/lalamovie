import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../components/Header';
import { MovieDetails } from '../components/MovieDetails';
import { Comment } from '../components/comment';


export function Movie({route}) {

    const {    id,title, image, note, rank, synopsis, director, cast} = route.params.movie;
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content} key={id}>
            <Image
                source={require('../assets/bannerMovie.jpg')}
                style={styles.imageMovie}
            />
            <View style={styles.title}>
                <Text style={styles.nameMovie}>{title}</Text>
                <Icon name="star" size={22} color="yellow" />
                <Text style={styles.note}>{note}</Text>

            </View>
            <Text style={styles.subTitle}>{rank}</Text>
            <Text style={styles.titleSinopse}>Sinopse</Text>
            <Text style={styles.sinopse}>
                {synopsis}
            </Text>

                <Text style={styles.cast}>{director}</Text>
                <Text style={styles.cast}>{cast}</Text>

        </View>
        <Comment />
        <Comment />
        <Comment />

    </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        alignItems: 'center',
        backgroundColor: '#000',

    },
    content: {
        width: '95%',
        height: 809,
        backgroundColor: '#121212',
        borderRadius: 4,
        marginHorizontal: 20,
        marginVertical: 5,
        alignItems: 'center',
    },
    imageMovie: {
        width: 303,
        height: 450,
        marginHorizontal: 12,
        marginVertical: 20,
    },
    title: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameMovie: {
        fontSize: 24,
        color: '#fff',
        marginHorizontal: 15

    },
    note: {
        fontSize: 20,
        color: "#fff",
        paddingHorizontal: 3,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 10,
        color: '#fff',
        marginHorizontal: 15,
    },
    titleSinopse: {
        fontSize: 18,
        color: '#fff',
        marginHorizontal: 15,
        marginTop: 10,
        textAlign: 'justify',
    },
    sinopse: {
        fontSize: 14,
        color: '#fff',
        marginHorizontal: 15,
        marginTop: 10,
        textAlign: 'justify',

    }, 
    cast: {
        fontSize: 14,
        color: '#fff',
        marginHorizontal: 15,
        marginTop: 10,
        textAlign: 'justify',
    }
});
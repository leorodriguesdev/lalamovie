import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Comment } from "../comment";



export function MovieDetails({movie}) {

 //   const { image, title, note, rank, synopsis, director, cast} = movie;




    return (
        <View style={styles.container}>
        <View style={styles.content}>
            <Image
                source={require('../../assets/bannerMovie.jpg')}
                style={styles.imageMovie}
            />
            <View style={styles.title}>
                <Text style={styles.nameMovie}>As tranças de um careca</Text>
                <Icon name="star" size={22} color="yellow" />
                <Text style={styles.note}>8.9</Text>

            </View>
            <Text style={styles.subTitle}>Classificação 89 anos</Text>
            <Text style={styles.titleSinopse}>Sinopse</Text>
            <Text style={styles.sinopse}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem velit tempore praesentium accusantium officiis a
                soluta aperiam quisquam, atque provident dolor saepe ipsa esse
                repudiandae animi, quaerat voluptatibus ullam! Accusantium!
            </Text>

                <Text style={styles.cast}>Fulano de tal</Text>
                <Text style={styles.cast}>Ciclano de tal</Text>

        </View>
        <Comment />
        <Comment />
        <Comment />

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        alignItems: 'center',
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
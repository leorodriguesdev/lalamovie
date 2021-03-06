import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


   

export function Card({ navigationToMovie, movie}) {
   
    const { title, year, posterUrl, image } = movie; 

 return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                
                //source={image}
                 source={ {uri: posterUrl } }
            />
            <TouchableOpacity style={styles.content}>
                <View style={styles.vote}>
                    <Icon name="star" size={18} color="yellow" />
                    
                    {/* <Text style={styles.note}>{note}</Text> */}
                    <Text style={styles.note}>{year}</Text>
                </View>
                <Text style={styles.movieTitle}>{title}</Text>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.button}
                    onPress={() => navigationToMovie(movie)}
                ><Text style={styles.buttonText}>+ Ver mais</Text>
                </TouchableOpacity>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 240,
        borderRadius: 4,
        flexDirection: 'column-reverse',
        marginHorizontal: 10

    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 4,

    },
    content: {
        width: '100%',
        height: 106,
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 0,
    },
    vote: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 3,
        paddingVertical: 2,
    },
    note: {
        fontSize: 15,
        color: "#fff",
        paddingHorizontal: 3,
    },
    movieTitle: {
        fontSize: 14,
        paddingHorizontal: 3,
        paddingVertical: 3,
        color: "#fff",
    },
    button: {
        width: 130,
        height: 40,
        flexDirection: 'column',
    },
    buttonText: {
        fontSize: 14,
        color: "#FDD030",
        textAlign: 'center',
        paddingVertical: 6,
        fontWeight: "bold",
    }



});
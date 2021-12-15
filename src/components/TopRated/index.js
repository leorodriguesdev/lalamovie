import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { movieData } from "../../services/movieData";
import { Card } from "../Card";
//import movieList from "../../services/movieList";
import { getMovielist } from "../../services/movieService";




export function TopRated(props) {


    const [movies, setMovies] = useState(undefined);


    const callback = (movieData) => {
        setMovies(movieData);
    }

    useEffect(() => {
        getMovielist(callback) 
    }, [])


    const { navigate } = props;

    const meuNavigationToMovie = (_movie) => {
        navigate("Movie", { movie: _movie });
    }

    const meuRenderItem = ({ item }) => (
        <Card movie={item} navigationToMovie={meuNavigationToMovie} />
    )


    return (
        <View >
            <Text style={styles.title}>
                <Text style={styles.bar}>|</Text>  Top Rated
            </Text>

            <FlatList
                //contentContainerStyle={{flexGrow: 1}}
                data={movies}
                showsHorizontalScrollIndicator={false}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={meuRenderItem}

            >
            </FlatList>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        marginVertical: 10,

    },
    bar: {
        color: "#FDD030",
    },
    card: {
        marginHorizontal: 10,
    }


});
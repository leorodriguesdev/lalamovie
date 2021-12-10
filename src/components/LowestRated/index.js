import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import movieData from "../../services/movieData";
import movieList  from "../../services/movieList";

import { Card } from "../Card";



export function LowestRated( props ) {

    const { navigate } = props;

    const meuNavigationToMovie = () => {
        navigate("Movie")
    }   

    const meuRenderItem = ({item}) => (
        <Card movie={item} navigationToMovie={meuNavigationToMovie}/>
    )
    return (
            <View>
                <Text style={styles.title}>
                    <Text style={styles.bar}>|</Text>  Lowest Rated
                </Text>

                <FlatList
                    //contentContainerStyle={{flexGrow: 1}}
                    data={movieList}
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
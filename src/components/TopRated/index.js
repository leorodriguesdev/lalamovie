import React , {useEffect, useState} from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import movieList from "../../services/movieList";
import { Card } from "../Card";




export function TopRated( props ) {

    // const [movies,setMovies] = useState(undefined);

    // const metodo = (callback)=>{
    //     movies = buscarListaDeFilmes();
    //     callback(movies);
    // }
    // // useEffect(()=>{
    // //     //import o metodo que lista os top rateds
    // //     //chamar o método e definir um meio para que esse método atuaklize o estado
        
    // //     // setMovies([]);
    // //     metodo((movies)=>{
    // //         setMovies(movies);
    // //     })
    // // },[]);

    

    const { navigate } = props;

    const meuNavigationToMovie = () => {
        navigate("Movie")
    }   

    const meuRenderItem = ({item}) => (
        <Card movie={item} navigationToMovie={meuNavigationToMovie}/>
    )
    
    
    return (
            <View >
                <Text style={styles.title}>
                    <Text style={styles.bar}>|</Text>  Top Rated
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
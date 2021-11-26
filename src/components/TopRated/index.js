import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Card } from "../Card";



export function TopRated() {
    return (
            <View>
                <Text style={styles.title}>
                    <Text style={styles.bar}>|</Text>  Top Rated
                </Text>

                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={"start"}
                    decelerationRate={"fast"}
                    keyExtractor={(item) => item.toString()}
                    horizontal
                    renderItem={() => <Card style={{ marginHorizontal: 10 }}/>}
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
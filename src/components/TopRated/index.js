import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card } from "../Card";



export function TopRated() {
    return (
            <View>
                <Text style={styles.title}>
                    <Text style={styles.bar}>|</Text>  Top Rated
                </Text>
                <Card/>

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
      }
});
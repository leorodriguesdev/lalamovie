import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet, TextInput } from "react-native";



export function Comment() {
    return (
        <View style={styles.comment}>
            <View style={styles.content}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/user.png')} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>Leonardo Santos</Text>
                    <Text style={styles.email}>email@email.com</Text>
                </View>
            </View>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    editable={false}
                >Comentário</TextInput>

            </View>
 

        </View>
    );
}

const styles = StyleSheet.create({
    comment: {
        width: '95%',
        height: 186,
        backgroundColor: '#121212',
        borderRadius: 4,
        marginTop: 10,
	
    },
    avatar: {
        width: 37,
        height: 37,
        margin: 9,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    content: {
        alignItems: 'center',
        margin: 5,
        flexDirection: 'row',
    },
    userInfo: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',

    },
    email: {
        fontSize: 12,
        color: '#fff',

    },
    inputArea: {
        flex: 1,
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'space-between', 
    },
    input: {
        flex: 1,
        width: '100%',
        height: 89,
        backgroundColor: '#444343',
        borderRadius: 4,
        color: '#fff',
        fontSize: 16,
        padding: 10,
        alignItems: 'flex-start',
    }
});

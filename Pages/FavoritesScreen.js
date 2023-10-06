import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ScrollView } from "react-native";
import { addToFavorites, removeFromFavorites } from "../components/FavoritesReducer";
import { useState } from "react";

const FavoritesScreen = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);
    const [removeCount, setRemoveCount] = useState(0);

    const handleRemoveFromFavorites = (id) => {
        dispatch(removeFromFavorites(id));
        setRemoveCount(removeCount + 1);
    };

    const handleAddToFavorites = (quote) => {
        dispatch(addToFavorites(quote));
    };

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <ImageBackground source={require('../assets/background.jpeg')} resizeMode="cover" style={{ height: 1000 }}>
                {favorites.length === 0 ? (
                    <Text style={styles.noFavoritesText}>You have no favorites yet.</Text>
                ) : (
                    favorites.map((favorite) => (
                        <View key={favorite.quote + removeCount} style={styles.favoriteContainer}>
                            <Text style={styles.favoriteQuote}>
                                {favorite.quote}
                            </Text>
                            <TouchableOpacity onPress={() => handleRemoveFromFavorites(favorite.id)}>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    style={styles.trashIcon}
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                    ))
                )}
            </ImageBackground>
        </ScrollView>
    );
};


const styles = StyleSheet.create({


    button: {
        backgroundColor: '#c41e12',
        color: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        height: 60,
        width: 150,
        borderRadius: 40,
        marginLeft: 130,
        marginTop: 50,
        paddingLeft: 43,
        fontSize: 40
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#fff'
    },
    ashley: {
        color: '#fff',
        textAlign: 'center'
    },
    quote: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 40,
        margin: 30,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    icon: {
        textAlign: 'center',
        color: "#000000",
    },
    iconButton: {
        backgroundColor: '#d20404',
        borderRadius: 40,
        height: 60,
        width: 60,
        marginLeft: 185,
        padding: 15
    },
    noFavoritesText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 40
    },
    favoriteQuote: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        margin: 10,
        fontStyle: 'italic'
    },
    trashIcon: {
        color: '#fff'
    },

    favoriteContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        marginVertical: 10,
    },
});

export default FavoritesScreen;

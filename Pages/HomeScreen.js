import { Alert, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addToFavorites, removeFromFavorites } from '../components/FavoritesReducer';
import { ScrollView } from 'react-native-gesture-handler';
import { faDragon } from '@fortawesome/free-solid-svg-icons';


const HomeScreen = () => {

    const quotes = [
        {
            id: 0,
            quote: '"Leave one wolf alive and the sheep are never safe." - Arya Stark'
        },
        {
            id: 1,
            quote: '“All my life men like you have sneered at me. And all my life I have been knocking men like you into the dust.” - Brienne of Tarth'
        },
        {
            id: 2,
            quote: '"When you play the game of thrones, you win or you die. There is no middle ground." - Cersei Lannister'
        },
        {
            id: 3,
            quote: '"Power is power." - Cersei Lannister'
        },
        {
            id: 4,
            quote: ' "I am not your little princess. I am Daenerys Stormborn of the blood of old Valyria and I will take what is mine—with fire and blood, I will take it." - Daenerys Targaryen '
        },
        {
            id: 5,
            quote: '"Im not going to stop the wheel, Im going to break the wheel." - Daenerys Targaryen'
        },
        {
            id: 6,
            quote: '"Dracarys." - Daenerys Targaryen'
        },
        {
            id: 7,
            quote: '"Yes. All men must die, but we are not men." - Daenerys Targaryen'
        },
        {
            id: 8,
            quote: '"I am a Khaleesi of the Dothraki. I am the wife of the great Khal and I carry his son inside me. The next time you raise a hand to me will be the last time you have hands." - Daenerys Targaryen'
        },
        {
            id: 9,
            quote: '"The things I do for love." - Jaime Lannister'
        },
        {
            id: 10,
            quote: '"Nothing else matters. Only us." - Jaime Lannister'
        },
        {
            id: 11,
            quote: '"My watch has ended." - Jon Snow'
        },
        {
            id: 12,
            quote: '"First lesson, stick them with the pointy end." - Jon Snow'
        },
        {
            id: 13,
            quote: '“Winter is coming. We know whats coming with it." - Jon Snow'
        },
        {
            id: 14,
            quote: ' "The Lords of Westeros are sheep. Are you a sheep? No, youre a dragon. Be a dragon." - Olenna Tyrell'
        },
        {
            id: 15,
            quote: ' "Tell Cersei, I want her to know it was me" - Olenna Tyrell'
        },
        {
            id: 16,
            quote: '"Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you." - Tyrion Lannister'
        },
        {
            id: 17,
            quote: '"Death is so final, yet life is full of possibilities." - Tyrion Lannister'
        },
        {
            id: 18,
            quote: '"I will hurt you for this. A day will come when you think youre safe and happy, and your joy will turn to ashes in your mouth, and youll know the debt is paid." - Tyrion Lannister'
        },
        {
            id: 19,
            quote: ' "Its hard to put a leash on a dog once youve put a crown on its head." - Tyrion Lannister'
        },
        {
            id: 20,
            quote: '"You know nothing, Jon Snow." - Ygritte'
        },
        {
            id: 21,
            quote: '"Any man who must say, I am the king, is no true king." - Twyin Lannister'
        },
        {
            id: 22,
            quote: '"The man who passes the sentence should swing the sword." - Ned Stark'
        },
        {
            id: 23,
            quote: '"I drink and I know things." - Tyrion Lannister'
        }
    ]

    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.favorites.favorites);

    const handleFavoritePress = () => {
        Alert.alert(
            "Favorite Added",
            "This quote has been added to your favorites.",
            [
                {
                    text: "OK",
                    onPress: () => console.log("OK Pressed")
                }
            ]
        );
    };


    const handleAddToFavoritesAndShowAlert = (id) => {
        handleAddToFavorites(id);
        handleFavoritePress();
    };

    const handleAddToFavorites = (id) => {
        const quote = quotes.find(q => q.id === id);
        const isFavorite = favorites.some(favorite => favorite.id === id);


        if (quote && !isFavorite) {
            console.log("Adding to favorites");
            dispatch(addToFavorites(quote));
        } else {
            console.log("Not adding to favorites");
        }
    };

    const handleRemoveFromFavorites = (id) => {
        dispatch(removeFromFavorites(id));
        Alert.alert(
            "Favorite Removed",
            "This quote has been removed from your favorites.",
            [
                {
                    text: "OK",
                    onPress: () => console.log("OK Pressed")
                }
            ]
        );
    };


    const handleAddOrRemoveFromFavorites = (id) => {
        const isFavorite = favorites.some(favorite => favorite.id === id);

        if (isFavorite) {
            handleRemoveFromFavorites(id);
        } else {
            handleAddToFavoritesAndShowAlert(id);
        }
    };


    const [currentQuote, setCurrentQuote] = useState(quotes[0]);


    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };


    return (


        <View>

            <ImageBackground source={require('../assets/background.jpeg')} resizeMode="cover" style={styles.background}>

                <Text style={styles.ashley}>ashley's generator app</Text>
                <Text style={styles.title}>
                    find your perfect game of thrones quote
                </Text>

                <TouchableOpacity
                    onPress={generateRandomQuote}
                    style={styles.button}>
                    <Text>
                        Click Me
                    </Text>
                </TouchableOpacity>

                <Text style={styles.quote}>{currentQuote.quote}</Text>

                <View style={styles.centeredView}>

                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => handleAddOrRemoveFromFavorites(currentQuote.id)}
                    >
                        <FontAwesomeIcon
                            icon={favorites.some(favorite => favorite.id === currentQuote.id) ? faDragon : faHeart}
                            size={30}
                            color="black"
                        />
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        color: '#fff',
        paddingTop: 100
    },
    background: {
        justifyContent: 'center',
        height: 1000,
        paddingBottom: 300
    },
    ashley: {
        color: '#fff',
        textAlign: 'center',
        paddingTop: 50
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
        padding: 15
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    container: {
        flex: 1
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },

});


export default HomeScreen;

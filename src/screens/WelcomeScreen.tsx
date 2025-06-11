import { View, Text, StyleSheet, Alert } from 'react-native';
import PrimaryButton from './../components/PrimaryButton'

export default function WelcomeScreen() {

    const handlePress = () => {
        Alert.alert('You pressed the button')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to my app! 🤡
            </Text>
            <Text style={styles.subtitle}>
                Let's build together
            </Text>
            <PrimaryButton title='Lets go' onPress={handlePress} />
            <PrimaryButton title='click me' onPress={handlePress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    subtitle: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
    },
});
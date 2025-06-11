import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to my app! 🤡
            </Text>
            <Text style={styles.subtitle}>
                Let's build together
            </Text>
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
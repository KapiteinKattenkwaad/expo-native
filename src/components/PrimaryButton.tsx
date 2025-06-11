import {Pressable, Text, StyleSheet } from 'react-native';

type Props = {
    title: String;
    onPress: () => void;
}

export default function PrimaryButton({title, onPress}: Props) {
    return (
        <Pressable style={({ pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress} >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4f46e5',
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 24,
    },
    pressed: {
      opacity: 0.75,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
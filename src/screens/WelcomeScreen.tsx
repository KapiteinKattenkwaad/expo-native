import { StyleSheet, Text } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/AppNavigator';
import PrimaryButton from '../components/PrimaryButton';
import { View } from 'react-native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Animated.Text entering={FadeInDown.duration(500)} style={styles.title}>
        Welcome to LearnExpo 🎉
      </Animated.Text>

      <Animated.Text entering={FadeInDown.delay(200).duration(500)} style={styles.subtitle}>
        Let’s build this app step by step!
      </Animated.Text>

      <Animated.View entering={FadeInDown.delay(300).duration(600)}>
        <PrimaryButton title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </Animated.View>
    </View>
  );
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

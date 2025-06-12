import { View, ActivityIndicator, Text, StyleSheet, FlatList } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Animated, { FadeInUp, FadeInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

import { fetchUsers, User } from '../api/users';
import { useEffect, useState } from 'react';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function DetailsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  // if (loading) {
  //   return (
  //     <View style={styles.center}>
  //       <ActivityIndicator size="large" color="#4f46e5" />
  //     </View>
  //   )
  // }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>❌ {error}</Text>
      </View>
    )
  }

  return (
    <Animated.View entering={FadeInUp.duration(300)} style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subtitle}>Here’s where cool stuff will happen 🚀</Text>
      <PrimaryButton title="Go to Welcome screen" onPress={() => navigation.navigate('Welcome')} />

      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#4f46e5" />
        </View>
      )}

      {!loading && (
        <FlatList
          data={users}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.list}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInUp.delay(index * 100).duration(250)}
              style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </Animated.View>
          )}
        >

        </FlatList>
      )}

    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 120
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#e11d48',
  },
  subtitle: {
    fontSize: 18,
    color: '#7f1d1d',
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  list: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 20
  },
  card: {
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  email: {
    fontSize: 14,
    color: '#6b7280',
  },
});
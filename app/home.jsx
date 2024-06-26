import { Stack, useNavigation } from 'expo-router';
import { Text, View,Pressable } from 'react-native';
import { useEffect } from 'react';
import { Link } from "expo-router";
export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Link href="/details" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
    </View>
  );
}

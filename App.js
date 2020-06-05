import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed!")

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        React Native  - I will make it really really longer and see what will happend !
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});

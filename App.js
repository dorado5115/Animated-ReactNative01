import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
  const marginTop = new Animated.Value(20);

  const animate = () => {
    Animated.timing(marginTop, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="Animate" onPress={animate} />
      <StatusBar style="auto" />
      <Animated.View style={{ marginTop }} >
        <Text style={styles.text}>Alooo policia</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },

});

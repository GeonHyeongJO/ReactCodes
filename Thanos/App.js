import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const result = Math.random();
    return <View style={styles.container}>
             {  result < 0.5 ? (
              <Text>당신은 희생되었습니다.</Text>
             ) : (
              <Text>당신은 살아남았습니다.</Text>
             )
             }
            <StatusBar style="auto" />
          </View>  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

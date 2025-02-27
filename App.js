import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PantallaProductos from './screens/PantallaProductos';
import { SafeAreaView, ScrollView } from 'react-native-web';

export default function App() {
  


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PantallaProductos/>

      </ScrollView>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

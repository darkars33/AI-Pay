import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInput } from 'react-native';

const Home = () => {
          return (
                    <SafeAreaView style={styles.container}>
                              <View style={styles.container2}>
                                        <FontAwesome name="user-circle-o" size={24} color="black" />
                                        <TextInput placeholder="Search" style={{border: '1px'}} />
                                        <MaterialIcons name="notifications-none" size={24} color="black" />
                              </View>
                    </SafeAreaView>
          );
};

export default Home;

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    // Set background color as needed
                    // Center content horizontally
          },
          text: {
                    fontSize: 30,
                    fontWeight: 'bold',
          },
          container2: {
                    display: 'flex',
                    flexDirection: 'row', // Align items in a row
                    alignItems: 'center', // Center items vertically
                    justifyContent: 'space-around',
                    marginTop: 20,
          }
});

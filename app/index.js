import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import './global.css'

const Home = () =>{
          return(
                    <SafeAreaView style={styles.container}>
                              <ScrollView>
                                        <Text style={styles.text}>Home</Text>
                              </ScrollView>       
                    </SafeAreaView>
          )
}

export default Home;

const styles ={
          container:{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
          },
          text:{
                    fontSize:30,
                    fontWeight:'bold'
          }
}
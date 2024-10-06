import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Login = React.memo(() => {
          const router = useRouter()
          return (
                    <SafeAreaView style={styles.container}>
                              <Text style={{textAlign:'center', marginTop: '20%', fontSize:25, fontFamily:'Poppins-Bold', color:'#6C86E8'}}>WelCome to AI-Pay</Text>
                              <View style={{width:'100%', padding:20, marginTop:'10%'}}>
                                        <Text style={styles.text}>Login</Text>
                                        <TextInput placeholder='username' style={{borderWidth:1, borderColor:'black', padding:10, margin:10}}/>
                                        <TextInput placeholder='Password' secureTextEntry={true} style={{borderWidth:1, borderColor:'black', padding:10, margin:10}}/>
                                        <TouchableOpacity style={{backgroundColor:'#6C86E8', padding:10, margin:10, borderRadius:10}} onPress={() => router.push('/home')}>
                                                  <Text style={{color:'white', textAlign:'center', fontSize:20}}>Login</Text>
                                        </TouchableOpacity>
                              </View>
                              <View>
                                        <Text style={{textAlign:'center', marginTop:10}}>Don't have an account? <Text style={{color:'#6C86E8'}} onPress={() => router.push('/auth/signup')}>Signup</Text></Text>
                              </View>
                    </SafeAreaView>
          )
})

export default Login;

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    
          },
          text:{
                    fontSize: 25,
                    color: 'black',
                    fontFamily: 'Poppins-Bold',
                    margin: 10
          }
})
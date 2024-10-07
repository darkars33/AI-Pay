import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";


const setAmount = React.memo(() => {
          const [selectedFilter, setSelectedFilter] = useState('add-amount');
          return (
                    <SafeAreaView>
                              <Stack.Screen
                                        options={{
                                                  title: 'Set Amount',
                                                  headerShown: true,
                                                  headerStyle: {
                                                            backgroundColor: '#6C86E8',
                                                  },
                                                  headerTintColor: '#fff',
                                                  headerTitleStyle: {
                                                            fontWeight: 'bold',
                                                  },
                                        }}
                              />
                              <View style={{ marginHorizontal: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 50, margin: 0 }}>
                                        <TouchableOpacity onPress={() => setSelectedFilter('add-amount')}>
                                                  <Text style={[styles.text, selectedFilter === 'add-amount' && styles.selectedText]} >Add Amount</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setSelectedFilter('show-amount')}>
                                                  <Text style={[styles.text, selectedFilter === 'show-amount' && styles.selectedText]}>Show Amount</Text>
                                        </TouchableOpacity>
                              </View>

                              <View style={styles.setAmountContainer}>
                                        <TextInput
                                                  style={styles.input}
                                                  placeholder="Enter category"
                                                  placeholderTextColor="#666"
                                                  
                                        />
                                        <TextInput
                                                  style={styles.input}
                                                  placeholder="Enter amount"
                                                  placeholderTextColor="#666"
                                                  keyboardType="numeric"
                                        />
                                        <TouchableOpacity style={styles.button}>
                                                  <Text style={styles.buttonText}>Set Amount</Text>
                                        </TouchableOpacity>
                              </View>
                    </SafeAreaView>
          );
});

export default setAmount;

const styles = StyleSheet.create({
          text: {
                    fontSize: 15,
                    color: 'gray',
                    fontFamily: 'Poppins-Regular',
                    margin: 10,
          },
          selectedText: {
                    color: 'black',
                    fontSize: 15,
                    borderBottomWidth: 2,
          },
          setAmountContainer: {
                    justifyContent: 'space-between',
                    margin:10
          },
          input: {
                    backgroundColor: '#D3D3D3',
                    padding: 10,
                    marginVertical: 10,
                    borderRadius: 5,
          },
          button: {
                    backgroundColor: '#6C86E8',
                    padding: 15,
                    borderRadius: 5,
          },
          buttonText: {
                    color: '#fff',
                    textAlign: 'center',
                    fontSize:20
          },
})
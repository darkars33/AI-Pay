import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const Layout = () => {

          useEffect(() => {
                    const prepare = async () => {
                              try {
                                        // Simulate some preparation logic (e.g., loading resources, fonts)
                                        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2s delay
                              } catch (e) {
                                        console.warn(e);
                              } finally {
                                        // Once the preparation is done, hide the splash screen
                                        await SplashScreen.hideAsync();
                              }
                    };

                    prepare();
          }, []);

          return (<Tabs screenOptions={{
                    tabBarStyle: styles.bottomNav, // Apply custom style here
                    tabBarLabelStyle: { fontSize: 12, color: 'white' }, // Customize label (optional)
                    tabBarIconStyle: { marginBottom: 5 }, // Customize icon spacing (optional)
                  }} >
                    <Tabs.Screen
                      name="index"
                      options={{
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="home-outline" color={color} size={size} />
                        ),
                      }}
                    />
                    <Tabs.Screen
                      name="assistant"
                      options={{
                        headerShown: false,
                        tabBarLabel: 'Voice',
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="mic-outline" color={color} size={size} />
                        ),
                      }}
                    />
                    <Tabs.Screen
                      name="investAi"
                      options={{
                        headerShown: false,
                        tabBarLabel: 'Invest AI',
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons name="analytics-outline" color={color} size={size} />
                        ),
                      }}
                    />
                  </Tabs>

);
};

export default Layout;

const styles = {
          bottomNav: {
            backgroundColor: '#001871',
            height: 70,
            position: 'absolute', // Ensure it's positioned at the bottom
            bottom: 0, // Position at the bottom
            width: '100%',
            paddingBottom: 10,
            paddingTop:9 // Full width
          }
};
        

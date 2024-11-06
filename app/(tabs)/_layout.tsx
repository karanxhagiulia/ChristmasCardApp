import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#db190b',  // Yellowish tint for active tab
        headerStyle: {
          backgroundColor: '#fff',  // Light background for the header
        },
        headerShadowVisible: false,  // No shadow under the header
        headerTintColor: '#e60000',  // Christmas red for header text color
        headerTitleStyle: {
          fontWeight: 'bold',  // Bold header title
        },
        tabBarStyle: {
          backgroundColor: '#fff',  // White background for the tab bar
        },
      }}
    >
      {/* Index Tab - Your Onboarding Screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
          headerShown: false,  // Hide the header on the index screen (onboarding screen)
        }}
      />

      {/* Contacts Tab */}
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Contacts',  // This is the name of the tab
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              color={color}
              size={24}
            />
          ),
          headerShown: false,  // Hide the header title 
        }}
      />

      {/* Create Tab */}
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'add-circle' : 'add-circle-outline'}
              color={color}
              size={24}
            />
          ),
          headerShown: false,  // Hide the header title 

        }}
      />

      {/* Mail Tab */}
      <Tabs.Screen
        name="mail"
        options={{
          title: 'Mail',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'mail' : 'mail-outline'}
              color={color}
              size={24}
            />
          ),
          headerShown: false,  // Hide the header title 
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
              size={24}
            />
          ),
          headerShown: false,  // Hide the header title 

        }}
      />
    </Tabs>
  );
}

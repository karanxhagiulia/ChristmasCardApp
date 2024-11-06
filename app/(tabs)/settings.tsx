import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Link } from 'expo-router'; // For navigation to form.tsx
import Ionicons from 'react-native-vector-icons/Ionicons';  // For icons

export default function SettingsScreen() {
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(false);

  const togglePushNotifications = () => setPushNotificationsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Settings title */}
      <Text style={[styles.title, { fontFamily: 'Mountains-of-Christmas' }]}>Settings</Text>

      {/* Account info */}
      <View style={styles.accountContainer}>
        <Ionicons name="person-circle" size={80} color="#ff4c4c" />
        <Text style={styles.accountName}>John Doe</Text>
        <Text style={styles.accountEmail}>johndoe@example.com</Text>
      </View>

      {/* Account Settings */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Change Email Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* Push Notifications toggle */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Push Notifications</Text>
        <Switch
          value={pushNotificationsEnabled}
          onValueChange={togglePushNotifications}
          trackColor={{ false: '#ccc', true: '#e60000' }}  // Christmas red for the active track color
          thumbColor={pushNotificationsEnabled ? '#fff' : '#ccc'}  // White thumb when active
        />
      </View>

      {/* More Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>More</Text>
        <Link href="/form" style={styles.link}>
          <Text style={styles.linkText}>Contact Us</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // White background to contrast with other elements
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#e60000',  // Christmas red for the title
    textAlign: 'center',
    marginBottom: 20,
  },
  accountContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  accountName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',  // Dark color for better contrast
    marginTop: 10,
  },
  accountEmail: {
    fontSize: 18,
    color: '#777',  // Light grey for the email
    marginTop: 5,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',  // Dark color for section headers
    marginBottom: 10,
  },
  link: {
    paddingVertical: 8,
    marginBottom: 10,
  },
  linkText: {
    color: '#ffd33d',  // Gold color for links to make them stand out
    fontSize: 18,
  },
});

import { Button, StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { router } from 'expo-router';  // For navigation
import Ionicons from 'react-native-vector-icons/Ionicons';  // Christmas icon

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Redirect to the main tabs after successful sign-up
        if (userCredential.user) {
          router.replace('/(tabs)');  // Navigating to the tabs after successful registration
        }
      })
      .catch((err) => {
        // Handle the error (e.g., invalid email or weak password)
        setError(err?.message || 'An error occurred');
      });
  };

  return (
    <View style={styles.container}>
      {/* Christmas Icon */}
      <Ionicons name="gift" size={100} color="#e60000" style={styles.icon} />

      {/* Title with Christmas font */}
      <Text style={[styles.title, { fontFamily: 'Mountains-of-Christmas' }]}>
        Sign Up for Christmas Fun!
      </Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {/* Display error message if present */}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Sign Up Button with Christmas style */}
      <TouchableOpacity style={styles.buttonRed} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Back to Login Option */}
      <TouchableOpacity style={styles.linkButton} onPress={() => router.push('/login')}>
        <Text style={styles.linkText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',  // White background for a clean, light feel
  },
  icon: {
    marginBottom: 40,  // Add spacing below the icon
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e60000',  // Christmas red for the title
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e60000',  // Christmas red border
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    fontSize: 14,
  },
  buttonRed: {
    backgroundColor: '#e60000',  // Red background for the button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',  // Make the button wide
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',  // White text inside the button
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 20,
  },
  linkText: {
    fontSize: 16,
    color: '#e60000',  // Red text for the link
    textDecorationLine: 'underline',
  },
});
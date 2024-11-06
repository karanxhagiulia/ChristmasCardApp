import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';  // Icon for decoration

export default function ContactUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    Alert.alert('Success', 'Your message has been sent!');

    // Clear form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={[styles.title, { fontFamily: 'Mountains-of-Christmas' }]}>Contact Us</Text>

      {/* Name input */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      {/* Email input */}
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Message input */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />

      {/* Submit button */}
      <Button title="Submit" onPress={handleSubmit} color="#e60000" />

      {/* Additional icon for fun */}
      <Ionicons name="mail" size={50} color="#e60000" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // Bright, light background to create a clean look
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#e60000',  // Red color to fit the Christmas theme
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e60000',  // Red border for the inputs
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',  // Ensures the text is aligned at the top of the TextInput
  },
  icon: {
    alignSelf: 'center',
    marginTop: 30,
  },
});

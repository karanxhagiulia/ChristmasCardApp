import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';  // Import useFonts to load custom fonts

export default function Index() {
  // Correct path to the font file (relative to the root of the project)
  const [fontsLoaded] = useFonts({
    'Mountains-of-Christmas': require('../../assets/fonts/MountainsofChristmas-Regular.ttf'),  // Correct the relative path
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;  // Show a loading message while the font is loading
  }

  return (
    <View style={styles.container}>
      {/* Gift Bag Icon */}
      <Ionicons name="gift" size={180} color="#ff4c4c" style={styles.icon} />

      {/* Main Title */}
      <Text style={[styles.title, { fontFamily: 'Mountains-of-Christmas' }]}>
        Santa is coming to town!
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Create Christmas Cards and send them to your loved ones!
      </Text>

      {/* Sign Up Button */}
      <Link href="/signup" style={styles.buttonRed}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Link>

      {/* Log In Button */}
      <Link href="/login" style={styles.buttonRed}>
        <Text style={styles.buttonText}>Log In</Text>
      </Link>

      {/* Option to skip the onboarding */}
      <Link href="/contacts" style={styles.skipText}>
        Skip and Continue
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // White background for a clean, light feel
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 40,  // Add some spacing below the icon
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e60000',  // Christmas red for the title
    marginBottom: 20,
    textAlign: 'center',  // Center the title text
  },
  subtitle: {
    fontSize: 18,
    color: '#333',  // Dark grey for secondary text
    marginBottom: 40,
    textAlign: 'center',  // Center the subtitle text
  },
  buttonRed: {
    backgroundColor: '#e60000',  // Red background
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
    textAlign: 'center',  // Center the button text
  },
  skipText: {
    fontSize: 16,
    color: '#e60000',  // Red text for Skip
    marginTop: 20,
    textDecorationLine: 'underline',
    textAlign: 'center',  // Center the skip text
  },
});

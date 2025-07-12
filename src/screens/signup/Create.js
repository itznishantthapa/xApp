import { ActivityIndicator, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStateStore } from '../../store/stateStore'
import { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

const Create = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { signup } = useAuthStore();


  async function handleAccountCreate() {
    console.log(credentials)
    await signup(credentials);
  }





  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={credentials.email}
            onChangeText={(text) => setCredentials({ ...credentials, email: text })}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={credentials.password}
            onChangeText={(text) => setCredentials({ ...credentials, password: text })}
            secureTextEntry
          />
          <Text style={styles.text} onPress={handleAccountCreate}>
            Create
          </Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  input: {
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
})
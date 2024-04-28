import { StyleSheet, SafeAreaView, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    axios.post('https://traveller.talrop.works/api/v1/auth/register/', {
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      // Include other registration data as needed
    })
      .then(response => {
        console.log(response.data); // Log the response data
        // Clear email and password fields
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        // Handle error here
      });
      console.log("suecss");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <Image style={styles.itemImage} source={require("./src/asstes/images/logo.png")} />
      </View>
      <View style={styles.pop}>
        <Text style={styles.one}>Create Account</Text>
        <Text style={styles.two}>Enter your personal details and start your journey</Text>
        <Text style={styles.three}>With us</Text>
      </View>
      <View style={styles.viewone}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          onChangeText={text => setEmail(text)}
          require
          value={email}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Password'
          onChangeText={text => setPassword(text)}
          value={password}
          require
          secureTextEntry={true}
        />
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Re-enter Password'
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          require
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}>
          <Text style={styles.doko}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  itemImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  container: {
    flex: 1,
  },
  itemContainer: {
    width: 140,
    height: 130,
    marginLeft: 125,
    padding: 40,
    backgroundColor: '#dfc7af',
    borderRadius: 50,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  one: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
  },
  two: {
    fontSize: 14,
    textAlign: 'center',
  },
  three: {
    fontSize: 14,
    textAlign: 'center',
  },
  pop: {
    textAlign: 'center',
  },
  viewone: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 20,
    padding: 3,
  },
  input: {
    height: 50,
    width: 330,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 4,
    fontSize: 17,
  },
  text: {
    fontSize: 14,
    color: '#000',
    textAlign: 'start',
    padding: 8,
    marginTop: 10,
  },
  button: {
    height: 50,
    width: 330,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 4,
    fontSize: 17,
  },
  doko: {
    textAlign: 'center',
    fontSize: 18,
  },
});

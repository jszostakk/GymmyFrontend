import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginView = ({ navigation }) => {
    const goToRegister = () => {
      navigation.navigate('RegisterView');
    };
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Already a member?</Text>     
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Hasło"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.text}>------ or ------</Text>
      <TouchableOpacity style={styles.button} onPress={goToRegister}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 100,
    margin: 10,
    padding: 10,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
  },
  button: {
    borderRadius: 50,
    margin: 10,
    width: 300,
    height: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 24,
  }
});

export default LoginView;
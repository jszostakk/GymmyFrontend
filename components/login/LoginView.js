import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const LoginView = ({ navigation }) => {
  const goToRegister = () => {
    navigation.navigate('RegisterView');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.text}>Already a member?</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Hasło" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.orComponent}>
        <View style={styles.orLine} />
        <Text style={[styles.text, styles.orText]}>or</Text>
        <View style={styles.orLine} />
      </View>
      <TouchableOpacity style={styles.button} onPress={goToRegister}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
  text: {
    fontSize: 24,
  },
  orComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orLine: {
    height: 1,
    width: '35%',
    backgroundColor: 'grey',
  },
  orText: {
    marginHorizontal: 20,
  },
});

export default LoginView;

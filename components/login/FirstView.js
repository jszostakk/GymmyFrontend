import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const FirstView = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('LoginView');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToLogin} style={styles.button}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.orComponent}>
        <View style={styles.orLine} />
        <Text style={[styles.text, styles.orText]}>or</Text>
        <View style={styles.orLine} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Continue with Facebook</Text>
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
  button: {
    borderRadius: 100,
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

export default FirstView;

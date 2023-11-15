import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRdQ6cl-mnARRc7X_c_rXhD0nJSBdRz9s",
  authDomain: "gimmy-firebase.firebaseapp.com",
  projectId: "gimmy-firebase",
  storageBucket: "gimmy-firebase.appspot.com",
  messagingSenderId: "323278524362",
  appId: "1:323278524362:web:2e6b1aa00dc5147da00933",
  measurementId: "G-65RHTTWG8S"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const usersCollection = collection(db, 'users');

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersFromFirestore = async () => {
      const querySnapshot = await getDocs(usersCollection);
      const usersData = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        usersData.push({
          id: doc.id,
          name: userData.name,
          surname: userData.surname,
          age: userData.age,
        });
      });
      setUsers(usersData);
    };

    getUsersFromFirestore();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Test!</Text>
      <Text>Users:</Text>
      {users.map((user) => (
        <Text key={user.id}>
          {`Name: ${user.name}, Surname: ${user.surname}, Age: ${user.age}`}
        </Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

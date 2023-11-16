import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebaseConfig";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const usersCollection = collection(db, 'users');


export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
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

    getUsers();
  })
  
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

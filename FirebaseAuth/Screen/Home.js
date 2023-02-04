import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { getAuth, signOut,} from "firebase/auth";
export default function Home({route, navigation}) {
  const logout=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      Alert.alert('Signout', 'user Signout successfully', [
        
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ]);
      

    }).catch((error) => {
      console.log(error.massage);
      // An error happened.
    });
  }
    return (
        <View>
          <Text style={styles.title}>Home Screen</Text>
          <Text style={styles.user}>USER ID :- {route.params.userid} </Text>
          <View style={styles.container}>
          <TouchableOpacity style={styles.registerBtn} 
      onPress={() => logout()}
      >
        <Text style={styles.loginText}>SignOut</Text> 
      </TouchableOpacity> 
        </View>
        </View>

    );
}
const styles = StyleSheet.create({
  title:{
    fontWeight:'bold',
    fontSize:49,
    marginBottom:20

  },
  user:{
    fontSize:20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 900,
    backgroundColor: "#AB9590",
  },

})
import React from "react";
import { SafeAreaView, Text } from "react-native";
import firebase from "./src/firebaseConnection";

export default function App(){
  return(
    <SafeAreaView style={{marginTop: 25}}>
      <Text>Hello World!</Text>
    </SafeAreaView>
  )
}
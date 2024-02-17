import React, {useState} from "react";
import { SafeAreaView, Text } from "react-native";
// import firebase from "./src/firebaseConnection";

export default function App(){
  const [nome, setNome] = useState("Carregando...");

  return(
    <SafeAreaView style={{marginTop: 25}}>
      <Text>Hello {nome}!</Text>
    </SafeAreaView>
  )
}
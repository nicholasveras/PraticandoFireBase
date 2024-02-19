import React, {useState, useEffect} from "react";
import { SafeAreaView, Text } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App(){
  const [nome, setNome] = useState("Carregando...");

  useEffect(() => {

    async function dados(){
      // olheiro da nossa database
      await firebase.database().ref('nome').on('value', (snapshot) => {
        setNome(snapshot.val());
      })
    }

    dados();

  }, [])

  return(
    <SafeAreaView style={{marginTop: 25}}>
      <Text style={{fontSize: 25}}>Hello {nome}!</Text>
    </SafeAreaView>
  )
}
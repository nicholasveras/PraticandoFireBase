import React, {useState, useEffect} from "react";
import { SafeAreaView, Text } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App(){
  const [nome, setNome] = useState("Carregando...");
  const [idade, setIdade] = useState('');

  useEffect(() => {

    async function dados(){
      // olheiro da nossa database
      await firebase.database().ref('usuarios/1/nome').on('value', (snapshot) => {
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
      })

      // await firebase.database().ref('nome').once('value', (snapshot) => {

      // })
    }

    dados();

  }, [])

  return(
    <SafeAreaView style={{marginTop: 25}}>
      <Text style={{fontSize: 25}}>Hello {nome}!</Text>
      <Text style={{fontSize: 25}}>Idade {idade}!</Text>
    </SafeAreaView>
  )
}
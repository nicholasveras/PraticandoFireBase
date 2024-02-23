import React, {useState, useEffect} from "react";
import { SafeAreaView, Text } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App(){
  const [nome, setNome] = useState("Carregando...");
  const [idade, setIdade] = useState('');

  useEffect(() => {

    async function dados(){

      // Criar um nó
      // await firebase.database().ref('tipo').set('Cliente');

      // Remover um nó 
      // await firebase.database().ref('tipo').remove();
      
      // INSERT 
      // await firebase.database().ref('usuarios').child(3).set({
      //   nome: "Maria Eduarda Souza",
      //   cargo: "Médica"
      // })

      // UPDATE
      // await firebase.database().ref('usuarios').child(3).
      // update({
      //   nome: 'Juninho Jorge'
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
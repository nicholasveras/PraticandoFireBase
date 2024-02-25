import React, {useState, useEffect} from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Button } from "react-native";
import firebase from "./src/firebaseConnection";

console.disableYellowBox = true;

export default function App(){
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');

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

  async function cadastrar(){
    if(nome !== '' & cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo
      });

      alert('Cadastrado com sucesso!');
      setCargo('');
      setNome('');
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setNome(texto)}
      value={nome}
      />

      <Text style={styles.texto}>Cargo</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setCargo(texto)}
      value={cargo}
      />

      <Button
      title="Novo funcionario"
      onPress={cadastrar}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,

  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '121212',
    height: 45,
    fontSize: 17
  }
});
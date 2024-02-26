import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Listagem({data}){
  return(
    <View>
      <Text>{data.nome}</Text>
      <Text>{data.cargo}</Text>
    </View>
  )
}


const styles = StyleSheet.create({

});
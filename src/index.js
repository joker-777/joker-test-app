import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome} from "@expo/vector-icons"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Icon below:</Text>
      <FontAwesome name="bars" size={30}/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

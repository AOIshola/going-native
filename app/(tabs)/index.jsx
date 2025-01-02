import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import starViewLogo from "@/assets/images/starview.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={starViewLogo}
        resizeMethod='cover'>
        <Text style={styles.text}>2025 Goals</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    borderBlockColor: 'white',
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    textAlign: 'center',
  }
})
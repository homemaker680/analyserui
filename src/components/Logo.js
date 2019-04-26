import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
          style={{ width: 40, height: 70 }}
        />
        <Text style={styles.LogoText}>Welcome to my app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  LogoText: {
    marginVertical: 15,
    fontSize: 18,
    color: "rgba(255,255,255,0.7)"
  }
});

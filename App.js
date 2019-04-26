import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Routes from "./src/Routes";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
    alignItems: "center",
    justifyContent: "center"
  }
});

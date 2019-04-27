import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Logo from "../components/Logo";
import Form from "../components/Form";
import { Actions } from "react-native-router-flux";
export default class Signup extends React.Component {
  goBack() {
    Actions.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Signup" />
        <View style={styles.signUpTextCont}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}> Sign in</Text>
          </TouchableOpacity>
        </View>
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
  },
  signUpTextCont: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  signUpText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16
  },
  signUpButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});

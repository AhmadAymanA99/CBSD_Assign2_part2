import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import OptionsMenu from "react-native-options-menu"
const MoreIcon = require("./assets/more.png");

export default function App() {
  const [n1, setN1] = useState("")
  const [n2, setN2] = useState("")
  const [result, setResult] = useState("")
  const [show, setShow] = useState("")

  _Add = () => {
    setResult((Number.parseInt(n1) + Number.parseInt(n2)).toString())
  }

  _Subtruct = () => {
    setResult((Number.parseInt(n1) - Number.parseInt(n2)).toString())
  }

  _Multibly = () => {
    return (
      setShow("1")
    )
  }

  _Mul3 = () => {
    setResult(((Number.parseInt(n1) * Number.parseInt(n2)) * 3).toString())
  }

  _Mul4 = () => {
    setResult(((Number.parseInt(n1) * Number.parseInt(n2)) * 4).toString())
  }

  _none = () => {
    setResult((Number.parseInt(n1) * Number.parseInt(n2)).toString())
  }

  _Division = () => {
    setResult((Number.parseInt(n1) / Number.parseInt(n2)).toString())
  }

  return (
    <View style={styles.container}>
    {
      show !== "1"
        ? <OptionsMenu
        style={styles.option1}
        button={MoreIcon}
        buttonStyle={{ width: 64, height: 16, margin: 20, resizeMode: "contain" }}
        destructiveIndex={1}
        options={["Add", "Subtract", "Multibly", "Division"]}
        actions={[this._Add, this._Subtruct, this._Multibly, this._Division]} />
        : <Text></Text>
    }

      {
        show === "1"
          ? <OptionsMenu
            style={styles.option1}
            button={MoreIcon}
            buttonStyle={{ width: 64, height: 16, margin: 20, resizeMode: "contain" }}
            destructiveIndex={1}
            options={["Mul 3", "Mul 4"]}
            actions={[this._Mul3, this._Mul4]} />
          : <Text></Text>
      }

      <TextInput value={n1} onChangeText={e => setN1(e)} placeholder="first num" style={styles.text} />
      <TextInput value={n2} onChangeText={e => setN2(e)} placeholder="second num" style={styles.text} />
      <TextInput value={result} onChangeText={e => setResult(e)} placeholder="result" style={styles.text2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 200
  },
  text: {
    fontSize: 22,
    borderColor: 'gray',
    borderWidth: 2,
    height: 60,
    color: '#555555',
    width: 200,
    marginBottom: 20,
    textAlign: "center"
  },
  text2: {
    fontSize: 22,
    borderColor: 'green',
    borderWidth: 2,
    height: 60,
    color: '#555555',
    width: 200,
    textAlign: "center"
  },
  option1: {
    //display:"none"
  },
  option2: {
    //opacity: "0"
  },
});

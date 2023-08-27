import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [nro1, setNro1] = useState(0); 
  const [rnd, setRnd] = useState(Math.floor(Math.random() * 100) + 1);
  const [viesti, setViesti] = useState("Guess a number between 1-100");
  const [kierros, setKierros] = useState(1);
  

  const arvopa = () => {

    setKierros(kierros +1); 

    if(nro1 == rnd) {
      //Alert.alert("oikein" + kierros)
      Alert.alert("You guessed the number right in " + kierros + " guesses. Right number: " + nro1)
      
      console.log("kierrokset: " + kierros, "arvottu: " + rnd + " syötetty " + nro1)

      //jos käyttäjä jatkaa, aloitetaan kierrosten laskeminen alusta ja arvotaan uusi satunnaisluku      
      setKierros(1);
      setRnd(Math.floor(Math.random() * 100 +1))
      setViesti("Guess a number between 1-100")
      
    }
    else if(nro1 < rnd) {
      setViesti("Your guess " + nro1 + " is too low")
      console.log("kierrokset: " + kierros, "arvottu: " + rnd + " syötetty " + nro1)
    }
    else if(nro1 > rnd ) {
      setViesti("Your guess " + nro1 + " is too high")
      
      console.log("kierrokset: " + kierros, "arvottu: " + rnd + " syötetty " + nro1)
    }
    
  } 

  return (
    <View style={styles.container}>

      <Text style={{marginBottom: 20}}>{viesti} </Text>

      <TextInput 
      placeholder='Type here..'
      keyboardType='numeric' 
      style={styles.input}
      onChangeText={arvo1 => setNro1(Number(arvo1))}value={nro1} 
      />      

      <View style={{flexDirection: 'row', marginTop : 20 }}>

        <Button onPress={arvopa} title="MAKE GUESS"></Button>       

      </View>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width : 100,
    borderWidth : 2,
    borderColor : 'black',    
  },
});

import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { useState } from 'react';

export default function LoginScreen({ navigation }) {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('HomeScreen', { name: name, email: email });
  };

  return (
    <View style={styles.container}>
        <View style={styles.intro}>
        <Text style={styles.head}> Jobizz </Text>
    <Text style={styles.welcome}> Welcome Back  </Text>
    <Text style={styles.alert}> Let's Log in. Apply to Jobs!</Text>
        </View>
    
        <View style={styles.formcontainer}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      
      <Button style={styles.button} title="Log in" onPress={handleLogin} />
    </View>

<View style={styles.separator}>
    <View style={styles.line} />
    <Text style={styles.text}>Or continue with</Text>
    <View style={styles.line} />
    </View>

    <View style={styles.altAccounts}>
<View style={styles.imgCont}>
<Image source={require('./assets/apple.png')} style={{height: 30, width: 30, bottom: -10}} />
</View>
<View style={styles.imgCont}>
<Image source={require('./assets/google.png')} style={{height: 30, width: 30, bottom: -10}} />
</View>
<View style={styles.imgCont}>
<Image source={require('./assets/facebook.png')} style={{height: 30, width: 30, bottom: -10}} />

<Text style={styles.noAcc}>Haven't an account? 
  
  <Text style={styles.setAcc}>Register</Text>

 </Text>
</View>

    </View>
</View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'F4FDFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formcontainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        bottom: 90,
        left: -5
      },
      input: {
        borderRadius: 10,
        height: 48,
        width: 325,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
      },
      
    intro: {
        height: 150,
        width: 150,
        bottom: 150,
        right: 15,
    },
    head: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#356899',
        position: 'absolute',
        top: 290,
        right: 143,
    },

    welcome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0D0D26',
        position: 'absolute',
        top: 325,
        right: -18,
        width: 250
    },
    alert: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0D0D26',
        opacity: 0.30,
        position: 'absolute',
        top: 350,
        width: 300,
        right: -70
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        top: -170
    },

    line: {
        height: 1,
        width: 80,
        backgroundColor: '#0D0D26',
        opacity: 0.30,
        top: 10
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0D0D26',
        opacity: 0.30,
        top: 10,
        width: 100,
        marginLeft: 15,
        marginHorizontal: 10
    },

    altAccounts: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: -110,
        width: 250,
        height: 70
    },
    imgCont: {
        marginTop: 10,
        height: 50,
        width: 50,
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 50,
        alignItems: 'center'
    },
    noAcc: {
        fontSize: 15,
        width: 250,
        top: 80,
        right: 30,
        
    },
    setAcc: {
        color: '#356899',
        fontWeight: 'bold',
        marginLeft: 20
    }
});
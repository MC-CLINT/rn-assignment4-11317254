import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';


const LoginForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    bottom: 400,
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
  
  button: {
    backgroundColor: '#356899',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    color: 'white',
    borderRadius: 10,
    marginTop: 8
   
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginForm;
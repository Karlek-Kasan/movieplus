import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import type { CreatePasswordScreenProps } from './CreatePasswordScreen.types';

const CreatePasswordScreen: React.FC<CreatePasswordScreenProps> = ({ navigation }) => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="New password"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Save password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, marginBottom: 16 },
  button: { backgroundColor: '#0D1B2A', borderRadius: 8, padding: 14 },
  buttonText: { color: '#FFF', textAlign: 'center' },
});

export default CreatePasswordScreen;
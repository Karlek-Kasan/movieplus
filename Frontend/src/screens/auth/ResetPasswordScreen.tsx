import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import type { ResetPasswordScreenProps } from './ResetPasswordScreen.types';

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verification', { email })}>
        <Text style={styles.buttonText}>Send verification code</Text>
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

export default ResetPasswordScreen;
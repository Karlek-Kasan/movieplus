import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import type { VerificationScreenProps } from './VerificationScreen.types';

const VerificationScreen: React.FC<VerificationScreenProps> = ({ navigation, route }) => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Email</Text>
      <Text style={styles.subtitle}>Code sent to {route.params.email}</Text>
      <TextInput value={code} onChangeText={setCode} placeholder="Verification code" style={styles.input} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreatePassword', { email: route.params.email, verificationCode: code })}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, marginBottom: 16 },
  subtitle: { marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, marginBottom: 16 },
  button: { backgroundColor: '#0D1B2A', borderRadius: 8, padding: 14 },
  buttonText: { color: '#FFF', textAlign: 'center' },
});

export default VerificationScreen;
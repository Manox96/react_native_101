import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { supabase } from './lib/supabase';

export default function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'myapp://reset-password-confirm',
      });

      if (error) throw error;

      Alert.alert(
        'Check your email',
        'We have sent you a password reset link'
      );
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  // ... render your reset password form
} 
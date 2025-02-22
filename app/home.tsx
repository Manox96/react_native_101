import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from './lib/AuthContext';
import { ProtectedRoute } from './lib/ProtectedRoute';
import { DESIGN_TOKENS } from './constants';

export default function Home() {
  const { signOut, session } = useAuth();

  return (
    <ProtectedRoute>
      <View style={{ flex: 1, padding: 20 }}>
        <Text>Welcome, {session?.user.email}</Text>
        <TouchableOpacity 
          style={{ 
            backgroundColor: DESIGN_TOKENS.colors.neutral[900],
            padding: DESIGN_TOKENS.spacing.md,
            alignItems: 'center',
            marginTop: DESIGN_TOKENS.spacing.lg,
          }}
          onPress={signOut}
        >
          <Text style={{ color: DESIGN_TOKENS.colors.neutral[100] }}>
            SIGN OUT
          </Text>
        </TouchableOpacity>
      </View>
    </ProtectedRoute>
  );
} 
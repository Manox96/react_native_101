import { Text, View, Image, TouchableOpacity, Dimensions, Alert, TextInput, ScrollView, Platform } from "react-native";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { DESIGN_TOKENS, BREAKPOINTS } from './constants';
import { supabase } from './lib/supabase';

export default function Signup() {
  const router = useRouter();
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const isPhone = dimensions.width < BREAKPOINTS.phone || Platform.OS === 'ios';
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const handleSignup = async () => {
    const { fullName, email, password, confirmPassword } = formData;
    
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      // First check if user exists
      const { data: existingUser } = await supabase
        .from('profiles')
        .select('email')
        .eq('email', email)
        .single();

      if (existingUser) {
        Alert.alert('Error', 'This email is already registered');
        return;
      }

      // Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          }
        }
      });

      if (authError) {
        if (authError.message.includes('rate limit')) {
          Alert.alert(
            'Too Many Attempts',
            'Please wait a few minutes before trying again'
          );
        } else {
          throw authError;
        }
        return;
      }

      // Create profile only if signup was successful
      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              full_name: fullName,
              email: email,
            }
          ]);

        if (profileError) throw profileError;
      }

      Alert.alert(
        "Success!",
        "Please check your email to confirm your account. Check your spam folder if you don't see it.",
        [{ text: "OK", onPress: () => router.push('/') }]
      );
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const renderInput = (label: string, field: keyof typeof formData, isPassword = false) => (
    <>
      <Text style={{
        fontSize: DESIGN_TOKENS.typography.size.xs,
        letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wide,
        color: DESIGN_TOKENS.colors.neutral[900],
        marginBottom: DESIGN_TOKENS.spacing.xs,
        fontWeight: DESIGN_TOKENS.typography.weight.semibold as '600',
      }}>
        {label.toUpperCase()}
      </Text>
      <View style={{
        backgroundColor: DESIGN_TOKENS.colors.neutral[200],
        borderRadius: DESIGN_TOKENS.border.radius.none,
        marginBottom: DESIGN_TOKENS.spacing.md,
        borderBottomWidth: DESIGN_TOKENS.border.width.thin,
        borderColor: DESIGN_TOKENS.colors.neutral[900],
      }}>
        <TextInput
          placeholder={`Enter your ${label.toLowerCase()}`}
          value={formData[field]}
          onChangeText={(text) => setFormData(prev => ({ ...prev, [field]: text }))}
          style={{
            padding: DESIGN_TOKENS.spacing.sm,
            paddingLeft: DESIGN_TOKENS.spacing.xs,
            fontSize: DESIGN_TOKENS.typography.size.md,
            color: DESIGN_TOKENS.colors.neutral[900],
          }}
          secureTextEntry={isPassword}
          autoCapitalize={isPassword ? 'none' : 'words'}
          autoComplete={isPassword ? 'password' : 'name'}
          placeholderTextColor={DESIGN_TOKENS.colors.neutral[500]}
        />
      </View>
    </>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: DESIGN_TOKENS.colors.neutral[100] }}>
      <View style={{ 
        flex: 1,
        flexDirection: isPhone ? 'column' : 'row',
      }}>
        {/* Left Section - Image */}
        <View style={{
          flex: isPhone ? 0 : 1,
          height: isPhone ? dimensions.height * 0.3 : dimensions.height,
          backgroundColor: DESIGN_TOKENS.colors.neutral[900],
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=3174&auto=format&fit=crop' }}
            style={{
              width: '100%',
              height: '100%',
              opacity: 0.7,
              resizeMode: 'cover',  
            }}
          />
          <View style={{
            position: 'absolute',
            left: DESIGN_TOKENS.spacing.lg,
            bottom: DESIGN_TOKENS.spacing.lg,
            right: DESIGN_TOKENS.spacing.lg,
          }}>
            <Text style={{
              fontSize: isPhone ? DESIGN_TOKENS.typography.size.xl : DESIGN_TOKENS.typography.size.display,
              fontWeight: DESIGN_TOKENS.typography.weight.black as '900',
              color: DESIGN_TOKENS.colors.neutral[100],
              letterSpacing: DESIGN_TOKENS.typography.letterSpacing.tight,
              marginBottom: DESIGN_TOKENS.spacing.md,
            }}>
              Join Us.
            </Text>
            <Text style={{
              fontSize: isPhone ? DESIGN_TOKENS.typography.size.xs : DESIGN_TOKENS.typography.size.md,
              color: DESIGN_TOKENS.colors.neutral[500],
              opacity: 0.8,
              fontWeight: '400',
              letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wide,
            }}>
              Start Your Journey Today
            </Text>
          </View>
        </View>

        {/* Right Section - Form */}
        <View style={{ 
          flex: 1,
          padding: isPhone ? DESIGN_TOKENS.spacing.md : DESIGN_TOKENS.spacing.xl,
          justifyContent: 'center',
          backgroundColor: DESIGN_TOKENS.colors.neutral[100],
        }}>
          <View style={{ 
            width: '100%',
            maxWidth: isPhone ? '100%' : 440,
            alignSelf: 'center',
          }}>
            <Text style={{
              fontSize: DESIGN_TOKENS.typography.size.xs,
              letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wide,
              color: DESIGN_TOKENS.colors.neutral[900],
              marginBottom: DESIGN_TOKENS.spacing.xs,
              fontWeight: '600',
            }}>
              CREATE ACCOUNT
            </Text>
            <Text style={{
              fontSize: DESIGN_TOKENS.typography.size.xl,
              fontWeight: DESIGN_TOKENS.typography.weight.semibold as '600',
              color: DESIGN_TOKENS.colors.neutral[900],
              marginBottom: DESIGN_TOKENS.spacing.lg,
              letterSpacing: DESIGN_TOKENS.typography.letterSpacing.tight,
            }}>
              Get started for free.
            </Text>
            
            {/* Form Section */}
            <View style={{ marginBottom: DESIGN_TOKENS.spacing.md }}>
              {renderInput('Full Name', 'fullName')}
              {renderInput('Email', 'email')}
              {renderInput('Password', 'password', true)}
              {renderInput('Confirm Password', 'confirmPassword', true)}
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              style={{
                backgroundColor: DESIGN_TOKENS.colors.neutral[900],
                padding: isPhone ? DESIGN_TOKENS.spacing.sm : DESIGN_TOKENS.spacing.md,
                alignItems: 'center',
                marginBottom: DESIGN_TOKENS.spacing.md,
                ...Platform.select({
                  ios: {
                    shadowColor: DESIGN_TOKENS.colors.neutral[900],
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  },
                  android: {
                    elevation: 4,
                  },
                }),
              }}
              onPress={handleSignup}
            >
              <Text style={{
                color: DESIGN_TOKENS.colors.neutral[100],
                fontSize: DESIGN_TOKENS.typography.size.md,
                letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wide,
                fontWeight: '600',
              }}>
                CREATE ACCOUNT
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/')}>
              <Text style={{
                color: DESIGN_TOKENS.colors.neutral[900],
                fontSize: DESIGN_TOKENS.typography.size.xs,
                letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wide,
                fontWeight: '600',
                textAlign: 'center',
              }}>
                ALREADY HAVE AN ACCOUNT? SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 
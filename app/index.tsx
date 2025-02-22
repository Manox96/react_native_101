import { Text, View, Image, TouchableOpacity, Dimensions, Alert, TextInput, ScrollView, Platform } from "react-native";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { DESIGN_TOKENS, BREAKPOINTS } from './constants';
import { supabase } from './lib/supabase';
import { useAuth } from './lib/AuthContext';


export default function Index() {
  const { session } = useAuth();
  const router = useRouter();
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const isPhone = dimensions.width < BREAKPOINTS.phone || Platform.OS === 'ios';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle screen rotation and dimension changes
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  useEffect(() => {
    if (session) {
      router.replace('/home'); // Redirect to home if already logged in
    }
  }, [session]);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.replace('/home');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: DESIGN_TOKENS.colors.neutral[100] }}>
      <View style={{ 
        flex: 1,
        flexDirection: isPhone ? 'column' : 'row',
        minHeight: dimensions.height,
      }}>
        {/* Left Section - Image */}
        <View style={{
          flex: isPhone ? 0 : 1,
          height: isPhone ? dimensions.height * 0.4 : dimensions.height,
          backgroundColor: DESIGN_TOKENS.colors.neutral[900],
          position: 'relative',
          overflow: 'hidden',
        }}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            style={{
              width: '100%',
              height: '100%',
              opacity: 0.7,
            }}
            resizeMode="cover"
          />
          <View style={{
            position: 'absolute',
            left: DESIGN_TOKENS.spacing.lg,
            bottom: DESIGN_TOKENS.spacing.lg,
            right: DESIGN_TOKENS.spacing.lg,
            zIndex: DESIGN_TOKENS.layout.zIndex.above,
          }}>
            <Text style={{
              fontSize: isPhone ? DESIGN_TOKENS.typography.size.xl : DESIGN_TOKENS.typography.size.display,
              fontWeight: DESIGN_TOKENS.typography.weight.black as '900',
              color: DESIGN_TOKENS.colors.neutral[100],
              letterSpacing: DESIGN_TOKENS.typography.letterSpacing.tight,
              marginBottom: DESIGN_TOKENS.spacing.md,
            }}>
              Aymane.
            </Text>
            <Text style={{
              fontSize: isPhone ? DESIGN_TOKENS.typography.size.xs : DESIGN_TOKENS.typography.size.md,
              color: DESIGN_TOKENS.colors.neutral[300],
              opacity: 0.8,
              fontWeight: DESIGN_TOKENS.typography.weight.regular as '400',
              letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wider,
            }}>
              Say • HYY • TO . You
            </Text>
          </View>
        </View>

        {/* Right Section - Form */}
        <View style={{ 
          flex: 1,
          padding: isPhone ? DESIGN_TOKENS.spacing.md : DESIGN_TOKENS.spacing.xl,
          justifyContent: 'center',
          backgroundColor: DESIGN_TOKENS.colors.neutral[100],
          minHeight: isPhone ? 'auto' : dimensions.height,
        }}>
          <View style={{ 
            width: '100%',
            maxWidth: isPhone ? '100%' : DESIGN_TOKENS.layout.maxWidth.sm,
            alignSelf: 'center',
          }}>
            <Text style={{
              fontSize: DESIGN_TOKENS.typography.size.xs,
              fontWeight: DESIGN_TOKENS.typography.weight.semibold as '600',
              color: DESIGN_TOKENS.colors.neutral[900],
              letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wider,
              marginBottom: DESIGN_TOKENS.spacing.xs,
            }}>
              WELCOME BACK
            </Text>
            <Text style={{
              fontSize: DESIGN_TOKENS.typography.size.xl,
              fontWeight: DESIGN_TOKENS.typography.weight.semibold as '600',
              color: DESIGN_TOKENS.colors.neutral[900],
              marginBottom: DESIGN_TOKENS.spacing.lg,
              letterSpacing: DESIGN_TOKENS.typography.letterSpacing.tight,
            }}>
              Sign in to continue.
            </Text>
            
            {/* Form Section */}
            <View style={{ marginBottom: DESIGN_TOKENS.spacing.md }}>
              <Text style={{
                fontSize: DESIGN_TOKENS.typography.size.xs,
                fontWeight: DESIGN_TOKENS.typography.weight.semibold as '600',
                color: DESIGN_TOKENS.colors.neutral[900],
                letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wider,
                marginBottom: DESIGN_TOKENS.spacing.xs,
              }}>
                EMAIL ADDRESS
              </Text>
              <View style={{
                backgroundColor: DESIGN_TOKENS.colors.neutral[200],
                borderRadius: DESIGN_TOKENS.border.radius.none,
                marginBottom: DESIGN_TOKENS.spacing.md,
                borderBottomWidth: DESIGN_TOKENS.border.width.thin,
                borderColor: DESIGN_TOKENS.colors.neutral[900],
                ...Platform.select({
                  ios: {
                    paddingVertical: DESIGN_TOKENS.spacing.xs,
                  }
                })
              }}>
                <TextInput
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  style={{
                    padding: DESIGN_TOKENS.spacing.sm,
                    paddingLeft: DESIGN_TOKENS.spacing.xs,
                    fontSize: DESIGN_TOKENS.typography.size.md,
                    color: DESIGN_TOKENS.colors.neutral[900],
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  placeholderTextColor={DESIGN_TOKENS.colors.neutral[500]}
                />
              </View>

              <Text style={{
                fontSize: DESIGN_TOKENS.typography.size.xs,
                fontWeight: DESIGN_TOKENS.typography.weight.semibold as '600',
                color: DESIGN_TOKENS.colors.neutral[900],
                letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wider,
                marginBottom: DESIGN_TOKENS.spacing.xs,
              }}>
                PASSWORD
              </Text>
              <View style={{
                backgroundColor: DESIGN_TOKENS.colors.neutral[200],
                borderRadius: DESIGN_TOKENS.border.radius.none,
                marginBottom: DESIGN_TOKENS.spacing.md,
                borderBottomWidth: DESIGN_TOKENS.border.width.thin,
                borderColor: DESIGN_TOKENS.colors.neutral[900],
                ...Platform.select({
                  ios: {
                    paddingVertical: DESIGN_TOKENS.spacing.xs,
                  }
                })
              }}>
                <TextInput
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  style={{
                    padding: DESIGN_TOKENS.spacing.sm,
                    paddingLeft: DESIGN_TOKENS.spacing.xs,
                    fontSize: DESIGN_TOKENS.typography.size.md,
                    color: DESIGN_TOKENS.colors.neutral[900],
                  }}
                  secureTextEntry
                  autoCapitalize="none"
                  autoComplete="password"
                  placeholderTextColor={DESIGN_TOKENS.colors.neutral[500]}
                />
              </View>

              <TouchableOpacity>
                <Text style={{
                  color: DESIGN_TOKENS.colors.neutral[900],
                  fontSize: DESIGN_TOKENS.typography.size.xs,
                  fontWeight: DESIGN_TOKENS.typography.weight.semibold as '600',
                  letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wider,
                  marginBottom: DESIGN_TOKENS.spacing.md,
                }}>
                  FORGOT PASSWORD?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
              style={{
                backgroundColor: DESIGN_TOKENS.colors.neutral[900],
                padding: isPhone ? DESIGN_TOKENS.spacing.md : DESIGN_TOKENS.spacing.lg,
                alignItems: 'center',
                marginBottom: DESIGN_TOKENS.spacing.md,
                ...DESIGN_TOKENS.shadow.md,
              }}
              onPress={handleSignIn}
            >
              <Text style={{
                color: DESIGN_TOKENS.colors.neutral[100],
                fontSize: DESIGN_TOKENS.typography.size.md,
                fontWeight: DESIGN_TOKENS.typography.weight.semibold as '600',
                letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wider,
              }}>
                SIGN IN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text style={{
                color: DESIGN_TOKENS.colors.neutral[900],
                fontSize: DESIGN_TOKENS.typography.size.xs,
                fontWeight: DESIGN_TOKENS.typography.weight.semibold as '600',
                letterSpacing: DESIGN_TOKENS.typography.letterSpacing.wider,
                textAlign: 'center',
              }}>
                CREATE NEW ACCOUNT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

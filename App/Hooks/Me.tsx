import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  firstname: string;
  // Add other user properties here
}

interface AuthContextType {
  me: User | null;
  setMe: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [me, setMe] = useState<User | null>(null);

  // Load user data from AsyncStorage on app startup
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setMe(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, []);

  // Save user data to AsyncStorage whenever me is updated
  useEffect(() => {
    const saveUserData = async () => {
      try {
        if (me) {
          await AsyncStorage.setItem('user', JSON.stringify(me));
        } else {
          await AsyncStorage.removeItem('user');
        }
      } catch (error) {
        console.error('Error saving user data:', error);
      }
    };

    saveUserData();
  }, [me]);

  return (
    <AuthContext.Provider value={{ me, setMe }}>
      {children}
    </AuthContext.Provider>
  );
};

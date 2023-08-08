import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  authToken: string;
  country: string;
  DOB: string;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  phone: string;
  role: string;
  user_preferences_id: string;
  username: string;
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

interface BaseLayoutProps {
  children?: ReactNode;
}

export const AuthProvider: React.FC<BaseLayoutProps> = ({ children }) => {
  const [me, setMe] = useState<User | null>(null);

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

import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(false);

  // State to manage user token
  const [userToken, setUserToken] = useState(null);

  // Function to simulate a login action
  const login = () => {
    setIsLoading(true);
    setTimeout(() => {
      AsyncStorage.setItem('userToken', 'random_string_as_a_token');
      setUserToken('random_string_as_a_token');
      setIsLoading(false);
    }, 2000);
  };

  // Function to simulate a logout action
  const logout = () => {
    setIsLoading(true);
    setTimeout(() => {
      AsyncStorage.removeItem('userToken');
      setUserToken(null);
      setIsLoading(false);
    }, 2000);
  };

  // Function to check if the user is already logged in
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setTimeout(() => {
        setUserToken(userToken);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  // useEffect to check if the user is logged in on component mount
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{userToken, isLoading, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

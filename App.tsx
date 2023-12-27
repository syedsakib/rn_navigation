import React from 'react';
import AuthProvider from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
      <Toast />
    </>
  );
};

export default App;

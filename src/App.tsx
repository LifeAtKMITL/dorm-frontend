import AuthProvider from 'contexts/auth/AuthProvider';
import React from 'react';
import { LiffProvider } from 'react-liff';
import Routes from 'routes';

function App() {
  return (
    <LiffProvider liffId='1657631189-W55Rwkyr'>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </LiffProvider>
  );
}

export default App;

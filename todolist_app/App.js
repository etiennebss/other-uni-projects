import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TokenContext, UsernameContext } from './Contexte/contexte.js';

import { useState } from 'react';
import Navigation from './Navigation/navigation.js';

export default function App () {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState(null)

  console.log('token', token)
  return (
    <UsernameContext.Provider value={[username, setUsername]}>
      <TokenContext.Provider value={[token, setToken]}>
        <Navigation />
      </TokenContext.Provider>
    </UsernameContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


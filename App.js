import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from './Test';
import { Provider } from './src/MyRedux/Provider';

export default function App() {
  return (
    <Provider>
      <Test/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

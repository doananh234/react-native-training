import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ex1 from './ex1';
import Ex2 from './ex2';

export default class App extends React.Component {
  render() {
    return (
      <Ex1 />
      {/* <Ex2 /> */ }
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

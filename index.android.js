/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomHome from './js/components/CustomHome';

export default class PhotoSwipe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomHome/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('PhotoSwipe', () => PhotoSwipe);

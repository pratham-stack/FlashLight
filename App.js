/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Flashlight from './src/FlashLight';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import ApiDataScreen from './src/Screen/ApiDataScreen';


const App = () => {
  return (
    <Provider store={store}>
      {/* <Flashlight /> */}
      <ApiDataScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;

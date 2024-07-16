/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Flashlight from './src/FlashLight';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import ApiDataScreen from './src/Screen/ApiDataScreen';
import ContextScreen from './src/ContextScreen';

export const ThemeContext = createContext();
const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // commenting the below code for the implementation of UseContext 
    // <Provider store={store}>
    //   {/* <Flashlight /> */}
    //   <ApiDataScreen />
    // </Provider>

    // ---------------------------------------------------------------------

    // useContext Code
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ContextScreen />
    </ThemeContext.Provider>

  );
}

const styles = StyleSheet.create({

});

export default App;

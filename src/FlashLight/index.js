import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setInitalVal, setfOnOff } from "../Redux/Slices";

const Flashlight = () => {

  const flashLight = useSelector((state) => state.newSplice.intialVal);
  console.log("Flash Lisght ", flashLight);

  const dispatch = useDispatch();

  const handleSetData = () => {
    dispatch(flashLight ? setInitalVal(false) : setInitalVal(true))
  }

  return (
    <View>
        <Button title="Set Data" onPress={handleSetData} />
        <Text>{flashLight ? 'TRUE' : 'FALSE'}</Text>
    </View>
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.customFont}>{'Torch'}</Text>
    // </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2D4A'
  },
  customFont:{
    fontFamily: 'Danfo-Regular',
    fontSize: 50,
    color: 'yellow'
  }
});
export default Flashlight;
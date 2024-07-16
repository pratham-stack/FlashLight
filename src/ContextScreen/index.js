import React, { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import ContextScreen2 from "../ContextScreen2";

const ContextScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ContextScreen2 />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2D4A'
    },
    customFont: {
        fontFamily: 'Danfo-Regular',
        fontSize: 50,
        color: 'yellow',
        textAlign: 'center'
    }
});
export default ContextScreen;
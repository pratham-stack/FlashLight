import React, { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../../App";

const ContextScreen2 = () => {
 
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.customFont}>{theme}</Text>
            <Button title="Toggle Theme" onPress={toggleTheme} />
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
export default ContextScreen2;
import { Text, StyleSheet } from "react-native";

import { children } from "react";

function Title({children}) {
return <Text style={styles.title}> {children} </Text>; 
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
      },
});
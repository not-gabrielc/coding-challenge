import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function Spinner() {

    return (
        <View style={styles.spinner}>
            <ActivityIndicator color={"black"} />
        </View>
    )
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
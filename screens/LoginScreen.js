import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default class LoginScreen extends React.Component {

    state = {
        name: ""
    };

    continue = () => {
        this.props.navigation.navigate("Chat", { name: this.state.name });
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    }
});
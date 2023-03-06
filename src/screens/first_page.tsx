import React from "react";
import {Text, Button, View} from 'react-native';

const FirstScreen = ({navigation}) => {
    return (
        <View style={{alignItems: 'center', justifyContent:'center', flex: 1}}>
            <Text>First Screen</Text>
            <Button onPress={() => {navigation.navigate('DetailScreen')}} title="Route"></Button>
        </View>
    );
}

export default FirstScreen;
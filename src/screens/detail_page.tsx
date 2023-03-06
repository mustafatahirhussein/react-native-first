import React from "react";
import {Text, Button, View} from 'react-native';

const DetailScreen = ({navigation}) => {
    return (
        <View style={{alignItems: 'center', justifyContent:'center', flex: 1}}>
            <Text>Detail Screen</Text>
            <Button onPress={() => {navigation.goBack()}} title="Navigate Back"></Button>
        </View>
    );
}

export default DetailScreen;
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import Colors from '../colors';

const LoginView = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

///validate
const [validEmail, setValidEmail] = useState(false);
const [validPassword, setValidPassword] = useState(false);

function handleEmail(text: string) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    console.log(text);

    setEmail(text);
    if(reg.test(text)) {
        setValidEmail(false);
    }
    else {
        setValidEmail(true);
    }
}

function handlePassword(text: string) {
    const passLength = 6;

    setPassword(text);
    if(text.length <= passLength) {
        setValidPassword(true);
    }
    else {
        setValidPassword(false);
    }
}

    return (
        <View style={style.view}>
            <TextInput style={style.input} placeholder="Email" value={email} 
            onChangeText={(text) => handleEmail(text)}></TextInput>

            {validEmail ? (<Text style={{textAlign: 'right', color: 'red', marginTop: 10}}>Email format invalid</Text>) : (<Text style={{textAlign: 'right', color: 'red', marginTop: 10}}></Text>)}

            <TextInput style={style.input} placeholder="Password" value={password} secureTextEntry={true} onChangeText={(val) => handlePassword(val)}></TextInput>
            {validPassword ? <Text style={{textAlign: 'right', color: 'red', marginTop: 10}}>Password format invalid</Text> : <Text style={{textAlign: 'right', color: 'red', marginTop: 10}}></Text>}

            {email == '' || password == '' || validEmail == true || validPassword == true ? <Button disabled title='Login' onPress={() => {Alert.alert("Test", "Test Message")}}></Button> : <Button title='Login' onPress={() => {Alert.alert("Test", "Test Message")}}></Button>}
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        backgroundColor: Colors.yellow,
        height: '100%',
        width: '100%',
        padding: 20
    },
    input: {
        fontSize: 15,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1.5,
    }
})

export default LoginView;
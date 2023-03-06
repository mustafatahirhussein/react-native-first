import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity} from 'react-native';
import Colors from '../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginView = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

///validate
const [validEmail, setValidEmail] = useState(false);
const [validPassword, setValidPassword] = useState(false);
const [visibility, setVisibility] = useState(true);

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
            <Icon style={style.icon_style} name='email-outline'></Icon>
            <TextInput style={style.input} placeholder="Email" value={email} 
            onChangeText={(text) => handleEmail(text)}></TextInput>

            {validEmail ? (<Text style={{textAlign: 'right', color: 'red', marginTop: 10}}>Email format invalid</Text>) : (<Text style={{textAlign: 'right', color: 'red', marginTop: 10}}></Text>)}

            <Icon style={style.icon_style} name='lock-outline'></Icon>
            <TextInput style={style.input} placeholder="Password" value={password} secureTextEntry={visibility} onChangeText={(val) => handlePassword(val)}></TextInput>
            {validPassword ? <Text style={{textAlign: 'right', color: 'red', marginTop: 10}}>Password format invalid</Text> : <Text style={{textAlign: 'right', color: 'red', marginTop: 10}}></Text>}
            <TouchableOpacity onPress={() => setVisibility(!visibility)}>
                <Icon style={style.icon_style} name="eye"></Icon>
            </TouchableOpacity>

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
        borderRadius: 8
    },
    icon_style: {
        fontSize: 30,
        color: 'blue'
    },
})

export default LoginView;
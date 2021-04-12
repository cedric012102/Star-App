import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { set } from 'react-native-reanimated';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/SignupScreenStyle';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const bottomImage = require('../../assets/elephants.png');

console.log(state);
    // const [signIn, setSignIn] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                 <Text h3 style={styles.title}>Sign Up For The Love</Text>
                 <MaterialCommunityIcons style={styles.heartIcon} name="heart-multiple" size={30} color="red" />
                </View>
        <Input 
       label="Email" 
       value={email}
       onChangeText={setEmail}
       autoCapitalize='none'
       autoCorrect={false}
       />
   <Spacer />
   <Input 
       secureTextEntry
       label="Password" 
       value={password}
       onChangeText={setPassword}
       autoCapitalize='none'
       autoCorrect={false}
       />
       {state.errorMessage ? (
       <Text style={styles.errorMessage}>{state.errorMessage}</Text> 
       ): null}
   <Spacer>
       <Button title="Sign Up" onPress={() => signup({ email, password })}
           />
   </Spacer>
   <TouchableOpacity onPress={() => navigation.navigate('Login')}>
       <Text style={styles.link}>Already have an account? Sign in instead</Text>
   </TouchableOpacity>
        <ImageBackground source={bottomImage} style={styles.bottomImage}></ImageBackground>
    </View>
 
    ); 




SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

    // function handleLinkPress() {
    //     navigation.navigate('Login');
    // }
};

export default SignupScreen;
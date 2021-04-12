import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Animated, Easing, Dimensions, CheckBox, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const { height, width } = Dimensions.get('screen');


const LogInScreen = ({ navigation }) => {
  return (
      
    <View style={[styles.container]}>
    <LinearGradient
    style={styles.centerAlign}
    colors={['#ff00cc', '#333399']}
               
    >
      <Image source={require("../../assets/elephants.png")} 
      style={styles.logo} />
         </LinearGradient>
         <View style={[styles.centerAlign, { 
           marginTop: 10, 
           backgroundColor:'rgba(200, 200, 200, 0.9)',
           height: height, 
           }, ]}>
      <View style={[styles.inputContainer]}>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>SIGN IN</Text>
        
        <View style={{ marginTop: 30, marginBottom: 10 }}>
           <TextInput 
           placeholder="username" 
           style={styles.input} 
           />
           <TextInput 
           secureTextEntry={true}
           placeholder="password" style={styles.input} />
        </View>
        <View style={{ flexDirection: 'row'}}>
         <View>
          <CheckBox style={{ width: 20, height: 20, borderColor: '#aaa' }} />
          <Text style={{ marginLeft: 8 }}>Remember Password</Text>
          </View>
          <View style={{ flex: 0.5, alignItems: 'flex-end', }}>
          <TouchableOpacity>
            <Text style={{ color: '#c08' }}>Forgot Password</Text>
          </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity>
            <LinearGradient style={{ width: 100, padding: 15, borderRadius: 20 }} colors={['ff00cc', '#333399']}>
            <Text style={styles.signInButtonText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'stretch', marginVertical: 100, flexDirection: 'row', alignSelf: 'center', top: 50}}>
          <Text style={{ color: '#888'}}>Don't have an account?</Text>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Text onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

 
    </View>
  );
};



const styles = StyleSheet.create({
 container: {
     width: '100%',
   
 },
 centerAlign: {
     justifyContent: 'center',
     alignItems: 'center',
 },

 inputContainer: {
     backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 20,
    marginTop: -height / 1.6,
    borderRadius: 20,
    width: width / 1.1,
    height: height / 2.1,
    
 },

 input: {
     textAlign: 'center',
     fontSize: 18,
     borderWidth: 1.5,
     borderColor: '#aaa',
     borderRadius: 30,
     width: width / 1.2,
     padding: 10,
     marginVertical: 15,
 },

 logo: { 
        width: width / 1,
        height: height / 3,

 },


    signInButtonText: {
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    signInButtonContainer: {
        justifyContent: 'center',
        padding: 10,
    },

});

export default LogInScreen;
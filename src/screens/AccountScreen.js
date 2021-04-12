import React from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles/AccountScreenStyle';


const AccountScreen = ({ navigation }) => {

    return <>


        <View style={styles.container}>
        <Text>Account</Text>
        <Button title="Sign Out" />
        </View>
        

        </>
    
};



export default AccountScreen;
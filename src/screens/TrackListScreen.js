import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';



const TrackListScreen = ({ navigation }) => {

    return <>

 
        <View>
        <Text>TrackListScreen</Text>
        <Button title='Go to Track Detail' onPress={() => navigation.navigate('Signup')} />
        </View>
    </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;
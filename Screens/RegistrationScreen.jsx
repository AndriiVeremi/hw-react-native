import React from 'react';
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { RegistrationForm } from '../Components/RegistrationForm';



export const RegistrationScreen = () => {
    
  return (
    
    <ImageBackground source={require('../assets/images/PhotoBG.jpg')} style={styles.bgImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}>
                <View style={styles.container}>
                    <RegistrationForm />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({ 
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    keyboardAvoidingView: {
        flex: 1,
        marginTop: 'auto',
    },

    container: {
        marginTop: 'auto',
        width: '100%',
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FFFFFF',
    }
})

import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmit = () => {
        console.log(email);
        console.log(password);
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

  return (
    <View style={styles.form}>
        <Text style={styles.title}>Увійти</Text>
        <TextInput
            style={styles.input}
            email
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={setEmail} />
        <TextInput
            style={styles.input}
            password
            placeholder="Пароль"
            value={password}
            onChangeText={setPassword} />
        <Pressable>
            <Text style={styles.link}>Показати</Text>
        </Pressable>
        <Pressable 
            style={styles.button}
            onPress={formSubmit}>
            <Text style={styles.textButton}>Увійти</Text>
        </Pressable>
        <View style={styles.regesterContainer}>
            <Text style={styles.text}>Немає акаунту?</Text>
            <Pressable>
                <Text style={styles.textColor}>Зареєструватися</Text>
            </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 16,
        justifyContent: "space-between",
        gap: 16,
    },

    title: {
        marginVertical: 33,
        textAlign: 'center',
        fontFamily: 'roboto-medium',
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.3,
    },

    input: {
        width: '100%',
        height: 50,
        padding: 16,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        borderColor: "#E8E8E8",
        borderWidth: 1,
    },

    link: {
        position: 'absolute',
        top: -51,
        right: 16,
        color: '#1B4371',
    },

    button: {
        marginTop: 43,
        display: 'flex',
        width: '100%',
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },

    textButton: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#FFFFFF',
    },

    regesterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3,
    },

    text: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#1B4371',
    },

    textColor: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#1B4371',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    }
});


export default LoginForm;
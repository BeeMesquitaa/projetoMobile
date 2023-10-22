import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
  } from 'react-native';
import { useState } from "react";
import { CadastrarNotaProps } from "./types";
import { Alert } from "react-native";
import firestore from "@react-native-firebase/firestore";

    const telaCadastroNota =  ({navigation}: CadastrarNotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

function cadastrar() {
    setIsLoading(true);

    firestore()
        .collection('notas')
        .add({
            titulo,
            descricao,
            created_at: firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            Alert.alert("Nota", "Cadastrada com sucesso")
            navigation.navigate('Home')
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }

    return (
        <>
          <Text style={styles.Titulo}>Titulo:</Text>
          <TextInput
            style={styles.CaixaTitulo}
            onChangeText={text => {
              setTitulo(text);
            }}
          />
    
          <Text style={styles.Descricao}>Descricao:</Text>
          <TextInput
            style={styles.CaixaDescricao}
            onChangeText={text => {
              setDescricao(text);
            }}
          />
    
          <Pressable style={styles.botaoCadastrar} onPress={() => cadastrar()}>
            <Text style={{fontSize: 25, color: 'black', fontStyle: 'italic'}}>
              CADASTRAR NOTA
            </Text>
          </Pressable>
        </>
);
};

export default telaCadastroNota;


    const styles = StyleSheet.create({
    CaixaTitulo: {
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    CaixaDescricao: {
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    Titulo: {
        color: 'black',
        borderColor: 'black',
        fontSize: 20,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        fontStyle: 'italic',
    },
    Descricao: {
        color: 'black',
        borderColor: 'black',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        fontStyle: 'italic',
    },
    botaoCadastrar: {
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        borderRadius: 5,
    },
    caixaImagem: {
        marginTop: 40,
        alignItems: 'center',
    },
    fundoGeral: {
        backgroundColor: '#F0F8FF',
        flex: 1,
    },
    });


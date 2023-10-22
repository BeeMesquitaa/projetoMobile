import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ListFlat from './ListaFlat';
import ListaSection from './ListaSection';
import {CadastrarNotaProps, HomeProps} from './types';
import ExemploStylesText from './ExemploStylesText';

const Principal = ({navigation, route}: CadastrarNotaProps) => {
  return (
    <View style={styles.fundoGeral}>
      <View style={styles.viewVindo}>
        <Text style={styles.Vindo}>Seja bem vindo!</Text>
      </View>

      <Pressable
        style={styles.botaoCadastrarNotas}
        onPress={() => navigation.navigate('CadastrarNota')}>
        <Text style={{fontSize: 17, color: 'black'}}>Cadastrar Nota</Text>
      </Pressable>

      <Pressable
        style={styles.botaoListarNotas}
        onPress={() => navigation.navigate('ListarNota')}>
        <Text style={{fontSize: 17, color: 'black'}}>Listar Nota</Text>
      </Pressable>
    </View>
  );
};

export default Principal;

const styles = StyleSheet.create({
  fundoGeral: {
    backgroundColor: '#F0F8FF',
    flex: 1,
  },
  Vindo: {
    color: 'black',
    fontSize: 35 ,
    textDecorationLine: 'underline',
  },
  viewVindo: {
    alignItems: 'center',
    marginTop: 35
  },
  botaoCadastrarNotas: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 70,
    borderRadius: 5,
    elevation: 5
  },
  botaoListarNotas: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    borderRadius: 5,
    elevation: 5
  }
});

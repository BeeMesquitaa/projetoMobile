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

        <View>
        <Text style={styles.Vindo}>Seja bem vindo</Text>
        <Pressable
            style={styles.botaoCadastrarNotas}
            onPress={() => navigation.navigate('CadastrarNota')}>
            <Text style={{fontSize: 17, color: 'black'}}>Cadastrar Nota</Text>
          </Pressable>
          </View>

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
    alignItems: 'center'
  },
  botaoCadastrarNotas: {
  backgroundColor: '#DCDCDC',
  alignItems: 'center',
  marginTop: 200
  }
})

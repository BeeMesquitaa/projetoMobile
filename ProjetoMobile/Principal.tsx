import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ListFlat from './ListaFlat';
import ListaSection from './ListaSection';
import { Props } from './App';

const lista = [
  {key: 1, descricao: 'teste'},
  {key: 2, descricao: 'teste2'},
  {key: 3, descricao: 'teste3'},
  {key: 4, descricao: 'teste4'},
  {key: 4, descricao: 'abobrinha'},
];

const Principal = ({ navigation, route }: Props) => {
  return (
    <>

      <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Detalhes')} />
    
      <ListFlat array={lista} />

      <ListFlat array={lista} />
    </>
  );
};

export default Principal;

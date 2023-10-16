import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ListaFlat from './ListaFlat';

type ListaSectionProps = {
  array: {
    title: string;
    data: {key: number; descricao: string}[];
  }[];
};

const ListaSection = (props: ListaSectionProps) => {
  return (
    <SectionList
      sections={props.array}
      renderItem={({item}) => <Text style={styles.item}>{item.descricao}</Text>}
      renderSectionHeader={({section}) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      keyExtractor={item => `basicListEntry-${item}`}
    />
  );
};

export default ListaSection;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 10,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)',
  },
});

import React from 'react';
import{
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

type ListaFlatProps = {
    array: {key: number, descricao: string}[]
}

const ListFlat = (props: ListaFlatProps) => {
    return <FlatList
        data={props.array}
        renderItem={({item}) => (
            <Text style={styles.item}>{item.descricao}</Text>)}
    
    />
}

export default ListFlat;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
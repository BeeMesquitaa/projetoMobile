import { useEffect, useState } from "react";
import { ListarNotaProps } from "./types";
import firestore from "@react-native-firebase/firestore";
import { INotas } from "../models/INotas";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default ({navigation, route}: ListarNotaProps) => {
    const [notas, setNotas] = useState([] as INotas[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('notas')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc=> {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                    
                }) as INotas[];

                setNotas(data);
                setIsLoading(false);
            });

            return () => subscribe();
    }, []);

    return (
        <View>
            <Text style={{fontSize: 30}}>Listagem de Notas</Text>
            <FlatList
                data={notas}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <Text>{info.index}</Text>
                            <Text>{info.item.titulo}</Text>
                            <Text>{info.item.descricao}</Text>

                        </View>
                    );
                }}>
            </FlatList>
        </View>
    );

}
const styles = StyleSheet.create ({
    card: {
        backgroundColor: 'black'
    }
});

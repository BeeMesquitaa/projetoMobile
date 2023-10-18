import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import {HomeProps} from './types';
import ExemploStylesView from './ExemploStyleView';

const Tela_Login = ({navigation}: HomeProps) => {
  return (
    <>
      <View>
        <Image source={require('../assets/ney.jpeg')} />

        <Text style={styles.Email}>Email:</Text>
        <TextInput style={styles.CaixaEmail} />

        <Text style={styles.Senha}>Senha:</Text>
        <TextInput style={styles.CaixaSenha} />

        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate('Detalhes')}>
          <Text style={{fontSize: 20, color: 'white'}}>Acessar</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Tela_Login;

const styles = StyleSheet.create({
  CaixaSenha: {
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  CaixaEmail: {
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  Email: {
    borderColor: 'black',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    fontStyle: 'italic',
  },
  Senha: {
    borderColor: 'black',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    fontStyle: 'italic',
  },
  botao: {
    backgroundColor: 'grey',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    borderRadius: 5,
  },
});

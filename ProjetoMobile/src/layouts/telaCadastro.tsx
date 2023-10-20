import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
} from 'react-native';
import {CadastrarProps} from './types';
import ExemploStylesView from './ExemploStyleView';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';

const TelaCadastro = ({navigation}: CadastrarProps) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function cadastrar() {
    setIsLoading(true);

    if (email && senha) {
      auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(() => {
          Alert.alert('Conta', 'Cadastrado com sucesso');
          navigation.navigate('Cadastrar');
        })
        .catch(error => {
          console.log(error);
          Alert.alert('Erro', String(error));
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else setIsLoading(false);
  }

  return (
    <>
      <Text style={styles.Email}>Email:</Text>
      <TextInput
        style={styles.CaixaEmail}
        onChangeText={text => {
          setEmail(text);
        }}
      />

      <Text style={styles.Senha}>Senha:</Text>
      <TextInput
        style={styles.CaixaSenha}
        onChangeText={text => {
          setSenha(text);
        }}
      />

      <Pressable style={styles.botaoCadastrar} onPress={() => cadastrar()}>
        <Text style={{fontSize: 25, color: 'black', fontStyle: 'italic'}}>
          CADASTRAR
        </Text>
      </Pressable>
    </>
  );
};

export default TelaCadastro;

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
    color: 'black',
    borderColor: 'black',
    fontSize: 20,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    fontStyle: 'italic',
  },
  Senha: {
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

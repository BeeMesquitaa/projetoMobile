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
import {CadastrarProps, HomeProps} from './types';
import ExemploStylesView from './ExemploStyleView';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';

const Tela_Login = ({navigation}: CadastrarProps) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function logar() {
    if(email && email){
    setIsLoading(true);

    try {
      auth()
        .signInWithEmailAndPassword(email, senha)
        .then(() => {
          navigation.navigate('Home');
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
}

  function redefinirSenha() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert('Redefinir senha', 'Enviamos um email para você!'),
      )
      .catch(error => console.log(error));
  }

  return (
    <>
      <View style={styles.fundoGeral}>
        <View style={styles.caixaImagem}>
          <Image source={require('../assets/ney.jpeg')} style={styles.avatar} />
        </View>

        <Text style={styles.Email}>Email:</Text>
        <TextInput style={styles.CaixaEmail}
        onChangeText={(text) => {setEmail(text) }} />

        <Text style={styles.Senha}>Senha:</Text>
        <TextInput style={styles.CaixaSenha} 
        onChangeText={(text) => {setSenha(text) }}/>

        <Pressable
          style={styles.botaoAcessar}
          onPress={() => logar()}>
          <Text style={{fontSize: 25, color: 'black', fontStyle: 'italic'}}>
            ACESSAR
          </Text>
        </Pressable>

        <View style={styles.Botoes}>
          <Pressable
            style={styles.botaoEsqueci}
            onPress={() => redefinirSenha()}>
            <Text style={{fontSize: 17, color: 'grey'}}>Esqueci a senha</Text>
          </Pressable>

          <Pressable
            style={styles.botaoCadastrar}
            onPress={() => navigation.navigate('Cadastrar')}>
            <Text style={{fontSize: 17, color: 'grey'}}>Cadastrar</Text>
          </Pressable>
        </View>
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
  botaoAcessar: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
    borderRadius: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
  },
  caixaImagem: {
    marginTop: 40,
    alignItems: 'center',
  },
  botaoEsqueci: {
    width: 130,
    alignItems: 'center',
    height: 25,
    marginTop: 15,
    borderRadius: 5,
  },
  botaoCadastrar: {
    width: 85,
    alignItems: 'center',
    height: 25,
    marginTop: 15,
    borderRadius: 5,
  },
  Botoes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  fundoGeral: {
    backgroundColor: '#F0F8FF',
    flex: 1,
  },
});

import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Detalhes: undefined;
  Login: undefined;
  Cadastrar: undefined;
  Esqueci: undefined;
  CadastrarNota: undefined;
  ListarNota: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadastrarProps = NativeStackScreenProps<RootStackParamList, 'Cadastrar'>;

type CadastrarNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastrarNota'>;

type ListarNotaProps = NativeStackScreenProps<RootStackParamList, 'ListarNota'>;

export type {HomeProps, RootStackParamList, LoginProps, CadastrarProps, CadastrarNotaProps, ListarNotaProps};

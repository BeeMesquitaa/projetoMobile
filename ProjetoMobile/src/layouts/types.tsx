import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Detalhes: undefined;
  Login: undefined;
  Cadastrar: undefined;
  Esqueci: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadastrarProps = NativeStackScreenProps<RootStackParamList, 'Cadastrar'>;

export type {HomeProps, RootStackParamList, LoginProps, CadastrarProps};

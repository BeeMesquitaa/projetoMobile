import {Text, View} from 'react-native';
import { CadastrarNotaProps } from '../layouts/types';
import TelaCadastroNota from '../layouts/TelaCadastroNota';


const CadastrarNotaScreen = ({navigation, route}: CadastrarNotaProps) => {
  return (
      <TelaCadastroNota navigation={navigation} route={route} />
  );
};

export default CadastrarNotaScreen;
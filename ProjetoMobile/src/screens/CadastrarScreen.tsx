import {Text, View} from 'react-native';
import { CadastrarProps } from '../layouts/types';
import TelaCadastro from '../layouts/telaCadastro';

const CadastrarScreen = ({navigation, route}: CadastrarProps) => {
  return (
      <TelaCadastro navigation={navigation} route={route} />
  );
};

export default CadastrarScreen;
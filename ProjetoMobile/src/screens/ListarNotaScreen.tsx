import Principal from '../layouts/Principal';
import TelaListarNotas from '../layouts/TelaListarNotas';
import { ListarNotaProps} from '../layouts/types';
import {Text, View} from 'react-native';

const ListarNotaScreen = ({navigation, route}: ListarNotaProps) => {
  return (
    <View style={{flex: 1}}>
      <TelaListarNotas navigation={navigation} route={route} />
    </View>
  );
};

export default ListarNotaScreen;

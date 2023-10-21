import Principal from '../layouts/Principal';
import Tela_Login from '../layouts/tela_login';
import {HomeProps} from '../layouts/types';
import {Text, View} from 'react-native';

const HomeScreen = ({navigation, route}: HomeProps) => {
  return (
    <View style={{flex: 1}}>
      <Principal navigation={navigation} route={route} />
    </View>
  );
};

export default HomeScreen;

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../layouts/types';
import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import CadastrarScreen from '../screens/CadastrarScreen';
import EsqueciScreen from '../screens/EsqueciScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
      <Stack.Screen name="Esqueci" component={EsqueciScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

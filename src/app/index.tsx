import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from '../components/Counter';
import Calc from '../components/Calc';
import Home from './home';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="Calc" component={Calc} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default App;
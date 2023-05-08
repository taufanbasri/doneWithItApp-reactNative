import { View } from 'react-native';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  return (
    <View>
      <AppTextInput placeholder='Username' icon='email' />
    </View>
  );
}

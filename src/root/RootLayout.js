import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from '../navigation/StackNavigator';


export default function RootLayout() {
  return (
      <SafeAreaView
       style={{ flex: 1 }}
        edges={['right','left']} 
        >
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
  )
}

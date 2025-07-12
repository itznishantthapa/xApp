import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Main from './src/main/Main';
import Toast from 'react-native-simple-toast';


export default function App() {
  return (
    <SafeAreaProvider >
      <Main/>
    </SafeAreaProvider>

  )
}

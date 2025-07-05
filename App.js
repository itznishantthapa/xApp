import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Main from './src/main/Main';


export default function App() {
  return (
    <SafeAreaProvider >
      <Main/>
    </SafeAreaProvider>

  )
}

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootLayout from './src/root/RootLayout';


export default function App() {
  return (
    <SafeAreaProvider >
      <RootLayout/>
    </SafeAreaProvider>

  )
}

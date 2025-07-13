import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Main from './src/main/Main';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { useEffect } from 'react';



export default function App() {
  useEffect(() => {
    SystemNavigationBar.setNavigationColor('transparent');
  }, []);
  return (
    <SafeAreaProvider >
      <Main/>
    </SafeAreaProvider>

  )
}

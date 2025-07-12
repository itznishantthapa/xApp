import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashNavigator from '../navigation/SplashNavigator';
import SignupNavigator from '../navigation/SignupNavigator';
import CustomerNavigator from '../navigation/CustomerNavigator';
import AdminNavigator from '../navigation/AdminNavigator';
import { useStateStore } from '../store/stateStore';


export default function RootLayout() {

  const {isInitialized,isAuthenticated,isAdmin,isCustomer} = useStateStore();  


  let content;

  if(!isInitialized) content = <SplashNavigator/> ;
  else if (!isAuthenticated) content = <SignupNavigator/> ;
  else if (isAdmin) content = <AdminNavigator />;
  else if (isCustomer) content = <CustomerNavigator/>

  return (
      <SafeAreaView
       style={{ flex: 1 }}
       edges={['right','left',]}  
        >
        <NavigationContainer>
         {content}
        </NavigationContainer>
      </SafeAreaView>
  )
}


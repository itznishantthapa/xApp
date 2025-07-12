import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashNavigator from '../navigation/SplashNavigator';
import SignupNavigator from '../navigation/SignupNavigator';
import CustomerNavigator from '../navigation/CustomerNavigator';
import AdminNavigator from '../navigation/AdminNavigator';
import { useStateStore } from '../store/stateStore';
import { ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';


export default function RootLayout() {
  const { isAuthenticated, initAuth,logout } = useAuthStore();

  const { isInitialized,setInitialized, isAdmin, isCustomer, isActivity } = useStateStore();

  useEffect(() => {
   const init = async () => {
    await initAuth();           // 1. Load user and auth state
    setInitialized(true);       // 2. Then mark initialized
  };

  init(); // run once only
  
  }, []);

  let content;

  if (!isInitialized) content = <SplashNavigator />;
  else if (!isAuthenticated) content = <SignupNavigator />;
  else if (isAdmin) content = <AdminNavigator />;
  else if (isCustomer) content = <CustomerNavigator />
  else if (isActivity) content = <ActivityIndicator />

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['right', 'left',]}
    >
      <NavigationContainer>
        {content}
      </NavigationContainer>
    </SafeAreaView>
  )
}


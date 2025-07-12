import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashNavigator from '../navigation/SplashNavigator';
import SignupNavigator from '../navigation/SignupNavigator';
import CustomerNavigator from '../navigation/CustomerNavigator';
import AdminNavigator from '../navigation/AdminNavigator';
import { useStateStore } from '../store/stateStore';
import { ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import Toast from 'react-native-simple-toast';


export default function RootLayout() {
  const { isAuthenticated, initAuth, logout, isAdmin, isCustomer, isInitialized } = useAuthStore();
  const { isActivity } = useStateStore();

  useEffect(() => {
    const init = async () => {
      await initAuth();           // 1. Load user and auth state
    };
    setTimeout(() => {
      init();
    }, 2000)
  }, []);

  let content;

  if (!isInitialized) content = <SplashNavigator />;
  else if (!isAuthenticated) content = <SignupNavigator />;
  else if (isCustomer) {
    content = <CustomerNavigator />;
    Toast.show('Successful Login Customer!');
  }
  else if (isAdmin) {
    content = <AdminNavigator />;
    Toast.show('Successful Login Admin!');
  }
  else if (isActivity) content = <ActivityIndicator />

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <SafeAreaView
        style={{ flex: 1 }}
        edges={['right', 'left']}
      >
        <NavigationContainer>
          {content}
        </NavigationContainer>
      </SafeAreaView>
    </View>
  )
}


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

/*
  We zustand state stores.
  These states provide us with the necessary state and actions.
*/
  const {isInitialized, isAuthenticated, initAuth, isAdmin, isCustomer} = useAuthStore();
  const { isActivity } = useStateStore();

  

/*
 The init() is called after a delay to simulate an asynchronous operations, 
 In this two sec delay the splash screen is shown,
 By default isInitialized is false
*/
  useEffect(() => {
    const init = async () => {
      await initAuth();     
    };
    setTimeout(() => {
      init();
    }, 2000)
  }, []);



/*
  Based on the authentication state, we render different navigators.
*/
  let content;
  if (!isInitialized) {
    content = <SplashNavigator />;
  } else if (!isAuthenticated) {
    content = <SignupNavigator />;
  } else if (isCustomer) {
    content = <CustomerNavigator />;
    Toast.show('Successful Login Customer!');
  } else if (isAdmin) {
    content = <AdminNavigator />;
    Toast.show('Successful Login Admin!');
  } else if (isActivity) {
    content = <ActivityIndicator />;
  }


/*
Finally, we render the main layout "content".
*/
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


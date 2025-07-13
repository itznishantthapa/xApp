import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashNavigator from '../navigation/SplashNavigator';
import SignupNavigator from '../navigation/SignupNavigator';
import CustomerNavigator from '../navigation/CustomerNavigator';
import AdminNavigator from '../navigation/AdminNavigator';
import { useStateStore } from '../store/stateStore';
import { ActivityIndicator, Animated, View ,Text} from 'react-native';
import { useEffect, useRef } from 'react';
import { useAuthStore } from '../store/authStore';
import Toast from 'react-native-simple-toast';



export default function RootLayout() {

  /*
    We zustand state stores.
    These states provide us with the necessary state and actions.
  */
  const { isAuthenticated, initAuth, isAdmin, isCustomer } = useAuthStore();
  const { isActivity, setInitialized, isInitialized } = useStateStore();


  /*
    Added an animated fade-in effect for the splash screen.
  */
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [isInitialized, isCustomer, isAdmin, isAuthenticated]);



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
      setInitialized(true);
    }, 500); // Simulate a delay for splash screen
    init();
  }, []);



  /*
    Based on the authentication state, we render different navigators.
  */
  function getContent() {

  if ( isAuthenticated && isCustomer) {
    setTimeout(() => {
      Toast.show('Successful Login Customer!');
    }, 5000); // Simulate a delay for splash screen

      return <CustomerNavigator />;
    } else if (isInitialized && isAuthenticated && isAdmin) {
      Toast.show('Successful Login Admin!');
      return <AdminNavigator />;
    } else if (!isAuthenticated && isInitialized) {
      return <SignupNavigator />;
    }

  }

 if (!isInitialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>hello world</Text>
      </View>
    );
  }

  /*
  Finally, we render the main layout "content".
  */
  return (
    <>
      <SafeAreaView
        style={{ flex: 1 }}
        edges={['right', 'left']}
      >
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <NavigationContainer>
            {getContent()}
          </NavigationContainer>
        </Animated.View>
      </SafeAreaView>
    </>
  )
}


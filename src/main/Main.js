import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignupNavigator from '../navigation/SignupNavigator';
import CustomerNavigator from '../navigation/CustomerNavigator';
import AdminNavigator from '../navigation/AdminNavigator';
import { Animated} from 'react-native';
import { useEffect, useRef } from 'react';
import Toast from 'react-native-simple-toast';
import { useAuthStore } from '../store/authStore';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();




export default function RootLayout() {

  /*
    We zustand state stores.
    These states provide us with the necessary state and actions.
  */
  const { isAuthenticated, initAuth, isAdmin, isCustomer, isInitialized } = useAuthStore();




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
  }, []);





  /*
   The init() is called after a delay to simulate an asynchronous operations, 
   In this 4 sec delay the splash screen is shown,
   By default isInitialized is false
  */
  useEffect(() => {
    const init = async () => {
      await initAuth();
      console.log(isInitialized)
    }
    init();
  }, []);

  /*
    Hide splash screen when app is initialized
  */
  useEffect(() => {
    if (isInitialized && getContent() !== null) {
      setTimeout(()=>{

        SplashScreen.hide();
      },4000)
    }
  }, [isInitialized, isAuthenticated, isAdmin, isCustomer]);


  /*
    Show a toast message based on the authentication state.
  */
  useEffect(() => {
    if (isInitialized && isAuthenticated && isCustomer) {
      Toast.show('Successful Login Customer!', Toast.SHORT);
    } else if (isInitialized && isAuthenticated && isAdmin) {
      Toast.show('Successful Login Admin!', Toast.SHORT);
    }
  }, [isInitialized, isAuthenticated]);





  /*
    Based on the authentication state, we render different navigators.
  */
  function getContent() {
    if (!isInitialized) return null;
    if (isAuthenticated) {
      return isCustomer ? <CustomerNavigator /> : isAdmin ? <AdminNavigator /> : null;
    }
    return <SignupNavigator />;
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


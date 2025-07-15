import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuthStore } from '../../store/authStore';



const SplashScreen = () => {
 const { isInitialized } = useAuthStore();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(()=>{
      if (isInitialized) navigation.replace('home');
    },2000)
  }, [isInitialized]);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <SafeAreaView style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}>
        <Text style={styles.favTxt}>Customer</Text>
        <View style={styles.container}>
          <Text style={styles.text}>Customer SplashScreen</Text>
        </View>
      </SafeAreaView>


    </>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favTxt: {
    color: '#ffffff'
  },
  text: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    borderRadius: 10,
  }
})
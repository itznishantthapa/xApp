import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const SplashScreen = () => {
  return (
        <>
            <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
            />
          
            <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
              <Text style={styles.favTxt}>SplashScreen</Text>
              <View style={styles.container}>
               <Text style={styles.text}>SplashScreen</Text>
              </View>
            </SafeAreaView>

        </>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  favTxt:{
    color:'#ffffff'
  },
  text:{
    fontSize:20,
    color:'black',
    padding:10,
    borderRadius:10,
  }
})
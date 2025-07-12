import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  return (
        <>
            <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
            />
          
            <SafeAreaView style={{ flex: 1,backgroundColor:'yellow' }}>
              <Text>Home</Text>
              <View style={styles.container}>
               <Text style={styles.text} onPress={()=>navigation.navigate('favorite')}>Click</Text>
              </View>
            </SafeAreaView>

        </>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:20,
    color:'black',
    padding:10,
    backgroundColor:'red',
    borderRadius:10,
  }
})
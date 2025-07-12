import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStateStore } from '../../store/stateStore'

const Create = () => {
  const {setAuthenticated,setCustomer,setAdmin} = useStateStore();


  function  handleAccountCreate(){

    setAuthenticated(true);
    setCustomer(true); 


  }
  return (
        <>
            <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
            />
          
            <SafeAreaView style={{ flex: 1,backgroundColor:'blue' }}>
              <Text style={styles.favTxt}>Admin Create</Text>
              <View style={styles.container}>
               <Text style={styles.text} onPress={handleAccountCreate}>Create Account</Text>
              </View>
            </SafeAreaView>

        </>
  )
}

export default Create

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
    backgroundColor:'red',
    borderRadius:10,
  }
})
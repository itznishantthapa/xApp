import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splash/SplashScreen";
const Stack = createStackNavigator();

export default function SplashNavigator(){
    return(
        <>
         <Stack.Navigator screenOptions={{headerShown:false, animation:'slide_from_right'}}>
            <Stack.Screen component={SplashScreen} name="splash"/>
         </Stack.Navigator>
        </>
    );
}
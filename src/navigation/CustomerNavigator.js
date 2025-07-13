import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../screens/customer/Favorite";
import Home from "../screens/customer/Home";
import SplashScreen from "../screens/customer/Splash";
const Stack = createStackNavigator();


export default function CustomerNavigator(){
    return(
        <>
        <Stack.Navigator 
        screenOptions={{headerShown:false,animation:'slide_from_right'}} 
        >
            <Stack.Screen component={SplashScreen} name="splash"/>
            <Stack.Screen component={Home} name="home"/>
            <Stack.Screen component={Favorite} name="favorite"/>
        </Stack.Navigator>
        </>
    );
}
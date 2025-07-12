import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../screens/customer/Favorite";
import Home from "../screens/customer/Home";
const Stack = createStackNavigator();


export default function CustomerNavigator(){
    return(
        <>
        <Stack.Navigator screenOptions={{headerShown:false,animation:'slide_from_right'}}>
            <Stack.Screen component={Favorite} name="favorite"/>
            <Stack.Screen component={Home} name="home"/>
        </Stack.Navigator>
        </>
    );
}
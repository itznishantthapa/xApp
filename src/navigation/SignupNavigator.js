import { createStackNavigator } from "@react-navigation/stack";
import Create from "../screens/signup/Create";
import Login from "../screens/signup/Login";
const Stack = createStackNavigator();

export default function SignupNavigator(){
    return(
        <>
        <Stack.Navigator screenOptions={{headerShown:false,animation:'fade'}}>
        <Stack.Screen component={Create} name="create"/>
        <Stack.Screen component={Login} name="login"/>
        </Stack.Navigator>
        </>
    );
}
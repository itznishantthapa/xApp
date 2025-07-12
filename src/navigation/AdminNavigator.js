import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/admin/Dashboard";
import Profile from "../screens/admin/Profile";
const Stack = createStackNavigator();


export default function AdminNavigator(){
    return(
        <>
          <Stack.Navigator screenOptions={{headerShown:false,animation:'fade_from_bottom'}}>
            <Stack.Screen component={Dashboard} name="dashboard"/>
            <Stack.Screen component={Profile} name="profile"/>
          </Stack.Navigator>
        </>
    );
}
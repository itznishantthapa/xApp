import { createStackNavigator } from "@react-navigation/stack"
import Test from "../screens/TestScreen";
import TestScreen2 from "../screens/TestScreen2";
const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation:'fade' }}>
            <Stack.Screen name="test" component={Test} />
            <Stack.Screen name="testscreen2" component={TestScreen2} />
        </Stack.Navigator>
    )
}
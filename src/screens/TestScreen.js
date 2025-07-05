
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useUserStore } from '../store/userStore';

export default function Test() {
    const {setUser,user}= useUserStore();
    const navigation = useNavigation();


    const handleValueWithNavigation=()=>{
        setUser('Nishant');
        navigation.navigate('testscreen2');
    }
    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
          
                <SafeAreaView style={{ flex: 1,backgroundColor:'red' }}>
                    <Text onPress={handleValueWithNavigation}>
                           {user ? `User: ${user}` : 'No user set'}
                    </Text>
                </SafeAreaView>

        </>
    );
}


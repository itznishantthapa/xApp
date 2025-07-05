
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useUserStore } from '../store/userStore';

export default function TestScreen2() {
    const {user, setUser, clearUser} = useUserStore();
    const navigation = useNavigation();
    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
          
                <SafeAreaView style={{ flex: 1,backgroundColor:'pink' }}>
                    <Text onPress={() => navigation.navigate('test') }>
                        {user ? `User: ${user}` : 'No user set'}
                    </Text>
                </SafeAreaView>

        </>
    );
}


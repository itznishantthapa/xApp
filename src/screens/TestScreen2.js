
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function TestScreen2() {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
          
                <SafeAreaView style={{ flex: 1,backgroundColor:'pink' }}>
                    <Text onPress={() => navigation.navigate('test')}>
                        Go
                    </Text>
                </SafeAreaView>

        </>
    );
}


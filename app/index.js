import {View, ScrollView, SafeAreaView} from 'react-native';
import {Stack} from 'expo-router';
import {COLORS, SIZES, icons, images} from '../constants';
import {ScreenHeaderBtn, Main} from '../components'

export default function Home() {

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>),
                headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>),
                headerTitle: "",
            }}/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding:SIZES.medium}}>
                    <Main/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
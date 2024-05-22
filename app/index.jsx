import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from  'react-native-safe-area-context';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  // const { isLoading, isLoggedIn } = useGlobalContext();

  // if(!isLoading && isLoggedIn) return <Redirect href='/home' />


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <Text className='text-2xl text-white font-psemibold'>Index Screen</Text>  
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

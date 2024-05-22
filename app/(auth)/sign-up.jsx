import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w=full justify-center h-full px-4 my-6'>
          <Text className='text-2xl text-white font-psemibold'>Sign-up</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
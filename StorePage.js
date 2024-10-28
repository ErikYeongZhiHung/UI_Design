import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'

const StorePage = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#3F4A4A] p-6">
      <View className="flex-row justify-between items-center mb-8 mt-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-[#00FFD1] rounded-full px-6 py-2">
          <Text className="text-black">Back</Text>
        </TouchableOpacity>
        
        <View style={{ width: 60 }} />
      </View>

      <View className='flex-1 justify-center items-center'>
        <Text className='text-lg  text-white'>Store Page</Text>
      </View>
     
    </SafeAreaView>
  )
}

export default StorePage
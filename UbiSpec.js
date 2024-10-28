import { View, Text,TouchableOpacity,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const UbiSpec = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#3F4A4A] p-6">
        <ScrollView contentContainerStyle={{flex:1}}>
    <View className="flex-row justify-between items-center mb-8 mt-4">
      <TouchableOpacity onPress={() => navigation.goBack()} className="bg-[#00FFD1] rounded-full px-6 py-2">
        <Text className="text-black">Back</Text>
      </TouchableOpacity>
      <Text className="text-white text-lg">Ubiplay</Text>
      <View style={{ width: 60 }} />
    </View>

    <View className="flex-row  mb-6 mt-10">
     
      <View className="flex-1">
        <Text className="text-white">MINIMUM:</Text>
        <View className='mx-4 mt-2 py-1'>
        <Text className="text-white text-xs mb-1 ">• OS: Windows® 10 (64-bit).</Text>
        <Text className="text-white text-xs mb-1">• Processor: Intel® Core™ i3-530 (dual-core) / AMD® Phenom™ II X4 965 (quad-core)</Text>
        <Text className="text-white text-xs mb-1">• Memory: 4 GB RAM</Text>
        <Text className="text-white text-xs mb-1">• Graphics: NVIDIA® GeForce® GTS 450 (1 GB) / AMD® Radeon™ HD 7750 (1 GB)</Text>
        <Text className="text-white text-xs mb-1">• DirectX: Version 10</Text>
        <Text className="text-white text-xs mb-1">• Storage: 5 GB available space</Text>
        
        </View>
        <Text className="text-white">• RECOMMENDED:</Text>
        <View className='mx-4 mt-2 py-1'>
        <Text className="text-white text-xs mb-1 ">• OS: Windows® 10 (64-bit).</Text>
        <Text className="text-white text-xs mb-1">• Processor: Intel® Core™ i5-2500K (quad-core) / AMD® FX-Series™ FX-8320 (quad-core)</Text>
        <Text className="text-white text-xs mb-1">• Memory: 8 GB RAM</Text>
        <Text className="text-white text-xs mb-1">• Graphics: NVIDIA® GeForce® GTX 970 (4 GB) / AMD® Radeon™ R9 290X (4 GB)</Text>
        <Text className="text-white text-xs mb-1">• DirectX: Version 12</Text>
        <Text className="text-white text-xs mb-1">• Storage: 5 GB available space</Text>
        
        </View>
      </View>
     
     
    </View>
  
    </ScrollView>
  </SafeAreaView>
  )
}

export default UbiSpec
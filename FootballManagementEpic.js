import { View, Text, SafeAreaView, TouchableOpacity, FlatList,Image } from 'react-native'
import React from 'react';

const FootballManagementEpic = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#3F4A4A] p-6">
    <View className="flex-row justify-between items-center mb-8 mt-4">
      <TouchableOpacity onPress={() => navigation.goBack()} className="bg-[#00FFD1] rounded-full px-6 py-2">
        <Text className="text-black">Back</Text>
      </TouchableOpacity>
      <Text className="text-white text-lg">Epic Games</Text>
      <View style={{ width: 60 }} />
    </View>

    <View className="flex-row  mb-6 mt-10">
      <Image
        source={require('../../assets/Image2.png')}
        className="w-24 h-28 bg-white rounded-lg mr-4"
      />
      <View className="flex-1">
        <Text className="text-white">Building Sim game</Text>
        <Text className="text-white text-xs ">• A 2023 city-building game developed by Colossal Order and published by Paradox Interactive. The game is a sequel and expands upon many of its simulation factors such as simulated city and population sizes with improved traffic AI and management schemes.</Text>
        <Text className="text-white text-xs">• RM100.00</Text>
        <Text className="text-white text-xs">• Available on other platforms like XBOX and PS5.</Text>
        
      </View>
     
     
    </View>
    <View className='flex-1 flex-row justify-between  items-center '>
   <TouchableOpacity onPress={() => navigation.navigate('StorePage') } className='h-12 items-center justify-center w-24 bg-[#08FB4C] rounded-2xl'>
      <Text>Store Page</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => navigation.navigate('EpicGameReview') } className='h-12 items-center justify-center w-24 bg-[#FB0808] rounded-2xl'>
      <Text>Player's review</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => navigation.navigate('EpicGameSpec') } className='h-12 items-center justify-center w-24 bg-[#F608FB] rounded-2xl'>
      <Text>PC Spec</Text>
   </TouchableOpacity>
</View>
   
  </SafeAreaView>
  )
}

export default FootballManagementEpic
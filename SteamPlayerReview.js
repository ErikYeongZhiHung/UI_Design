
import { View, Text, SafeAreaView, TouchableOpacity, FlatList,Image } from 'react-native'
import React from 'react'

const SteamPlayerReview = ({navigation,route}) => {

   
   
    const data = [
        { id: 1, text: 'This game is fun but I wish it could be more content in it.', icon: require('../../assets/man.png') },
        { id: 2, text: 'I wish the developers cares more about the game than their own pockets.', icon: require('../../assets/man.png') },
        { id: 3, text: 'This game is fun but I wish it could be more content in it.', icon: require('../../assets/man.png') },
        { id: 4, text: 'This game is fun but I wish it could be more content in it.', icon: require('../../assets/man.png') },
        
        
    ]
  return (
    <SafeAreaView className="flex-1 bg-[#3F4A4A] p-6">
            <View className="flex-row justify-between items-center mb-8 mt-4">
                <TouchableOpacity onPress={() => navigation.goBack() } className="bg-[#00FFD1] rounded-full px-6 py-2">
                    <Text className="text-black">Back</Text>
                </TouchableOpacity>
                <Text className="text-white text-lg">Steam</Text>
                <View style={{ width: 60 }} />
            </View>
            <View className='mt-8'>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View className='flex-row items-center space-x-3 mb-14'>
                           <Image source={item.icon} className=' h-20 w-20' resizeMode='contain'/>
                           <Text className=' text-white text-base flex-1'>{item.text}</Text>
                            </View>
                        )
                    }}
                />
            </View>



        </SafeAreaView>
  )
}

export default SteamPlayerReview
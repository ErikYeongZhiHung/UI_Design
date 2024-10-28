import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const UbiplayScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#3F4A4A] p-6">
      <View className="flex-row justify-between items-center mb-8 mt-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-[#00FFD1] rounded-full px-6 py-2">
          <Text className="text-black">Back</Text>
        </TouchableOpacity>
        <Text className="text-white text-lg">Ubiplay</Text>
        <View style={{ width: 60 }} />
      </View>

      <View className="flex-row items-center mb-6">
        <Image
          source={require('../../assets/Image.png')}
          className="w-12 h-12 bg-white rounded-lg mr-4"
        />
        <View className="flex-1">
          <Text className="text-white">War game</Text>
          <Text className="text-white">• Interactive campaign</Text>
          <Text className="text-white">• Engaging PvP</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('UbiGameDetails')} className="bg-[#00FFD1] rounded-full px-4 py-2">
          <Text className="text-black">Learn more</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center">
        <Image
          source={require('../../assets/Image.png')}
          className="w-12 h-12 bg-white rounded-lg mr-4"
        />
        <View className="flex-1">
          <Text className="text-white">Basketball game</Text>
          <Text className="text-white">• Interactive UI</Text>
          <Text className="text-white">• Endless mode</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('UbiBaskitball') } className="bg-[#00FFD1] rounded-full px-4 py-2">
          <Text className="text-black">Learn more</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default UbiplayScreen;

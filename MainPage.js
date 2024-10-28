import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainPage = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#3F4A4A]">
      <View className="container mx-auto sm:px-6 lg:px-8">
        <View className="mt-12 items-center">
          <Text className="text-white text-lg">Informative games</Text>
          <View className="flex-row mt-8 space-x-3 items-center justify-center bg-white px-4 h-10 rounded-3xl">
            <Ionicons name="menu-outline" size={24} color="black" />
            <TextInput
              placeholder="Hinted search text"
              placeholderTextColor="black"
              className="text-black"
            />
            <Ionicons name="search-outline" size={24} color="black" />
          </View>
        </View>

        <View className="justify-center items-center flex-row mt-12 space-x-8">
          <TouchableOpacity onPress={() => navigation.navigate('Steam')} className="bg-[#130FF7] rounded-3xl h-12 w-32 items-center justify-center">
            <Text className="text-lg text-white">Steam</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('EpicsGamePage') } className="bg-[#151415] rounded-3xl h-12 w-32 items-center justify-center">
            <Text className="text-lg text-white">Epic Games</Text>
          </TouchableOpacity>
        </View>

        <View className="justify-center items-center flex-row mt-12 space-x-8">
          <TouchableOpacity onPress={() => navigation.navigate('UbiplayScreen') } className="bg-[#F70FED] rounded-3xl h-12 w-32 items-center justify-center">
            <Text className="text-lg text-white">Ubipay</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OriginMainPage') } className="bg-[#F78C0F] rounded-3xl h-12 w-32 items-center justify-center">
            <Text className="text-lg text-white">Origin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MainPage;

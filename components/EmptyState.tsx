import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({ title, subtitle }: any) => {
  return (
    <View className='justify-center items-center'>
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="font-pmedium text-white text-xl">{title}</Text>
      <Text className="font-pmedium text-white text-sl">{subtitle}</Text>
      <CustomButton
        title="Create video"
        hadlePress={() => router.push("/create")}
        containerStyle='w-full mt-7'
      />
    </View>
  )
}

export default EmptyState
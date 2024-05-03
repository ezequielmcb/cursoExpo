import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IVideo } from '@/types'
import IconSax from './IconSax'

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    prompt,
    creator
  } }: {
    video: IVideo
  }) => {
  
  const [play, setPlay] = useState(false)
  
  return (
    <View className='flex-col items-center px-4 mb-14'>
      <View className='flex-row gap-3 items-start justify-center'>
        <View className='justify-center items-center flex-row flex-1'>
          <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
            <Image
              source={{ uri: thumbnail }}
              className='w-full h-full rounded-lg'
              resizeMode='cover'
            />
          </View>
          <View className='justify-center flex-1 ml-3 gap-y-1'>
            <Text className='text-white text-sm '>{title}</Text>
            <Text className='text-white text-sm '>{creator?.username}</Text>
          </View>
        </View>
        <View className='pt-2'>
          <IconSax name="Menu" size={24} color="#7b7b8b" />
        </View>
      </View>
      {play ? (
        <Text>Playing</Text>
      ) : (  
          <TouchableOpacity>
            <Image
              source={{ uri: thumbnail }}
              className='w-full h-full rounded-xl mt-3'
              resizeMode='cover'
            />
          </TouchableOpacity>
      )}
    </View>
  )
}

export default VideoCard
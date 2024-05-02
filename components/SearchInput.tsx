import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IFormField } from '@/types'
import IconSax from './IconSax'

const SearchInput = ({ title, value, handleChangeText, otherStyles, placeholder, keyboardType }: IFormField) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className='space-x-4 border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row items-center justify-between'>        
      <TextInput
        className='flex-1 text-white text-base mt-0.5 font-pregular'
        value={value}
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        secureTextEntry={title === "Password" && !showPassword} 
      />
      <TouchableOpacity
        className='w-6 h-6'
      >
        <IconSax name="SearchNormal1" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput
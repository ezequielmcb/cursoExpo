import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { IFormField } from '@/types'
import IconSax from './IconSax'

const FormField = ({ title, value, handleChangeText, otherStyles, placeholder, keyboardType }: IFormField) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles} `}>
      <Text className='text-base text-gray-100'>{title}</Text>
      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row items-center justify-between'>        
        <TextInput
          className='flex-1 text-white text-base'
          value={value}
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword} 
        />
        {title === "Password" && (
          <TouchableOpacity
            className='w-6 h-6'
            onPress={() => setShowPassword(!showPassword)}>
            <IconSax name={showPassword ? "EyeSlash" : "Eye"} size={24} color="#7b7b8b" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
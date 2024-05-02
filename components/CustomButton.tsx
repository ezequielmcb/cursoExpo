import { TouchableOpacity, Text } from "react-native"
import React from "react"
import { CustomButtonProps } from "@/types"

const CustomButton = ({ title, hadlePress, containerStyle, textStyles, isLoading }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={hadlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`${textStyles}`}>{title}</Text>
  </TouchableOpacity>
  )
}

export default CustomButton
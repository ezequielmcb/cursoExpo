import { View, Text, ScrollView, Image } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "../constants"
import CustomButton from "@/components/CustomButton"
import { StatusBar } from "expo-status-bar"
import { Redirect, router } from "expo-router"
import { useGlobalContext } from "@/context/GlobalProvider"

const InitPage = () => {
  const { isLoading, isLoggedIn } = useGlobalContext()
  
  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView style={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[90vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-white text-3xl font-bold text-center">
              Discover Endless Possibilities with{" "}
            <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-6"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            hadlePress={() => router.push("/sign-in")}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

export default InitPage
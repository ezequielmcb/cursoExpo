import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '@/components/FormField'
import { IForms } from '@/types'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { SignIn, getCurrencyUser } from '../../lib/appwrite'
import { useGlobalContext } from '@/context/GlobalProvider'


const SignInPage = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState<IForms>({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields")
    }

    setIsSubmitting(true)
    try {
      await SignIn(form.email, form.password);
      const result = await getCurrencyUser();
      setUser(result)
      setIsLoggedIn(true)

      Alert.alert("Success", "User signed in successful")
      router.replace("/home")
    } catch (error: any) {
      Alert.alert("Error", error.message)
    } finally {
      setIsSubmitting(false)
    }

  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6 min-h-[82vh]'>
          <Image
            source={images.logo} 
            className='w-[115px] h-[35px]'
            resizeMode="contain"
          />
          <Text className='text-2xl mt-10 text-white text-semibold'>Sign in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign in"
            hadlePress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-gray-100 text-lg'>Don't have an account?</Text>
            <Link href="/sign-up" className='text-secondary-200 text-lg'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignInPage
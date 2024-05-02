import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '@/components/FormField'
import { IForms } from '@/types'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '@/context/GlobalProvider'

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState<IForms>({
    username: '',
    email: '',
    password: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields") 
    }

    setIsSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.username); 
      setUser(result)
      setIsLoggedIn(true)

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
          <Text className='text-2xl mt-10 text-white text-semibold'>Sign Up in to Aora</Text>
          <FormField
            title="User Name"
            value={form.username}
            handleChangeText={(e: string) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />
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
            title="Sign up"
            hadlePress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-gray-100 text-lg'>Have an account already?</Text>
            <Link href="/sign-in" className='text-secondary-200 text-lg'>Sign in</Link>
          </View>
            <Link href="/home" className='text-secondary-200 text-lg'>HOME</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp


import { View, Text, FlatList, Image, RefreshControl, Alert } from "react-native"
import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "../../constants"
import SearchInput from "@/components/SearchInput"
import Trending from "@/components/Trending"
import EmptyState from "@/components/EmptyState"
import { getAllposts } from "@/lib/appwrite"
import useAppWrite from "@/lib/useAppwrite"
import VideoCard from "@/components/VideoCard"
import { IVideo } from "@/types"

const HomePage = () => {
  const { data: posts, refetch, isloading }: { data: IVideo[], refetch: () => void, isloading: boolean } = useAppWrite(getAllposts)


  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  return (
    <SafeAreaView className="bg-primary h-full px-6">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 space-y-6 ">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-white text-sm">Welcome Back</Text>
                <Text className="font-pmedium text-white text-2xl">JSMastery</Text>
              </View>
              <View className="mt-1">
                <Image
                  source={images.logoSmall}
                  className="w-8 h-9"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="font-pmedium text-gray-100 text-lg">Last Videos</Text>
              <Trending
                posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="Be the first to upload a video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default HomePage
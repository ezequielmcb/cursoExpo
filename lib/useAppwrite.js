import { Alert } from "react-native"
import { useEffect, useState } from "react"

const useAppWrite = (fn) => {

  const [data, setData] = useState([])
  const [isloading, setIsLoading] = useState(true)

  const fetchData = async () => {
    setIsLoading(true);
    try {
        const response = await fn();
        setData(response);
    } catch (error) {
        Alert.alert("Error", error.message)
    } finally {
        setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  const refetch = () => fetchData();

  return {data, isloading, refetch}
}

export default useAppWrite;
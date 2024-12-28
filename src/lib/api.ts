import API from "@/config/apiClient"
import { UserType } from "@/types"

export const getUser = async () => {
  try {
    const res = await API.get("/user")
    console.log(res)
    return res.data as UserType
  } catch (error) {
    console.log(error)
  }
}

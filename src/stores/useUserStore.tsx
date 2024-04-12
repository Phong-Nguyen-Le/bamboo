import User from 'types/User'
import { create } from 'zustand'

interface UserStoreState {
  userList: User[] | null
  setUserList: (userList: User[] | null) => void
}

const useUserStore = create<UserStoreState>((set) => ({
  userList: null,
  setUserList: (userList) => set({ userList })
}))

export default useUserStore

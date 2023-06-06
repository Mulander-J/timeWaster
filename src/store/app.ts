import { defineStore } from 'pinia'
import { store } from './index'
import { userToken } from '@/utils/storage'

interface AppState {
  user: Nullable<{ 
    username: string
    sessionId?: string
  }>
}


export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    user: null
  }),
  getters: {},
  actions: {
    getUser(){
      this.user = JSON.parse(userToken.value || '')
    },
    setUser(u?: any) {
      this.user = u || null
      userToken.value = JSON.stringify(this.user)
    },
    clearUser(){
      this.user = null
      userToken.value = null
    }
  },
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}

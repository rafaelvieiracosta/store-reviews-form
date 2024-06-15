import { defineStore } from 'pinia'

export const useSettingStore = defineStore('Setting', {
  state: () => {
    return {
      defType: 'list' as String,
      defResponse: 'then' as String,
      defTheme: 'mordern-elegance' as String
    }
  }
})

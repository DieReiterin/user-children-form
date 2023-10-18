import { defineStore } from 'pinia'
export const myStore = defineStore({
      id:'myStore',
      state:()=> ({
            user: {
              name: '',
              age: '',                  
            },
            children: [],
            previewUser: {
              name: '',
              age: '',                  
            },
            previewChildren: [],
      }),
  })


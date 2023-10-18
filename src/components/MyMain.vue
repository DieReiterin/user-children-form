<template>
  <div class="main__container">
    <div class="user">
      <p class="title">Персональные данные</p>
      <p 
          v-if="page === 'preview'" 
          class="user__preview">
          {{ this.userHandler() }}
      </p>
      <div 
          v-if="page === 'form'" 
          style="display: flex; flex-direction: column;">
        <div class="wrapper">
          <my-label>Имя</my-label>
          <my-input 
              v-model="this.useStore.user.name" 
              wide="true"></my-input>
        </div>
        <div class="wrapper">
          <my-label>Возраст</my-label>
          <my-input 
              v-model="this.useStore.user.age" 
              wide="true"></my-input>          
        </div>
      </div>
    </div>
    <div class="children">
      <div v-if="page === 'preview'">
        <p class="title">Дети</p>
        <p 
            v-for="child in this.useStore.previewChildren" 
            class="child__preview" 
            :key="child.id"
            >{{ child.name }}, {{ child.age }} лет
        </p>
      </div>
      <div v-if="page === 'form'">
          <div class="children__upper">
            <p class="title">Дети (макс. 5)</p>
            <my-button 
                v-show="this.useStore.children.length < 5" 
                buttonType="add" 
                @click="addChild"
                >Добавить ребенка
            </my-button>
          </div>
          <p 
              v-show="this.useStore.children.length === 0"  
              class="child" 
              style="height: 60px;">Список детей пуст
          </p>
          <my-child 
              v-for="child in this.useStore.children" 
              :child="child" :key="child.id" 
              @removeChild="removeChild(child.id)">
          </my-child>
          <my-button 
              @click="saveChanges" 
              buttonType="save">Сохранить
          </my-button>        
          </div>
      </div>
  </div>
</template>

<script>
import MyChild from '@/components/MyChild.vue'
import { myStore } from '@/store/index.js'
export default {
  components: {
    MyChild
  },
  data(){
          return {
      }
    },
    props: ['page'],
    methods: {
      addChild() {
        const newId = Date.now();
        const newbie = {
          id: newId,
          name: '',
          age: '',                  
        }
        this.useStore.children.push(newbie)
      },
      removeChild(givenId) {
         this.useStore.children = this.useStore.children.filter(child => child.id !== givenId);
      },
      saveChanges() {
        this.useStore.previewUser = this.useStore.user;
        this.useStore.previewChildren = this.useStore.children;
      },
      userHandler() {
        return this.useStore.previewUser.name !== '' && this.useStore.previewUser.age !== '' ? 
        `${this.useStore.previewUser.name}, ${this.useStore.previewUser.age} лет` : 'Не указано имя либо возраст пользвателя'
      }
    },
    setup(){
    const useStore = myStore();
    return {
        useStore,
    }
    },
}
</script>

<style>
.main__container {
  width: 616px;
  min-height: 70vh;
  margin: 0 auto;
}
.user, .children {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 140px;
}
.user__preview, .child__preview {
  font-weight: 600;
}
.children__upper {
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 15px;
}
.child {
  display: flex;
  justify-content: space-between;
  width: 600px; 
  align-items: center;
  padding-right: 10px;
}
.child__preview {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: rgb(241, 241, 241);
}
.wrapper {
    margin-bottom: 10px; 
    position: relative;
    display: inline-block;
    width: 230px;
    height: 60px;
}
</style>

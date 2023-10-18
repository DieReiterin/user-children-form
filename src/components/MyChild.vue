<template>
    <div class="child">
        <div class="wrapper">
            <my-label>Имя</my-label>
            <my-input v-model="child.name"></my-input>
        </div>
        <div class="wrapper">
            <my-label>Возраст</my-label>
            <my-input v-model="child.age"></my-input>
        </div>
        <my-button @click="removeChild" buttonType="delete">Удалить</my-button>        
    </div>
</template>
<script>
export default {
    props: ['child'],
    methods: {
        removeChild() {
            this.$emit('removeChild')
        },
    },
}
</script>
<style scoped>
    
</style>
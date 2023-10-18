<template>
    <input 
        :value="modelValue" 
        @input="updateInput" 
        type="text" class="input" 
        :class="{'wide': wide === 'true',}"
    >
</template>
<script>
export default {
    name: 'my-input',
    props: ['child', 'modelValue', 'wide'],
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input {
    all: unset;
}
.input {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%; 
    padding: 20px 10px 0px 10px;
    height: 40px;
    font-size: 14px;
    outline: 1px solid #ced6e0;
    border-radius: 5px;
}
.wide {
    width: 590px;
}
</style>
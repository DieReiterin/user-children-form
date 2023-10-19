<template>

    <button class="button" :class="{
        'add': buttonType === 'add', 
        'delete': buttonType === 'delete',
        'save': buttonType === 'save',}"
    ><slot></slot></button>
        
</template>
<script>
export default {
    name: 'my-button',
    props: {
        buttonType: {
            type: String,
            default: 'save',
        },
    }
}
</script>
<style scoped>
.button {
    position: relative;
    min-width: 60px;
    max-width: 164px;
    height: 100%;
    padding: 10px 20px;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 5px 10px 0px rgba(35, 100, 210, 0.2);
    cursor: pointer;
}
.add {
    background-color: rgb(1, 167, 253);
}
.delete {
    background-color: red;    
}
.save {
    background-color: lightgreen;
}
.save:focus::after {
    position: absolute;
    top: 22%;
    left: 110%;
    content: '';
    width: 20px;
    height: 20px;
    background: transparent no-repeat center center / cover;
    background-image: url(@/assets/ok.png);
}
</style>
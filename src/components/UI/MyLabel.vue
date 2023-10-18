<template>
    <label class="my-label"><slot></slot></label>
</template>
<script>
export default {
    name: 'my-label'
}
</script>
<style scoped>
.my-label {
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(17, 17, 17, 0.48);
}
</style>
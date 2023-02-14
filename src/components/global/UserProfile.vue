<template>
  <button class="user-profile"
          :style="{height:height,width:width}">
    <img :src="src" :class="imgClass"  class="m-auto" :width="imageWidth" alt="">
    <slot/>
  </button>
</template>

<script setup lang="ts">
interface Props{
  src:string
  imageWidth:string
  height:string
  width:string
  imgClass:string
}
const {width,imageWidth,src,imgClass,height}=defineProps<Props>()

</script>

<style scoped>

</style>
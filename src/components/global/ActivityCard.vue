<template>
  <div class="activity_card flex items-center gap-1 mb-2">
    <div :class="{'before:!h-0':isLast}" class="before:h-7 before:w-[1px] before:absolute before:left-[23px] before:bottom-0 before:bg-gray-300 relative  before:top-[10px]">
        <UserProfile width="45px" height="45px" image-width="35" :src="src"/>
    </div>
    <div>
      <span class="font-600 text-[0.9rem] inline-block w-full">{{name}}</span>
      <span class="text-[0.8rem] inline-block w-full ">{{activity}}</span>
      <span v-if="time" class="text-[0.75rem] inline-block w-full text-gray-600">{{time}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const {name,src,isLast,time,activity}=defineProps<{
  name:string
  activity:string
  time:string
  src:string
  isLast:boolean
}>()

</script>

<style scoped>

</style>
<template>
<!--  //////// type profile-->

  <div v-if="type==='profile'" class="relative">
    <UserProfile @click="toggleTooltip" @mouseenter="showTooltip" @mouseleave="closeTooltip" :style="{left:`-${index * 4}px`,zIndex:index+2}" class="relative bg-white"  :src="src" width="45px" height="45px" image-width="35" />
    <Transition name="show">
      <div class="absolute  top-[-56px] rounded-6 right-[-18px] bg-primary-dark text-white p-[3px] flex justify-center" :style="{width:width}" v-if="show">
        <span class="text-[0.8rem]  leading-2">{{title}}</span>
        <span class="triangle absolute bottom-[-8px]"></span>
      </div>
    </Transition>
  </div>

<!--  ////////// type icon-->


  <div v-if="type==='icon'" class="relative ">
    <i  v-bind="$attrs" :class="icon" @click="toggleTooltip" @mouseenter="showTooltip" @mouseleave="closeTooltip" >
    </i>
    <Transition name="show">
      <div class="absolute  top-[-56px] rounded-6 right-[-58px] bg-primary-dark text-white p-[3px] flex justify-center" :style="{width:width}" v-if="show">
        <span class="text-[0.8rem]  leading-2">{{title}}</span>
        <span class="triangle absolute bottom-[-8px]"></span>
      </div>
    </Transition>
  </div>

</template>

<script setup lang="ts">
const {type,src,icon,iconClass,title,width,index}=defineProps<{
  index:number
  title:string
  src:string
  width:string|number
  type:string
  icon:string
  iconClass:object
}>()

const {show,showTooltip,toggleTooltip,closeTooltip}=useTooltip()

</script>

<style scoped>
@tailwind components;
.triangle{
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 5px 0 5px;
  border-color: #333 transparent transparent transparent;

}
@layer components {
  .show-enter-active,.show-leave-active{
    @apply transition-all ease-in-out duration-300;
  }
  .show-enter-from,.show-leave-to{
    @apply opacity-0 top-[-64px];

  }
  .show-enter-to,.show-leave-from{
    @apply opacity-100 top-[-56px];
  }

}

</style>
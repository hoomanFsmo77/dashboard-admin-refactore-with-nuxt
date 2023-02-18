<template>
  <div class="cms-card card p-1 px-1.6">
      <div class="flex justify-between items-start">
        <i class="text-2" :class="[icon,$textColor(theme)]">
        </i>
        <div class="text-right">
          <h5 :class="$textColor(theme)" class="font-700">{{achieve}}</h5>
          <span :class="state==='increase' ? 'bg-green-200  text-green-700' :'bg-red-200  text-red-700'"  class="category-card  !py-0.25 !px-[0.3rem] md:text-[0.7rem] mx-0.25 text-[0.6rem]">
                    <i :class="state==='increase' ? 'bi bi-arrow-up': 'bi bi-arrow-down'" ></i>
                    {{state==='increase'? '+' : '-' }}{{change}}
          </span>
        </div>
      </div>
    <div class="mt-1">
      <h6 class="tracking-widest text-gray-600 text-left uppercase">{{title}}</h6>
      <div class="progress-bar progress-bar-big mt-1">
        <div class="inner" :style="{width:progress}" :class="progressClass"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {$textColor}=useNuxtApp();
let props=defineProps<{
  icon:string
  title:string
  achieve:string|number
  change:number
  state:string
  theme:string
  progress:number
}>()

let progressClass={'bg-red-600':props.theme==='red','bg-sky-600':props.theme==='blue','bg-indigo-600':props.theme==='indigo','bg-green-600':props.theme==='green'}
</script>


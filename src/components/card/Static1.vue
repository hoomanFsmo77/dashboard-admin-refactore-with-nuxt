<template>
  <div class="static_card shadow-card rounded-10 bg-white overflow-hidden">
      <div class="card_body p-1.7 flex items-center justify-between gap-1">
          <div>
            <h4 :class="iconThemeClass" class="">{{achieve}}</h4>
            <span class="tracking-wider text-gray-600 uppercase text-[0.9rem]">{{title}}</span>
          </div>
        <i :class="[icon,iconThemeClass]" class="text-2 " ></i>
      </div>
    <div class="card_footer p-1.3 flex justify-between items-center" :class="footerThemeClass">
        <span class="font-500">
          {{change}}
          {{state}}
        </span>
        <i class="text-0.875" :class="state==='increase' ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill'"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
const {$textColor,$bgColor}=useNuxtApp()

const {change,icon,state,theme,title,achieve}=defineProps<{
  title:string
  achieve:string
  icon:string
  state:string
  change:number
  theme:string
}>();
const footerThemeClass={
  'bg-red-100 text-red-600':theme==='red',
  'bg-sky-100 text-sky-600':theme==='blue',
  'bg-indigo-100 text-indigo-600':theme==='indigo',
  'bg-green-100 text-green-600':theme==='green',
}
const iconThemeClass={
  'text-red-600':theme==='red',
  'text-sky-600':theme==='blue',
  'text-indigo-600':theme==='indigo',
  'text-green-600':theme==='green',
}
</script>

<style scoped>

</style>
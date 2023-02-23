<template>
  <div class="card p-2 flex flex-col justify-center items-center gap-0.5">
      <span class="icon-wrapper !w-5 !h-5" :class="$bgColor(theme)">
        <i class="text-2" :class="[icon,$textColor(theme)]"></i>
      </span>
    <div class="flex items-center gap-0.5">
      <span :class="$textColor(theme)" class="text-1.5 font-700">{{achieve}}</span>
      <span class="text-primary-dark text-1.4 font-500">{{title}}</span>
    </div>
    <span class="text-[0.9rem] text-gray-700">{{change}} change</span>
    <NuxtLink :to="{name:link}" class="btn mt-1.4 " :class="$btnColor(theme)">{{btn}}</NuxtLink>
  </div>
</template>

<script setup>
const {$textColor,$bgColor,$btnColor}=useNuxtApp()
let props=defineProps(['icon','achieve','title','change','btn','theme','link'])


</script>


<template>
  <div class="card p-1.3">
    <div class="flex justify-between items-start">
      <div>
        <span class="font-700 text-[0.9rem] text-primary-dark">{{title}}</span>
        <h3 class="font-700" :class="$textColor(theme)">{{achieve}}</h3>
      </div>
      <span class="icon-wrapper !h-3 !w-3" :class="$bgColor(theme)">
                    <i class="text-1.5" :class="[icon,$textColor(theme)]"></i>
                  </span>
    </div>
    <div>
      <span class="text-gray-700 text-0.75">May 23 - June 01 (2018)</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const {$textColor,$bgColor}=useNuxtApp()
let props=defineProps(['title', 'achieve', 'theme','icon'])


</script>


<template>
    <div class="bg-white p-2 rounded-14 shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all hover:translate-y-[-5px] relative flex flex-col justify-center items-center gap-1">
        <span class="icon-wrapper !w-5 !h-5" :class="[$textColor(theme),$bgColor(theme)]">
          <font-awesome-icon class="text-2" :icon="icon"></font-awesome-icon>
        </span>
      <div>
        <h5 class="text-center font-700 text-primary-dark ">{{title}}</h5>
        <p class="text-[0.8rem] text-center text-gray-500 font-500 mt-0.25">
          {{description}}
        </p>
      </div>

      <NuxtLink :to="{name:'Pages-knowledgeBase_Topic'}" class="link-stretch"></NuxtLink>
    </div>
</template>

<script setup lang="ts">
const {$textColor,$bgColor}=useNuxtApp()
const props=defineProps(['icon','theme','title','description'])

</script>

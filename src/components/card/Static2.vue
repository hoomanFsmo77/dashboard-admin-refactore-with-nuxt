<template>
    <div class="card p-1.5 flex justify-between items-center">
        <div >
          <span class="uppercase font-400 text-1 text-gray-600 tracking-widest">{{title}}</span>
          <h3 class="my-0.5 font-400" :class="$textColor(theme)">{{achieve}}</h3>
          <span>{{income}} <i class="ml-0.5 text-[0.9rem]" :class="[{'bi bi-arrow-up':state==='increase','bi bi-arrow-down':state==='decrease'},$textColor(theme)]"></i></span>
        </div>
      <div>
        <span class="icon-wrapper !w-5 !h-5" :class="$bgColor(theme)">
            <i :class="[$textColor(theme),icon]" class=" text-2"></i>
        </span>
      </div>
    </div>
</template>

<script setup>
const {$textColor,$bgColor}=useNuxtApp()
let props=defineProps(['title','icon','achieve','income','state','theme'])
</script>

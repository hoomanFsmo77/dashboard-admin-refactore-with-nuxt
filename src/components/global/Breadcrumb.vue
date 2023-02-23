<template>
  <div class="page-navigation">
      <ul class="flex flex-row items-center gap-0.75">
        <template v-for="(item,index) in pages">
          <li class="capitalize text-[0.9rem] text-gray-600 font-500" :class="{'!link !text-blue-700 !cursor-pointer':item.link}">
            <NuxtLink v-if="item.link" :to="{name:item.link}">
              {{item.name}}
            </NuxtLink>
            <span v-else>{{item.name}}</span>
          </li>
          <li>
            <span class="text-[0.9rem] text-gray-600" v-if="index!==pages.length-1">/</span>
          </li>
        </template>

      </ul>
  </div>
</template>



<script setup>
let props=defineProps(['pages'])




</script>


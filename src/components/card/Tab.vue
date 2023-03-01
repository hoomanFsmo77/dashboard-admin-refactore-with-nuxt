<template>
  <div class="card">
    <div class="card-title " :class="{'!py-1.5':form==='button'}">
      <ul class="flex gap-2 items-center" :class="{'gap-1.5':form==='button'}">
        <li @click="changeTab(index)" v-for="(item,index) in list"  class="text-[0.9rem] cursor-pointer font-500" :class="{'text-blue-700':activeTab===index+1 && form===undefined,'btn':form==='button','btn-primary-full':activeTab===index+1 && form==='button'}">
          {{item}}
        </li>
      </ul>
    </div>
    <div v-for="(item,index) in list"  >
      <div class="card-body text-center" v-if="activeTab===index+1">
        <slot  :name="item"></slot>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
let props=defineProps(['list','form'])
const {changeTab,activeTab}=useTab()

</script>

<template>
  <th @click="toggle(title)"  colspan="1" class="uppercase tracking-wide text-[0.9rem] cursor-pointer py-1.5 pr-1 first:pl-1" :style="{width:width}">
    <div class=" md:w-full w-[210px] flex">
      <span  >{{title}}</span>
      <div  class="flex flex-col !ml-auto  ">
        <i class="bi bi-caret-up-fill text-0.5 opacity-30" :class="{'!opacity-100':isActive==='up'}"></i>
        <i class="bi bi-caret-down-fill text-0.5 opacity-30" :class="{'!opacity-100':isActive==='down'}"></i>
      </div>
    </div>
  </th>
</template>

<script setup lang="ts">
const props=defineProps<{
  title:string,
  width:string|number,
  tableData:any[]
}>();
const emit=defineEmits<{
  (e:'sort',value:any[]):void
}>()
const {toggle,isActive}=useTable(emit,props.tableData)

</script>

<style scoped>

</style>
<template>
  <div v-if="show" class="flex justify-between items-center my-0.75">
    <div class="flex items-center gap-0.5">
      <input type="checkbox" class="checkbox" v-model="checkbox">
      <span class="text-[0.9rem] text-gray-700" :class="{'line-through text-gray-400':checkbox}">{{title}}</span>
    </div>
    <i class="bi bi-trash3-fill text-blue-700 cursor-pointer" @click="removeTodo"></i>
  </div>
</template>

<script setup lang="ts">
let props=defineProps(['title','isChecked'])
const checkbox=ref(props.isChecked)
const show=ref(true)
const removeTodo = () => {
  show.value=false
}
</script>


<template>
  <div v-bind="$attrs">
    <button @click="collapseFlag=!collapseFlag" class="link font-500 !text-[0.9rem]">Show code example</button>
    <CodeEditor class="v-collapse mt-2" v-collapsible="collapseFlag" width="0" min_width="100%" :read_only="true" :value="value"></CodeEditor>
  </div>
</template>

<script setup lang="ts">
let props=defineProps(['value'])
const collapseFlag=ref<boolean>(false)

</script>

<style scoped lang="scss">
.v-collapse:not(.show) {
  @apply hidden;
}
.collapsing{
  @apply h-0 overflow-hidden transition-all duration-300 ease-in-out
}
</style>

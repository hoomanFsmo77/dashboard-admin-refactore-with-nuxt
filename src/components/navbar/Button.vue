<template>
  <div
      class="cursor-pointer sm:p-0 p-0.5 px-0.65 sm:!ring-0 transition-all"
      :class="{'ring-4 ring-secondary-indigo/50 rounded-4':isFocus}">
    <button
        v-on="active!==undefined ? sidebarButtonHandler : buttonHandlers"
        :class="icon"
        v-bind="$attrs"
        class="text-secondary-gray text-1.5 cursor-pointer hover:text-gray-700 transition-all relative"
    >
      <slot name="content"></slot>
      <span  :class="badge" class="badge "><slot/></span>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Porps{
  icon:string
  badge:string
  active:boolean|undefined
}
const {badge,icon,active}=defineProps<Porps>()
const isFocus=ref<boolean>(false)
const emits=defineEmits<{
  (e:'show',value:{focus:boolean}):void
}>()

const focusHandler = () => {
  isFocus.value=true
  emits('show',{focus:isFocus.value})
}

const blurHandler = () => {
  isFocus.value=false
  emits('show',{focus:isFocus.value})
}
const sidebarHandler = () => {
  isFocus.value=!active
}

const buttonHandlers={
  focus:focusHandler,
  blur:blurHandler
}
const sidebarButtonHandler={
  click:sidebarHandler
}


</script>

<style scoped>

</style>
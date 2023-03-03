<template>
  <Slider
      v-model="value"
      :format="format"
      :min="min"
      :max="max"
      :orientation="orientation ?? 'horizontal'"
      v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import Slider from '@vueform/slider'
const props=defineProps(['min','max','value','format','color','shadow','orientation'])
const value=ref<number[]>([0,0,0])
const color=ref<string|null>(props.color ?? null)
const shadow=ref<string|null>(props.shadow ?? null)
onMounted(()=>{
  value.value= props.value
})
const format = (value:string) => {
  return `${value}${props.format}`
}


</script>

<style lang="scss">
.slider-connect{
  background-color: v-bind(color)!important;
}
.slider-tooltip{
  background-color: v-bind(color) !important;
  border-color: v-bind(color) !important;
}
.slider-handle:focus{
  box-shadow: 0 0 0 4px v-bind(shadow)!important;
}
</style>
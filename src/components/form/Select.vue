<template>
  <label v-if="label" :for="id" class="block mb-0.5 text-gray-700 font-500 text-[0.9rem]">
    {{label}}
  </label>
  <select :class="{'!border-[#03cfb7] !border-[1px] border-solid focus:!ring-[#03cfb7]/30 focus:!ring-4':success,'!border-red-500 !border-[1px] focus:!ring-red-500/30 border-solid focus:!ring-4':error}" :multiple="multiple ?? false" v-bind="$attrs" :id="id"  @change="handleInput" ref="selectTag" class="selectBox selectBox-sm">
    <option v-for="item in opt" :value="item" class="capitalize" >
      {{item}}
    </option>
  </select>
  <span v-if="hint" class="inline-block mt-0.5 text-gray-700 text-[0.8rem]">{{hint}}</span>
  <i v-if="success || error" :class="{'bi bi-check-lg text-[#03cfb7]':success,'bi bi-exclamation-circle-fill text-red-500':error}" class=" absolute right-[14%]  text-1.5 mr-0.5"></i>
  <span v-if="errorMessage || successMessage" class="block text-left mt-0.25  text-[0.8rem]" :class="{'text-red-500':error,'text-[#03cfb7]':success}">{{(success && successMessage) || (error && errorMessage)}}</span>
</template>

<script setup lang="ts">
const selectTag=ref<HTMLSelectElement|null>(null)
const {label,error,errorMessage,successMessage,success,id,opt,hint,value,multiple}=defineProps<{
  opt:Array<any>
  value:string
  hint:string
  id:string|number
  label:string
  multiple:boolean
  success:boolean
  error:boolean
  errorMessage:string
  successMessage:string
}>();
const emits=defineEmits<{
  (e:'input',value:string):void
  (e:'update:modelValue',value:string):void
}>()


const handleInput = () => {
  if(selectTag.value){
    emits('input',selectTag.value.value)
    emits('update:modelValue',selectTag.value.value)
  }

}
onMounted(()=>{
  if(selectTag.value){
    selectTag.value.value=value
    emits('input',selectTag.value.value)
    emits('update:modelValue',selectTag.value.value)
  }
})
</script>

<style scoped>

</style>
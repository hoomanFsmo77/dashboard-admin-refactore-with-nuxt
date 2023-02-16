<template>
  <template v-if="form===undefined">
    <label v-if="label" :for="id" :class="labelClass" class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize" v-html="label">
    </label>
    <div :class="{'flex gap-0 items-center':icon,'flex-row-reverse':iconReverse,'relative':success||error}">
      <i v-if="icon" class="py-[4px] px-[8px] bg-gray-700  text-white rounded-l-4" :class="[icon,{'rounded-r-4 !rounded-l-[0px]':iconReverse}]"> </i>
      <input
          @input="$emit('update:modelValue',$event.target.value)"
          :value="modelValue"
          :id="id"
          v-bind="$attrs"
          ref="el"
          :type="type ?? 'text'"
          :class="{'!rounded-l-[0px]':icon,'px-0.5 py-0.75':size==='lg','px-0.25 py-0.25':size==='sm','!py-[0.35rem]':size==='default','!rounded-r-[0px] !rounded-l-4':iconReverse,'!border-[#03cfb7] !border-[1px] focus:!ring-[#03cfb7]/30 focus:!ring-4':success,'!border-red-500 !border-[1px] focus:!ring-red-500/30 focus:!ring-4':error}"
          class="input group-focus/item:ring-4 peer-focus:ring-4 "
          :placeholder="placeholder"
      />
      <i v-if="success || error" :class="{'bi bi-check-lg text-[#03cfb7]':success,'bi bi-exclamation-circle-fill text-red-500':error}" class=" absolute right-[0%]  text-1.5 mr-0.5"></i>
      <span class="py-[4px] px-[8px] text-white bg-gray-700 rounded-r-4 !rounded-l-[0px]" v-if="iconBoth">{{iconRight}}</span>
      <span v-if="errorMessage || successMessage" class="block text-left mt-0.25  text-[0.8rem]" :class="{'text-red-500':error,'text-[#03cfb7]':success,'absolute bottom-[-24px]':icon}">{{(success && successMessage) || (error && errorMessage)}}</span>
    </div>
    <span v-if="hint" class="inline-block mt-0.5 text-gray-700 text-[0.8rem]">{{hint}}</span>
  </template>
  <template v-if="form==='float'">
    <div class="relative" v-bind="$attrs">
      <input
          @input="$emit('update:modelValue',$event.target.value)"
          :value="modelValue"
          :id="id"
          :type="type ?? 'text'"
          :class="{'px-0.5 py-0.75':size==='lg','px-0.25 py-0.25':size==='sm','!py-[0.35rem]':size==='default'}"
          class="input peer !px-1 !pt-1.2 !pb-[0.8rem] group-focus/item:ring-4 peer-focus:ring-4 w-full"
          required
      />
      <label :class="labelClass" :for="id" class="absolute peer-focus:bottom-[59%] text-[0.9rem] text-primary-dark peer-focus:left-[3.5%] peer-focus:text-gray-600 peer-focus:!text-0.75 transition-all left-[5%] bottom-[29%] text-gray-700 font-500 text-1 peer-valid:bottom-[59%] peer-valid:left-[3.5%] peer-valid:text-gray-600 peer-valid:!text-0.75 ">
        {{label}}
      </label>

    </div>
  </template>
  <template v-if="form==='horizontal'">
    <div class="flex items-center gap-1" :class="{'relative':success||error}">
      <label v-if="label" :for="id" :class="labelClass" class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize" v-html="label">
      </label>
      <input
          @input="$emit('update:modelValue',$event.target.value)"
          :value="modelValue"
          :id="id"
          v-bind="$attrs"
          :type="type ?? 'text'"
          :class="{'!rounded-l-[0px]':icon,'!border-[#03cfb7] !border-[1px] focus:!ring-[#03cfb7]/30 focus:!ring-4':success,'!border-red-500 !border-[1px] focus:!ring-red-500/30 focus:!ring-4':error,'px-0.5 py-0.75':size==='lg','px-0.25 py-0.25':size==='sm','!py-[0.35rem]':size==='default'}"
          class="input group-focus/item:ring-4 peer-focus:ring-4 "
          :placeholder="placeholder"
          :disabled="disabled ?? false"
      />
      <i v-if="success || error" :class="{'bi bi-check-lg text-[#03cfb7]':success,'bi bi-exclamation-circle-fill text-red-500':error}" class=" absolute right-0  text-1.5 mr-0.5"></i>
    </div>
    <span v-if="errorMessage" class="block text-right mt-0.5 text-red-500 text-[0.8rem]">{{errorMessage}}</span>
    <span v-if="hint" class="block text-right mt-0.5 text-gray-700 text-[0.8rem]">{{hint}}</span>
  </template>
  <template v-if="form==='mixed'">
    <label v-if="label" :for="id" :class="labelClass" class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize" v-html="label">
    </label>
    <div :class="{'flex gap-0 items-center':mixedType,'flex-row-reverse':iconReverse}">
      <span v-if="mixedType" class="p-[0.55rem] flex items-center bg-gray-700  text-white rounded-l-4" :class="[{'rounded-r-4 !rounded-l-[0px]':iconReverse}]">
        <input :type="mixedType" :class="mixedType">
      </span>
      <input
          @input="$emit('update:modelValue',$event.target.value)"
          :value="modelValue"
          :id="id"
          v-bind="$attrs"
          :type="type ?? 'text'"
          :class="{'!rounded-l-[0px]':mixedType,'px-0.5 py-0.75':size==='lg','px-0.25 py-0.25':size==='sm','!py-[0.35rem]':size==='default','!rounded-r-[0px] !rounded-l-4':iconReverse}"
          class="input group-focus/item:ring-4 peer-focus:ring-4 "
          :placeholder="placeholder"
      />
      <span class="py-[4px] px-[8px] text-white bg-gray-700 rounded-r-4 !rounded-l-[0px]" v-if="iconBoth">{{iconRight}}</span>
    </div>
    <span v-if="hint" class="inline-block mt-0.5 text-gray-700 text-[0.8rem]">{{hint}}</span>
  </template>
</template>

<script setup>
import { useIMask} from 'vue-imask';
let props=defineProps(['placeholder','label','id','hint','icon','type','form','labelClass','modelValue','disabled','success','error','errorMessage','size','iconReverse','iconBoth','iconRight','mixedType','pattern','successMessage'])

const { el, masked } = useIMask({
  mask: props.pattern
});

</script>

<style scoped>

</style>
<template>
  <template v-if="form===undefined">
    <div v-bind="$attrs" class="input-group flex gap-0 items-stretch " :class="{'flex-row-reverse':buttonReverse}">
      <input :value="modelValue" @input="inputHandler($event)" type="text" class="input w-full" :placeholder="placeholder" :class="{'!rounded-r-[0px] !border-[1px] !border-primary-indigo/50 !border-r-[0px]':type==='outline','!rounded-l-[0px] !rounded-r-4 !border-r-[1px] !border-l-[0px]':buttonReverse}"/>
      <button @click="sendText" class="btn  h-full !rounded-l-[0]" :class="{'!btn-primary':type==='outline','btn-primary-full':type==='full','!rounded-r-[0px] !rounded-l-4':buttonReverse}">
        <i v-if="icon" :class="icon"></i>
        {{buttonValue}}
      </button>
    </div>
  </template>
  <template v-if="form==='dropdown'">
    <div v-bind="$attrs" class="input-group flex gap-0 items-stretch " :class="{'flex-row-reverse':buttonReverse}">
      <input :value="modelValue" @input="inputHandler($event)" type="text" class="input w-full" :placeholder="placeholder" :class="{'!rounded-r-[0px] !border-[1px] !border-primary-indigo/50 !border-r-[0px]':type==='outline','!rounded-l-[0px] !rounded-r-4 !border-r-[1px] !border-l-[0px]':buttonReverse}"/>
      <div class="relative">
        <button @blur="show=false" @click="show=!show" class="btn items-center flex h-full !rounded-l-[0]" :class="{'!btn-primary':type==='outline','btn-primary-full':type==='full','!rounded-r-[0px] !rounded-l-4':buttonReverse}">
          {{buttonValue}}
          <i class="bi bi-caret-down-fill text-0.75 ml-0.25"></i>
        </button>

        <Transition name="show">
          <Dropdown v-if="show" top="54px" width="150px">
            <li v-for="item in dropdownList" class="dropdown-hover !text-[0.9rem] !text-gray-700">
              <NuxtLink :to="{name:'index'}">
                {{item}}
              </NuxtLink>
            </li>
          </Dropdown>
        </Transition>
      </div>



    </div>
  </template>

</template>

<script setup lang="ts">
const {toggleFocus,show}=useNavbar()
let searchText=ref<string>('')
let props=defineProps(['icon','placeholder','modelValue','type','buttonValue','buttonReverse','form','dropdownList']);
let emits=defineEmits<{
  (e:'update:modelValue',value:string):void,
  (e:'call',value:string):void
}>();

const sendText = () => {
  emits('call',searchText.value)
}

const inputHandler = (e:Event) => {
  searchText.value=(e.target as HTMLInputElement).value
  emits('update:modelValue',searchText.value)
}

</script>


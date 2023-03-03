<template>
  <Transition name="modal">
    <div v-if="modelValue" :class="{'!z-50':modelValue}" class="modal-wrapper">
      <div  class="modal">
        <div class="modal-title ">
          <div><slot name="header"></slot></div>
          <button class="close-modal bi bi-x-lg " @click="$emit('update:modelValue',false)"></button>
        </div>
        <div class="modal-body ">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>

  <div :class="{'!opacity-100 !visible':modelValue}" class="modal-backdrop"></div>
</template>

<script setup>
let props=defineProps(['modelValue'])


</script>

<style lang="scss" scoped>
@tailwind components;

.modal-enter-active,.modal-leave-active{
  @apply transition-all ease-in-out duration-500;
}
.modal-enter-from{
  @apply opacity-0 top-[20%];
}
.modal-enter-to{
  @apply opacity-100 top-[0%];
}
.modal-leave-from{
  @apply opacity-100 top-[0%];
}
.modal-leave-to{
  @apply opacity-0 top-[-20%];
}


</style>
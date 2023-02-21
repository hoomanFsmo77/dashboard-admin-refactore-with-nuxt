<template>
  <Editor
      v-bind="$attrs"
      api-key="1sqqkdh417xv6ib0rp0mw51o1frcz75habn1u7zh3tmdcgof"
      :initial-value="value"
      :style="{height:height}"
      :init="{
                  plugins: 'lists link image table code help wordcount',
                  }"
  />
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
let props=defineProps(['value','height'])
</script>

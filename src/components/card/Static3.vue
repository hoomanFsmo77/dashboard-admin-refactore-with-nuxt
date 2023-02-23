<template>
    <div class="card p-2 text-center">
      <span class="font-700 text-[0.9rem] text-primary-dark">{{title}}</span>
      <div class="my-0.5 flex items-center gap-0.5 justify-center">
        <i class="text-2 font-700 " :class="{'bi bi-arrow-up-short text-sky-600':state==='increase','bi bi-arrow-down-short text-red-600':state==='decrease'}"></i>
        <span class="text-1.5 font-800 text-primary-dark">{{achieve}}</span>
      </div>
      <span class="text-[0.9rem] font-500 text-gray-700">{{change}} {{state}}</span>

    </div>
</template>

<script>
export default {
  name: "StaticCard3",
  props:['title','achieve','change','state']
}
</script>

<style scoped>

</style>
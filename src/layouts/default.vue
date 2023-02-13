<template>
  <main>
    <LayoutHeader/>
    <LayoutSidebar/>
    <slot/>
    <LayoutFooter/>
  </main>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
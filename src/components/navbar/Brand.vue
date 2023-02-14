<template>
        <button
            :class="{'ring-4 ring-secondary-indigo/50 rounded-4':sidebarFlag && isUnder1200}" @click="showUpSidebar"
            class="sidebar-button"
        >
          <font-awesome-icon icon="fa-solid fa-align-justify"/>
        </button>
      <NuxtLink
          :to="{name:'index'}"
          class="brand-link" >
        HOOMAN
        <span class="hidden md:inline-block">DASHBOARD</span>
      </NuxtLink>
</template>

<script setup lang="ts">
const {showUpSidebar,sidebarFlag,isUnder1200}=useNavbar()
</script>

<style scoped>

</style>
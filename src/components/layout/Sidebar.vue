<template>
  <aside :class="isUnder1200 && {'translate-x-0':sidebarFlag}" class="sidebar relative z-10">
    <h6 class="text-gray-400 px-1.5 pt-2 pb-1 font-700">Main</h6>
    <ul>
      <SidebarItem ref="side_item"
                   v-for="(item,index) in sidebarMainData"
                   :key="index"
                   :id="item.id"
                   :title="item.title"
                   :icon="item.icon"
                   :is-open="item.isOpen"
                   :sub-menu-list="item.subMenuList"
                   :has-sub="item.hasSub ?? true"

      />
    </ul>
    <h6 class="text-gray-400 px-1.5 pt-2 pb-1 font-700">Docs</h6>
    <ul>
      <SidebarItem ref="side_item" v-for="(item,index) in sidebarDocsData" :key="index"
                   :id="item.id"
                   :title="item.title"
                   :icon="item.icon"
                   :is-open="item.isOpen"
                   :sub-menu-list="item.subMenuList"
                   :has-sub="item.hasSub"
                   :link="item.to"
      />
    </ul>
  </aside>

</template>

<script setup lang="ts">
import {sidebarMainData,sidebarDocsData} from "~/utils/sidebarData";
const sidebarFlag=useState<boolean>('sidebarFlag')
const isUnder1200=process.client ? window.innerWidth < 1200 :null

</script>

<style scoped lang="css">


</style>
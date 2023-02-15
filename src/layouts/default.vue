<template>
  <div>
    <LayoutHeader/>
    <div class="main-content"  :class="{'!grid-cols-[89px_1fr]':sidebarFlag}">
      <LayoutSidebar/>
      <main class="route-content">
        <div class="route-preloader" :class="{'hidden':!isLoading}">
          <OrbitSpinner
              class="mt-5"
              :animation-duration="1500"
              :size="200"
              color="rgba(79,70,229,1)"
          />
        </div>
        <slot/>
        <LayoutFooter/>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OrbitSpinner} from 'epic-spinners'
//////////////////////////////////////////////
const sidebarFlag=useState<boolean>('sidebarFlag')
const router=useRouter()
const isLoading=ref(false)
router.beforeEach((to,from,next)=>{
  isLoading.value=true
  next()
})
router.beforeResolve((to,from,next)=>{
  isLoading.value=false
  next()
})
</script>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .main-content{
    @apply grid xlg:grid-cols-[212px_1fr] transition-all grid-cols-[0_1fr];
  }
}


</style>
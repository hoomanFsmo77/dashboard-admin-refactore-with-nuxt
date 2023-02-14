<template>
  <UserProfile
      @focus="show=true"
      @blur="show=false"
      width="50px" height="50px"
      src="/profiles/profile_1.svg"
      image-width="40"
      img-class="m-auto user-dropdown-btn"
  >
    <Transition name="show">
      <Dropdown v-if="show" top="62px" width="203px" >
        <li>
          <h5 class="text-1 tracking-[2px] font-700 mb-0.5 text-left">Hooman Mousavi</h5>
          <span class="text-1 text-0.875 text-gray-700 text-left inline-block w-full">Web Developer</span>
        </li>
        <div class="divider"></div>
        <li class="dropdown-hover">
          <NuxtLink :to="{name:'index'}" class="text-left">Setting</NuxtLink>
        </li>
        <li class="dropdown-hover">
          <NuxtLink :to="{name:'index'}" class="text-left">Activity log</NuxtLink>
        </li>
        <div class="divider"></div>
        <li class="dropdown-hover">
          <NuxtLink :to="{name:'index'}" class="text-left">Logout</NuxtLink>
        </li>
      </Dropdown>
    </Transition>
  </UserProfile>
</template>


<script setup lang="ts">
const {show}=useNavbar()
</script>
<style lang="scss" scoped>
@import "tailwindcss/components";
@layer components {
  .show-enter-active,.show-leave-active{
    @apply transition-all ease-in-out duration-300
  }
  .show-enter-from,.show-leave-to{
    @apply opacity-0 top-[72px];
  }
  .show-enter-to,.show-leave-from{
    @apply opacity-100 top-[62px];
  }

}
</style>

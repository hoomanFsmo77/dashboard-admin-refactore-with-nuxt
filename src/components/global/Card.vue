<template>
    <div class="shadow-card rounded-10 bg-white ">
       <div class="card_title p-2 flex items-center justify-between shadow-[0_0.125rem_0.25rem_rgba(0,0,0,.075)]">
          <span class="uppercase font-500 tracking-widest text-primary-dark text-[0.87rem]">{{title}}</span>
          <div class="relative" v-if="hasMenu===undefined">
            <NavbarButton
                          @show="toggleFocus($event)"
                          icon="bi bi-three-dots-vertical !text-1.2 card-btn"
                          badge="!w-0 !h-0"
                          :active="undefined"
            />
            <Transition name="show">
                <Dropdown v-if="show" width="160px" top="54px">
                  <li class="dropdown-hover !py-[0.45rem]">
                    <NuxtLink :to="{name:'index'}" class="dropdown-card">
                      <i class="bi bi-arrows-angle-expand text-0.875 text-gray-700"></i>
                      <span class="text-0.875 mr-auto text-gray-700">Expand</span>
                    </NuxtLink>
                  </li>
                  <li class="dropdown-hover !py-[0.45rem]">
                    <NuxtLink :to="{name:'index'}" class="dropdown-card">
                      <i class="bi bi-fullscreen-exit text-0.875 text-gray-700"></i>
                      <span class="text-0.875 mr-auto text-gray-700">Minimize</span>
                    </NuxtLink>
                  </li>
                  <li class="dropdown-hover !py-[0.45rem]">
                    <NuxtLink :to="{name:'index'}" class="dropdown-card">
                      <i class="bi bi-arrow-clockwise text-0.875 text-gray-700"></i>
                      <span class="text-0.875 mr-auto text-gray-700">Reload</span>
                    </NuxtLink>
                  </li>
                  <li class="dropdown-hover !py-[0.45rem]">
                    <NuxtLink :to="{name:'index'}" class="dropdown-card">
                      <i class="bi bi-trash  text-0.875 text-gray-700"></i>
                      <span class="text-0.875 mr-auto text-gray-700">Remove</span>
                    </NuxtLink>
                  </li>
                </Dropdown>
            </Transition>
          </div>
       </div>
      <div class="card_body px-1" :class="bodyClass">
          <slot/>
      </div>
    </div>
</template>

<script setup lang="ts">
const {hasMenu,title,bodyClass}=defineProps<{
  title:string
  bodyClass:string|object
  hasMenu:boolean
}>()
const {show,toggleFocus} = useNavbar()

</script>

<style scoped>

</style>
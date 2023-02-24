<template>
  <div class="relative">
    <NavbarButton @show="toggleFocus"
                  icon="bi bi-bar-chart-line statistic-dropdown-btn"
                  badge="!w-0.5 !h-0.5 !bg-primary-green !top-[0]"
                  :active="undefined"
    />

    <Transition name="show">
      <Dropdown v-if="show" top="54px" width="236px">
        <li class="dropdown-hover ">
          <NuxtLink :to="{name:'index'}" class="dropdown-card ">
            <span class="dropdown-icon bg-primary-indigo">
              <font-awesome-icon icon="fa-brands fa-twitter"/>
            </span>
            <span class="text-[0.75rem] text-primary-dark text-left mr-auto font-500">
              You have 2 followers
            </span>
          </NuxtLink>
        </li>
        <li class=" dropdown-hover ">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
              <span class="dropdown-icon bg-primary-green">
             <font-awesome-icon icon="fa-solid fa-envelope"/>
            </span>
            <span class="text-[0.75rem] text-primary-dark text-left mr-auto font-500">
            You have 6 new messages
          </span>
          </NuxtLink>
        </li>
        <li class=" dropdown-hover ">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
              <span class="dropdown-icon bg-primary-sky">
                 <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket"/>
              </span>
            <span class="text-[0.75rem] text-primary-dark text-left mr-auto font-500">
                Server rebooted
               </span>
          </NuxtLink>
        </li>
        <li class=" dropdown-hover ">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
              <span class="dropdown-icon bg-primary-indigo">
              <font-awesome-icon icon="fa-brands fa-twitter"/>
            </span>
            <span class="text-[0.75rem] text-primary-dark text-left mr-auto font-500">
            You have 2 followers
                </span>
          </NuxtLink>
        </li>
        <div class="divider"></div>
        <li class="dropdown-hover text-center">
          <NuxtLink :to="{name:'index'}">
            <span class="text-0.75 text-gray-500 font-700 ">VIEW ALL NOTIFICATIONS</span>
          </NuxtLink>
        </li>

      </Dropdown>
    </Transition>
  </div>
</template>


<script setup lang="ts">
import '~/assets/style/components/Transition.scss'
/////////////////////////////////////////////////////
const {show,toggleFocus} = useNavbar()


</script>

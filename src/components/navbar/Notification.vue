<template>
  <div class="relative">
    <NavbarButton :active="undefined"
                  icon="bi bi-bell-fill "
                  @show="toggleFocus">
      10
    </NavbarButton>
    <Transition name="show">
      <Dropdown v-if="show" width="210px" top="54px">
        <li class=" dropdown-hover">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
            <UserProfile :isCloud="true" img-class="m-auto" height="43px" width="45px" image-width="32" src="v1677917720/dashboard/profiles/profile_2_h7syjv.svg"/>
            <div>
              <span class="dropdown-card-name">Json Doe</span>
              <span class="dropdown-card-message">Sent you a message</span>
            </div>
          </NuxtLink>
        </li>
        <li class=" dropdown-hover">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
            <UserProfile :isCloud="true" img-class="m-auto" height="43px" width="45px" image-width="32" src="v1677917721/dashboard/profiles/profile_3_ungsuj.svg"/>
            <div>
              <span class="dropdown-card-name">Frank Williams</span>
              <span class="dropdown-card-message">Sent you a message</span>
            </div>
          </NuxtLink>
        </li>
        <li class=" dropdown-hover">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
            <UserProfile :isCloud="true" img-class="m-auto" height="43px" width="45px" image-width="32" src="v1677917721/dashboard/profiles/profile_4_sldwk8.svg"/>
            <div>
              <span class="dropdown-card-name">Ashley Wood</span>
              <span class="dropdown-card-message">Sent you a message</span>
            </div>
          </NuxtLink>
        </li>
        <div class="divider"></div>
        <li class="dropdown-hover text-center">
          <span class="text-0.75 text-gray-500 font-700 ">VIEW ALL MESSAGES</span>
        </li>
      </Dropdown>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import '~/assets/style/components/Transition.scss'
///////////////////////////////////////////////////
const {show,toggleFocus}=useNavbar()


</script>


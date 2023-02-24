<template>
  <div class="relative hidden lg:block" >
    <form @submit.prevent>
      <div class="relative ">
        <button
            class="bi bi-search absolute right-0 top-[12%] mr-0.5 text-1.1 cursor-pointer text-gray-500 peer"
        ></button>
        <FormInput class="w-20" placeholder="search..." @focus="focus" @blur="blur"/>
      </div>
    </form>
    <Transition name="show">
      <Dropdown v-if="show" width="228px" top="54px">
        <li class="text-gray-500 text-0.875">
          RECENT PAGES
        </li>
        <li class="dropdown-hover !py-[0.45rem]">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
            <font-awesome-icon icon="fa-regular fa-note-sticky" class=" text-0.875 text-gray-700"/>
            <span class="text-0.75 mr-auto text-gray-700">Posts</span>
          </NuxtLink>
        </li>
        <li class="dropdown-hover !py-[0.45rem]">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
            <font-awesome-icon icon="fa-regular fa-note-sticky" class=" text-0.875 text-gray-700"/>
            <span class="text-0.75 mr-auto text-gray-700">Widget</span>
          </NuxtLink>
        </li>
        <li class="dropdown-hover !py-[0.45rem]">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
            <font-awesome-icon icon="fa-regular fa-note-sticky" class=" text-0.875 text-gray-700"/>
            <span class="text-0.75 mr-auto text-gray-700">Profile</span>
          </NuxtLink>
        </li>
        <div class="divider"></div>
        <li class="text-gray-500 text-0.875 !py-[0.3rem]">
          USERS
        </li>
        <li class="dropdown-hover !py-[0.4rem]">
          <NuxtLink class="dropdown-card" :to="{name:'index'}">
            <UserProfile img-class="m-auto" height="29px" width="31px" image-width="18" src="/profiles/profile_5.svg"/>
            <span class="text-0.875 text-gray-800 mr-auto">Json Doe</span>
          </NuxtLink>

        </li>
        <li class="dropdown-hover !py-[0.4rem]">
          <NuxtLink class="dropdown-card" :to="{name:'index'}">
            <UserProfile img-class="m-auto" height="29px" width="31px" image-width="18" src="/profiles/profile_6.svg"/>
            <span class="text-0.875 text-gray-800 mr-auto">Frank Williams</span>
          </NuxtLink>

        </li>
        <li class="dropdown-hover !py-[0.4rem]">
          <NuxtLink class="dropdown-card" :to="{name:'index'}">
            <UserProfile img-class="m-auto" height="29px" width="31px" image-width="18" src="/profiles/profile_1.svg"/>
            <span class="text-0.875 text-gray-800 mr-auto">Ashley Wood</span>
          </NuxtLink>

        </li>
        <div class="divider"></div>
        <li class="text-gray-500 text-0.875 !py-[0.3rem]">
          FILTERS
        </li>
        <li class="dropdown-hover">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
            <span class="category-card bg-red-200 text-primary-red ">Posts</span>
            <span class="text-0.75 text-gray-800 mr-auto">Search all posts</span>
          </NuxtLink>
        </li>
        <li class="dropdown-hover">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
            <span class="category-card bg-green-200 text-green-600 ">Users</span>
            <span class="text-0.75 text-gray-800 mr-auto">Only in users</span>
          </NuxtLink>
        </li>
        <li class="dropdown-hover">
          <NuxtLink :to="{name:'index'}" class="dropdown-card">
            <span class="category-card bg-indigo-300 text-indigo-700 ">Campaigns</span>
            <span class="text-0.75 text-gray-800 mr-auto">Campaigns</span>
          </NuxtLink>
        </li>

      </Dropdown>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import '~/assets/style/components/Transition.scss'
///////////////////////////////////////////////////////////////
const {show,blur,focus}=useNavbar()

if(process.client){
  window.addEventListener('click',(e:Event)=>{
    const el=e.target as HTMLInputElement
    if(!el.classList.contains('input') && !el.classList.contains('bi-search')){
      show.value=false
    }
  })
}


</script>

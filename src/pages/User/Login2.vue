<template>
  <main class=" w-full">
    <row class="!m-0 !p-0">
      <column class="!m-0 !p-0" col="12" sm="8" lg="4">
        <form  @submit.prevent>
          <div class="px-2 py-2.5 h-full flex flex-col ">
            <div class="text-center">
              <nuxt-img  provider="cloudinary"   src="v1677917716/dashboard/d_logo_liscqp.png" class="m-auto" width="90" alt="" />
              <h4 class="text-primary-dark font-800 text-center  uppercase tracking-widest mt-1">welcome back</h4>
            </div>
            <div class="mt-3">
              <FormInput id="email" label="Email Address" class="text-[0.9rem] !py-[0.35rem] w-full" />
            </div>
            <div class="my-1.3">
              <FormInput id="password" type="password" label="<div class='flex justify-between'><span>Password</span><a class='!link !text-[0.8rem] !text-gray-500' href='#'>Forgot your password?</a></div>" class="text-[0.9rem] !py-[0.35rem] w-full" />
            </div>
            <div class="flex gap-0.5 items-center mb-1.5">
              <input type="checkbox" id="remember" class="checkbox">
              <label for="remember" class="text-[0.9rem] text-primary-dark font-500">Remember this device</label>
            </div>
            <button type="submit" class="btn btn-primary-full w-full uppercase tracking-widest">sign in</button>
            <p class="text-gray-500 text-[0.8rem] font-500 mt-3 text-center">
              Don't have an account yet? <NuxtLink :to="{name:'User-Register2'}" class="link">Register.</NuxtLink>
            </p>
          </div>
        </form>
      </column>
      <column class="!m-0 !p-0 sm:block hidden" col="12" sm="4" lg="8">
        <nuxt-img     class="w-full h-full" src="https://images.pexels.com/photos/1552212/pexels-photo-1552212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </column>
    </row>
  </main>
</template>


<script setup lang="ts">
definePageMeta({layout:false})

</script>

<style scoped>

</style>
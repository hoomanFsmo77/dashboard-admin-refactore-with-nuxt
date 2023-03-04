<template>
  <main class=" w-full">
    <row class="!m-0 !p-0">
      <column class="!m-0 !p-0" col="12" sm="8" lg="4">
        <form  @submit.prevent>
          <div class="px-2 py-2.5 h-full flex flex-col ">
            <div class="text-center">
              <nuxt-img src="/d_logo.png" class="m-auto" width="90" alt="" />
              <h4 class="text-primary-dark font-800 text-center  uppercase tracking-widest my-1">Register</h4>
              <p class="article text-left !text-[0.8rem]">
                The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.
              </p>
            </div>
            <div >
              <FormInput id="Username" label="Username" class="text-[0.9rem] !py-[0.35rem] w-full" />
            </div>
            <div class="my-1.3">
              <FormInput id="email" label="Email Address" class="text-[0.9rem] !py-[0.35rem] w-full" />
            </div>
            <div >
              <FormInput id="password" type="password" label="Password" class="text-[0.9rem] !py-[0.35rem] w-full" />
            </div>
            <div class="flex gap-0.5 items-center my-1.5">
              <input type="checkbox" id="remember" class="checkbox">
              <label for="remember" class="text-[0.9rem] text-primary-dark font-500">I agree with the <NuxtLink class="link" to="#">Terms & policy</NuxtLink> </label>
            </div>
            <button type="submit" class="btn btn-primary-full w-full uppercase tracking-widest">sign in</button>
            <p class="text-gray-500 text-[0.8rem] font-500 mt-3 text-center">
              Already have an account?  <NuxtLink :to="{name:'User-Login2'}" class="link">Log in.</NuxtLink>
            </p>
          </div>
        </form>
      </column>
      <column class="!m-0 !p-0 sm:block hidden" col="12" sm="4" lg="8">
        <nuxt-img class="w-full h-full" src="https://images.pexels.com/photos/1552212/pexels-photo-1552212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </column>
    </row>
  </main>
</template>


<script setup lang="ts">
definePageMeta({layout:false})

</script>

<style scoped>

</style>
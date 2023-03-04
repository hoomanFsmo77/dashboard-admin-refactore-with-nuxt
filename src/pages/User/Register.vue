<template>
  <main class="bg-[#f8f9fa]  w-full">
    <div class="container md:!px-3 sm:!px-2 !p-0.25">
      <row class="!mt-0">
        <column col="12" md="6">
          <form @submit.prevent="submit">
            <Card class="mt-1" :has-menu="!false" title="Hooman Dashboard" body-class="!p-0">
              <div class="p-2.5">
                <h3 class="text-primary-dark font-700">Get started with Hooman</h3>
                <p class="article !my-2 !text-[0.8rem]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <FormInput id="Username" class="mt-2 mb-1 w-full" label="Username"  form="float"/>
                <FormInput id="email" class="mb-1 w-full" label="Email address"  form="float"/>
                <FormInput id="password" label="Password" type="password" class="mb-1 w-full" form="float"/>
                <div class="flex gap-0.5 items-center my-1">
                  <input id="remember" type="checkbox" class="checkbox">
                  <label for="remember" class=" text-[0.9rem] font-500 text-primary-dark">I agree with the <NuxtLink to="#" class="link">Terms & Conditions</NuxtLink></label>
                </div>
                <button type="submit" class="btn btn-primary-full ">Register</button>
              </div>
              <div class="card-footer">
                <span class="text-[0.85rem] font-500 text-gray-500">Already have an account?<NuxtLink :to="{name:'User-LoginPage'}" class="link"> Login.</NuxtLink> </span>
              </div>
            </Card>
          </form>

        </column>
        <column col="12" md="6">
          <div class="flex flex-col items-center justify-center">
            <nuxt-img  provider="cloudinary"   src="v1677917718/dashboard/money_eizlfk.svg" width="400" alt="" />
            <h2 class="text-indigo-700 font-800 text-center mt-1">
              Start saving
              <br>
              your time & money
            </h2>
            <p class="text-gray-500 font-500 text-center mt-1 text-1.1">
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in
            </p>

          </div>

        </column>
      </row>
    </div>
  </main>

</template>

<script setup lang="ts">
definePageMeta({layout:false})
const submit = () => {
  return navigateTo({name:'index'})
}
</script>

<style scoped>

</style>
<template>
  <div class="container-fluid">
    <row>
      <column col="12">
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'products'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Products</h1>
        <div class="flex justify-between items-center">
          <div class="flex gap-1">
            <NuxtLink to="#" class="text-[0.8rem] text-gray-500 hover:underline">
              <font-awesome-icon icon="fa-solid fa-upload"></font-awesome-icon>
              Import
            </NuxtLink>
            <NuxtLink to="#" class="text-[0.8rem] text-gray-500 hover:underline">
              <font-awesome-icon icon="fa-solid fa-download"></font-awesome-icon>
              Export
            </NuxtLink>
          </div>
          <NuxtLink class="btn btn-primary-full" :to="{name:'Ecommerce-Products_New'}">
            <i class="bi bi-plus-lg"></i>
            Add New
          </NuxtLink>

        </div>
      </column>
    </row>
    <row class="!my-2">
      <column col="12">
        <nav class="w-full">
          <ul class="flex flex-row  md:gap-2 gap-1 w-full border-b-[1px] border-b-gray-200">
            <li v-for="(tab,index) in tabList" @click="changeTab(index)" :class="{'border-b-4 border-b-blue-700':activeTab-1===index}" class="tab-item" >
              {{tab}}
            </li>
          </ul>
        </nav>
      </column>
    </row>
    <row>
      <column col="12" class="relative">
        <Transition name="tab">
          <section v-if="activeTab===1" id="tab-1" class="card">
            <div class=" p-1.5 !py-1  overflow-hidden bg-[#f8f9fa]">
              <row>
                <column col="12" md="6"  class="flex gap-1 items-center flex-wrap">
                  <FormSelect value="lorem ipsum" :opt="['lorem ipsum','lorem']"/>
                  <button class="btn btn-primary btn-sm ">Apply</button>
                  <FormSelect value="10" @input="changeItemInOne($event)" :opt="[5,10,15,20,25]"/>

                  <span class="text-[0.7rem] text-gray-500">Entries per page</span>
                </column>
                <column col="12"  md="6">
                  <FormInput @input="searchHandler($event)" placeholder="Search" class="lg:w-full w-auto"/>
                </column>
              </row>
            </div>
            <div class="table-responsive">

              <TableMain :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData3.th" :td="tableData3.td" :searched-text="searchedText" type="product"></TableMain>

            </div>
            <div class="bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0">
              <h6 class="text-gray-700">Showing page {{currentPage}} of {{totalPages}}</h6>
              <div class="flex flex-wrap md:gap-0 gap-0.5">
                <button class="btn btn-primary btn-sm mx-0.5" @click="prevPage">
                  &lt;
                </button>
                <button :class="{'bg-primary-indigo text-white':currentPage===item}" v-for="item in totalPages" @click="paginationHandler(item)" class="btn-primary btn btn-sm mx-0.5">
                  {{item}}
                </button>
                <button class="btn-primary btn btn-sm mx-0.5" @click="nextPage">
                  >
                </button>
              </div>
            </div>
          </section>
        </Transition>
        <Transition name="tab">
          <section v-if="activeTab===2"  id="tab-2">
            <h6 class="text-center font-400 text-gray-600 uppercase" >archived products place here</h6>
          </section>
        </Transition>
        <Transition name="tab">
          <section v-if="activeTab===3" id="tab-3">
            <h6 class="text-center font-400 text-gray-600 uppercase">draft products place here</h6>
          </section>
        </Transition>
        <Transition name="tab">
          <section v-if="activeTab===4"  id="tab-4">
            <h6 class="text-center font-400 text-gray-600 uppercase">out of stock products place here</h6>
          </section>
        </Transition>
      </column>
    </row>

  </div>
</template>

<script setup lang="ts">
import {tableData3} from "~/utils/tableData";
const {tabList,activeTab,changeTab}=useTab()
const {searchHandler,changeItemInOne,searchedText,currentPage,totalPages,itemInOne,nextPage,prevPage,paginationHandler}=usePagination(tableData3,10)
</script>

<style lang="scss" scoped>
@tailwind components;
.tab-enter-active,.tab-leave-active{
  @apply transition duration-300 ease-linear;
}

.tab-enter-from,.tab-leave-to{
  @apply opacity-0 scale-[90%]
}
.tab-enter-to,.tab-leave-from{
  @apply opacity-100 scale-[100%];
}
section{
  @apply min-h-[400px]
}
</style>
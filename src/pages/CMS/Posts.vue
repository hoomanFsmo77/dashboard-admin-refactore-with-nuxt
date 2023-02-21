<template>
  <div class="container-fluid">
    <row class="items-center">
      <column col="6">
        <h1 class="text-primary-dark uppercase tracking-widest">Posts</h1>
      </column>
      <column col="6" class="flex justify-end">
        <NuxtLink :to="{name:'CMS-newPost'}" class="btn-primary-full btn uppercase">
          <i class="bi bi-plus-lg"></i>
          add new
        </NuxtLink>
      </column>
    </row>
    <row>
      <column col="12" >
        <div class="card overflow-hidden ">
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
          <div class="overflow-x-auto w-0 min-w-full">
            <TableMain :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData2.th" :td="tableData2.td" :searched-text="searchedText" type="cms"></TableMain>
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
        </div>

      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import {tableData2} from "~/utils/tableData";
const {totalPages,paginationHandler,prevPage,nextPage,currentPage,itemInOne,changeItemInOne,searchHandler,searchedText}=usePagination(tableData2,10)

</script>

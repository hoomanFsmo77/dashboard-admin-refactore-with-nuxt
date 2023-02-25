<template>
  <div class="container-fluid">
    <row>
      <column col="12">
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Customers'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Customers</h1>
        <div class="flex items-center gap-1">
          <NuxtLink :to="{name:'index'}" class="text-[0.8rem] text-gray-500 hover:underline">
            <font-awesome-icon icon="fa-solid fa-upload"></font-awesome-icon>
            Import
          </NuxtLink>
          <NuxtLink :to="{name:'index'}" class="text-[0.8rem] text-gray-500 hover:underline">
            <font-awesome-icon icon="fa-solid fa-download"></font-awesome-icon>
            Export
          </NuxtLink>

        </div>
      </column>
    </row>
    <row>
      <column col="12">
        <div class="card">
          <div class="bg-[#f8f9fa] py-1 px-2 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden">
            <row>
              <column col="12" md="8" class="flex gap-1 items-center flex-wrap">
                <FormSelect value="lorem ipsum" :opt="['lorem ipsum','lorem']"/>
                <button class="btn btn-primary btn-sm ">Apply</button>
                <FormSelect value="10" @input="changeItemInOne($event)" :opt="[5,10,15,20,25]"/>

                <span class="text-[0.7rem] text-gray-500">Entries per page</span>
              </column>
              <column col="12" md="4" >
                <FormInput @input="searchHandler($event)" placeholder="Search" class="lg:w-full w-auto"/>
              </column>
            </row>
          </div>
          <div class="overflow-x-auto w-0 min-w-full">
            <TableMain type="customer" :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData11.th" :td="tableData11.td" :searched-text="searchedText" > </TableMain>
          </div>
          <div class="bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0">
            <h6 class="text-gray-700">Showing page {{currentPage}} of {{totalPages}}</h6>
            <div class="flex flex-wrap md:gap-0 gap-0.5">
              <button class="btn btn-primary btn-sm mx-0.5" @click="prevPage">
                &lt;
              </button>
              <button :class="{'bg-primary-indigo text-white':currentPage===item}" v-for="item in totalPages" @click="paginationHandler(item)" class="btn btn-primary btn-sm mx-0.5">
                {{item}}
              </button>
              <button class="btn btn-primary btn-sm mx-0.5" @click="nextPage">
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
import {tableData11} from "~/utils/tableData";
const {itemInOne,paginationHandler,prevPage,nextPage,totalPages,currentPage,searchedText,changeItemInOne,searchHandler}=usePagination(tableData11)
</script>


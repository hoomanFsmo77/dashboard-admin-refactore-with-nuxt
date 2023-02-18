<template>
  <Card v-if="hasCard" title="Latest Orders" body-class="!px-0">
    <div v-if="hasOption!==false" class=" p-1 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden">
      <row>
        <column col="12" md="8" class="flex gap-1 items-center flex-wrap">
          <FormSelect value="lorem ipsum" :opt="['lorem ipsum','lorem']"/>
          <button class="btn btn-primary btn-sm ">Apply</button>
          <FormSelect @input="changeItemInOne($event)" :value="items ?? 5" :opt="[5,10,15,20,25]"/>

          <span class="text-[0.7rem] text-gray-500">Entries per page</span>
        </column>
        <column col="12" md="4" >
          <FormInput @input="searchHandler($event)" placeholder="Search" class="lg:w-full w-auto"/>
        </column>
      </row>
    </div>
    <div class="overflow-x-auto w-0 min-w-full">
      <TableMain :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData4.th" :td="tableData4.td" type="order" :searched-text="searchedText" :is-order="true" :is-post="null"></TableMain>
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
  </Card>
  <div v-else class="card">
      <div class=" p-1.5 !py-1  overflow-hidden bg-[#f8f9fa]">
        <row>
          <column col="12" md="8" class="flex gap-1 items-center flex-wrap">
            <FormSelect value="lorem ipsum" :opt="['lorem ipsum','lorem']"/>
            <button class="btn btn-primary btn-sm ">Apply</button>
            <FormSelect @input="changeItemInOne($event)" :value="items ?? 5" :opt="[5,10,15,20,25]"/>

            <span class="text-[0.7rem] text-gray-500">Entries per page</span>
          </column>
          <column col="12" md="4" >
            <FormInput @input="searchHandler($event)" placeholder="Search" class="lg:w-full w-auto"/>
          </column>
        </row>

      </div>
    <div class="overflow-x-auto w-0 min-w-full">
      <TableMain type="order" :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData4.th" :td="tableData4.td" :searched-text="searchedText"  :has-link="hasLink" :link="link"></TableMain>
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
</template>

<script setup lang="ts">
import {tableData4} from "~/utils/tableData";
let props=defineProps<{
  hasOption:boolean
  items:any
  hasLink:boolean
  hasCard:boolean
  link:string
}>();
const {searchHandler,changeItemInOne,searchedText,currentPage,totalPages,itemInOne,nextPage,prevPage,paginationHandler,}=usePagination(tableData4)
</script>


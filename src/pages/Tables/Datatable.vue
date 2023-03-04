<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Data Tables'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Data Tables</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Data Table - Classic" :has-menu="!false" body-class="!p-2">
          <p class="article">
            Lightweight and extensible data tables for Vue.
          </p>
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
          <div class="overflow-x-auto w-0 min-w-full">
            <TableMain head-theme="!bg-white !text-primary-dark" type="data" :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData12.th" :td="tableData12.td"  :searched-text="searchedText"/>
          </div>
          <div class="bg-white p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0">
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
        </Card>
      </column>
    </row>
    <row>
      <column col="12">
        <Card class="overflow-hidden"  :has-menu="!false" title="Data Table - Card Table" body-class="!px-0">
          <div class=" p-1 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden">
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
            <TableMain type="data" :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData12.th" :td="tableData12.td" :searched-text="searchedText" > </TableMain>
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
        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import {tableData12} from "~/utils/tableData";
const {itemInOne,paginationHandler,prevPage,nextPage,totalPages,currentPage,searchedText,changeItemInOne,searchHandler}=usePagination(tableData12)
</script>

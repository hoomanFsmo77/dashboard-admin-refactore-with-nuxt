<template>
  <div class="container-fluid">
    <h1 class="text-primary-dark uppercase tracking-widest">categories</h1>
    <row>
      <column col="12" md="4">
        <div class="card p-2" >
          <div>
            <FormInput id="name" label="Name" hint="The name is how it appears on your site."/>
          </div>
          <div class="my-1.4">
            <FormInput id="slug" label="Slug" hint="The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens."/>
          </div>
          <div class="my-1.4">
            <FormSelect id="Parent" class="w-full" label="Parent" value="None" :opt="['None','Gear','Stories','Tips & Tricks','Trips','Gear','Stories','Uncategorized']" hint="Categories, unlike tags, can have a hierarchy. You might have a Jazz category, and under that have children categories for Bebop and Big Band. Totally optional."/>
          </div>
          <div class="my-1.4">
            <FormArea id="Description" label="Description" hint="The description is not prominent by default; however, some themes may show it." row="3"/>
          </div>
          <div class="my-1.4">
            <button class="btn-primary-full btn"> Add New Category</button>
          </div>
        </div>
      </column>
      <column col="12" md="8">
        <div class="card overflow-hidden ">
          <div class=" p-1.5 !py-1  overflow-hidden bg-[#f8f9fa]">
            <row>
              <column col="12"   class="flex gap-1 items-center flex-wrap">
                <FormSelect value="lorem ipsum" :opt="['lorem ipsum','lorem']"/>
                <button class="btn btn-primary btn-sm ">Apply</button>
                <FormSelect value="10" @input="changeItemInOne($event)" :opt="[5,10,15,20,25]"/>

                <span class="text-[0.7rem] text-gray-500">Entries per page</span>
              </column>
              <column col="12" >
                <FormInput @input="searchHandler($event)" placeholder="Search" class="lg:w-full w-auto"/>
              </column>
            </row>
          </div>
          <div class="overflow-x-auto w-0 min-w-full">
            <TableMain :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData7.th" :td="tableData7.td" :searched-text="searchedText" type="category"></TableMain>
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
import {tableData7} from "~/utils/tableData";
const {paginationHandler,prevPage,nextPage,itemInOne,totalPages,currentPage,searchedText,changeItemInOne,searchHandler}=usePagination(tableData7,10)
</script>


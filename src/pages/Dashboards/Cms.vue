<template>
  <div class="container-fluid">
    <h1 class="text-primary-dark uppercase tracking-widest">CMS dashboard</h1>
    <row>
      <column v-for="item in defaultPageData" col="12" md="3">
        <CardCms :icon="item.icon" :title="item.title" :achieve="item.achieve" :change="item.change" :state="item.state" :theme="item.theme" :progress="item.progress"/>
      </column>
    </row>
    <row>
      <column class="!pl-0" col="12" md="5">
        <row class="!mt-0 !pt-0">
          <column class="!pt-0" col="12">
            <Card title="At a glance" body-class="!p-0">
              <div class="p-1 !px-1.5">
                <row row-gap="1rem">
                  <column col="5" class="flex items-center">
                  <span class="icon-wrapper">
                    <i class="bi bi-speedometer"></i>
                  </span>
                    <p class="text-[0.8rem] ml-0.5">
                      <span class="font-700">123</span>
                      Lorem
                    </p>

                  </column>
                  <column col="7" class="flex items-center">
                  <span class="icon-wrapper">
                    <i class="bi bi-book"></i>
                  </span>
                    <p class="text-[0.8rem] ml-0.5">
                      <span class="font-700">123</span>
                      Lorem ipsum.
                    </p>

                  </column>
                  <column col="5" class="flex items-center">
                   <span class="icon-wrapper">
                    <i class="bi bi-journal-bookmark"></i>
                  </span>
                    <p class="text-[0.8rem] ml-0.5">
                      <span class="font-700">123</span>
                      Lorem
                    </p>

                  </column>
                  <column col="7" class="flex items-center">
                   <span class="icon-wrapper">
                    <i class="bi bi-globe-americas"></i>
                  </span>
                    <p class="text-[0.8rem] ml-0.5">
                      <span class="font-700">123</span>
                      Lorem ipsum dolor.
                    </p>


                  </column>
                </row>
              </div>
              <div class="card-footer">
                <span class="text-gray-600 text-[0.85rem]">
                  Lorem ipsum dolor sit
                  <a href="#" class="link">
                    Lorem ipsum.
                  </a>
                </span>
              </div>
            </Card>
          </column>
          <column col="12">
            <Card title="Site health status" body-class="!px-2 !py-1.5 flex md:flex-row flex-col items-center gap-1">
                    <span class="icon-wrapper md:!w-16 md:!h-5 w-4 h-4 bg-orange-200 text-orange-500">
                          <i class="bi bi-bag-heart text-1.8"></i>
                    </span>
              <div class="text-[0.9rem] text-gray-600">
                <p class="">
                  Lorem ipsum dolor sit amet, constur adipng elit. Accusim error minima moless reiciis sequi.
                </p>
                <p class="mt-0.75">
                  Lorem ipsum dolor sit amet, <a href="#" class="link">consecur adiping.</a>
                </p>
              </div>
            </Card>
          </column>
        </row>

      </column>
      <column col="12" md="7">
        <Card title="Quick draft" body-class="!p-0">
          <div class="!px-2 !py-1.4">
            <div>
              <FormInput placeholder="Title" label="Title" id="title" class="w-full" hint="The title is how it appears on your site."/>
            </div>
            <div class="mt-1.5">
              <FormArea class="w-full" placeholder="What is in your mind?" label="Content" id="content" hint="The description is not prominent by default; however, some themes may show it." row="6"/>
            </div>
            <button class="btn btn-primary-full mt-1.5">Save Draft</button>
          </div>
          <div class="card-footer">
            <span class="font-700 text-gray-700 text-0.875">Lorem ipsum dolor sit.</span>
            <br>
            <span class="text-[0.8rem]">
              <a href="#" class="link">lorem</a>
              <span class="text-gray-500">
                  March 5,2022
              </span>
            </span>
            <br>
            <span class="text-[0.8rem]">
              <a href="#" class="link">lorem</a>
              <span class="text-gray-500">
                  March 5,2022
              </span>
            </span>
          </div>
        </Card>
      </column>
    </row>
    <row>
      <column col="12" md="8">
        <Card class="overflow-hidden" title="Latest contracts " body-class="!px-0">
          <div class=" p-1.5 !py-1 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden">
            <row>
              <column col="12"  class="flex gap-1 items-center flex-wrap">
                <FormSelect value="lorem ipsum" :opt="['lorem ipsum','lorem']"/>
                <button class="btn btn-primary btn-sm ">Apply</button>
                <FormSelect value="5" @input="changeItemInOne($event)" :opt="[5,10,15,20,25]"/>

                <span class="text-[0.7rem] text-gray-500">Entries per page</span>
              </column>
              <column col="12" >
                <input-box @input="searchHandler($event)" placeholder="Search" class="lg:w-full w-auto"/>
              </column>
            </row>
          </div>
          <div class="overflow-x-auto w-0 min-w-full">
            <TableMain type="cms" :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData2.th" :td="tableData2.td" :searched-text="searchedText" ></TableMain>
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



      </column>
      <column col="12" md="4">
        <Card title="Popular authors" body-class="!px-0">
          <div class="py-1.5 px-1">
            <ActivityCard v-for="item in [...activityData].slice(0,7)" :name="item.name" :activity="item.activity"  :src="item.src" :is-last="true"/>
          </div>
          <div class="card-footer text-right">
            <button class="btn btn-primary ">View all people</button>
          </div>

        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import {defaultPageData,activityData} from "~/utils/stateData";
import {tableData2} from "~/utils/tableData";
const {totalPages,paginationHandler,prevPage,nextPage,currentPage,itemInOne,changeItemInOne,searchHandler,searchedText}=usePagination(tableData2)
</script>

<style scoped>

</style>
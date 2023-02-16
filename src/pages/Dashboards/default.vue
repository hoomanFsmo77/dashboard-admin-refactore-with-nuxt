<template>
  <div class="container-fluid">
    <h1 class="text-primary-dark uppercase tracking-widest">default dashboard</h1>
    <row class="!my-2">
      <column v-for="item in defaultPageData" col="12" lg="3" sm="6">
        <CardStatic1
            :icon="item.icon"
            :title="item.title"
            :achieve="item.achieve"
            :change="item.change"
            :state="item.state"
            :theme="item.theme"
        />
      </column>
    </row>
    <row>
      <column lg="9" col="12">
        <Card title="Sales by channel">
          <row>
            <column col="12" md="4" class="flex py-1 ">
              <div>
                <h6 class="uppercase font-700 text-gray-500 tracking-widest">total revenue</h6>
                <h2 class="font-700 text-primary-indigo">$19,200</h2>
                <div class="flex gap-1 items-center">
                  <span class="text-gray-600 md:text-1 text-[0.9rem]">+$2,032</span>
                  <span  class="category-card bg-green-200  text-green-700 !py-0.25 !px-[0.3rem] md:text-[0.7rem] mx-0.25 text-[0.6rem]">
                    <i class="bi bi-arrow-up"></i>
                    19.5%
                  </span>
                </div>
              </div>
            </column>
            <column col="6" md="4" class="flex py-1 md:px-0.5 !px-0">
              <div class="vertical-divider  !mr-1"></div>
              <div>
                <span class="uppercase font-400 text-gray-500 tracking-widest md:text-[0.9rem] text-[0.8rem]">Organic Search</span>
                <h4 class="font-500 text-primary-dark my-0.5 md:text-1 text-[0.9rem]">$19,200</h4>
                <div class="flex gap-1 items-center">
                  <span class="text-gray-600 md:text-1 text-[0.9rem]">+$2,032</span>
                  <span  class="category-card bg-green-200  text-green-700 !py-0.25 !px-[0.3rem] text-[0.7rem] mx-0.25">
                    <i class="bi bi-arrow-up"></i>
                    19.5%
                  </span>
                </div>
              </div>
            </column>
            <column col="6" md="4" class="flex py-1 md:px-0.5 !px-0">
              <div class="vertical-divider  !mr-1"></div>
              <div>
                <span class="uppercase font-400 text-gray-500 tracking-widest md:text-[0.9rem] text-[0.8rem]">Facebook ads</span>
                <h4 class="font-500 text-primary-dark my-0.5 md:text-1 text-[0.9rem]">$19,200</h4>
                <div class="flex gap-1 items-center">
                  <span class="text-gray-600 md:text-1 text-[0.9rem]">-$2,032</span>
                  <span  class="category-card bg-red-200  text-red-700 !py-0.25 !px-[0.3rem] text-[0.7rem] mx-0.25">
                    <i class="bi bi-arrow-down"></i>
                    19.5%
                  </span>
                </div>
              </div>
            </column>
          </row>
          <row>
            <column col="12" class="mt-2 overflow-hidden" >
              <client-only>
                <apexchart
                    type="bar"
                    height="350"
                    width="100%"
                    :options="chart1.chartOptions"
                    :series="chart1.series">

                </apexchart>
              </client-only>

            </column>
          </row>
        </Card>
      </column>
      <column lg="3" col="12" class="mb-[7px]">
        <div class="lg:h-0 lg:min-h-full h-auto min-h-full">
          <Card title="Latest activity" class="h-full" body-class="h-[calc(100%-130px)] overflow-y-auto">
            <div class=" h-full">
              <div class="px-0.5 py-1 overflow-y-hidden">
                <ActivityCard v-for="item in activityData" :name="item.name" :activity="item.activity" :time="item.time" :src="item.src" :is-last="item.isLast ?? false"/>
              </div>
            </div>
          </Card>
        </div>


      </column>
    </row>
    <row>
      <column col="12">
        <Card class="overflow-hidden" title="Latest contracts " body-class="!px-0">
          <div class=" p-2 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden">
            <row>
              <column col="12" md="8" class="flex gap-1 items-center flex-wrap">
                <FormSelect value="lorem ipsum" :opt="['lorem ipsum','lorem']"/>
                <button class="btn btn-primary btn-sm ">Apply</button>
                <FormSelect value="5" @input="changeItemInOne($event)" :opt="[5,10,15,20,25]"/>

                <span class="text-[0.7rem] text-gray-500">Entries per page</span>
              </column>
              <column col="12" md="4" >
                <FormInput @input="searchHandler($event)" placeholder="Search" class="lg:w-full w-auto"/>
              </column>
            </row>
          </div>
          <div class="overflow-x-auto w-0 min-w-full">
            <TableMain type="default" :has-head="true" :current-page="currentPage" :item-in-one="itemInOne" :th="tableData1.th" :td="tableData1.td" :searched-text="searchedText" > </TableMain>
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
    <row>
      <column col="12" md="6">
        <div class="card p-1 ">
          <row class="!my-0 !py-0">
            <column col="4">
              <div>
                <h2 class="text-primary-dark font-600">625</h2>
                <span class="text-gray-600 text-1.1">New Customers</span>
                <div class="progress-bar mt-1.3 h-[9px] "><div class="inner w-[70%] bg-green-500"></div></div>
              </div>
            </column>
            <column col="4">
              <div class="px-1 text-center h-full flex flex-col justify-between">
                <h4 class="text-primary-dark font-600">625</h4>
                <span class="text-gray-600 text-1">Affiliates</span>
                <div class="divider"></div>
                <span class="text-gray-600 text-1">+10</span>
              </div>
            </column>
            <column col="4">
              <div class="px-1 text-center h-full flex flex-col justify-between">
                <h4 class="text-primary-dark font-600">625</h4>
                <span class="text-gray-600 text-1">Affiliates</span>
                <div class="divider"></div>
                <span class="text-gray-600 text-1">+10</span>
              </div>
            </column>
          </row>

        </div>
      </column>
      <column col="12" md="6">
        <div class="card p-2 ">
          <row class="!my-0 !py-0">
            <column col="6" class="flex items-start gap-1">
              <i class="bi bi-arrow-down text-1.7 text-red-600"></i>
              <div class="w-full">
                <h2 class="text-primary-dark font-600 ">1,123</h2>
                <span class="text-gray-600 text-1 my-0.5">Affiliates</span>
                <div class="progress-bar mt-1 h-[9px] "><div class="inner w-[70%] bg-red-500"></div></div>
              </div>
            </column>
            <column col="6" class="flex items-start gap-1">
              <i class="bi bi-arrow-up text-1.7 text-green-600"></i>
              <div class="w-full">
                <h2 class="text-primary-dark font-600 ">1,123</h2>
                <span class="text-gray-600 text-1 my-0.5">Affiliates</span>
                <div class="progress-bar mt-1 h-[9px] "><div class="inner w-[70%] bg-green-500"></div></div>
              </div>
            </column>
          </row>
        </div>
      </column>
    </row>
    <row class="">
      <column col="12" md="4" >
        <Card title="Projects updates" body-class="p-1.2 " class="h-full">
          <div>
            <div class="flex justify-between items-center">
              <span class="text-gray-800 font-700 text-0.875">Lorem ipsum dolor.</span>
              <span class="ml-auto text-gray-500 text-0.875 ">10 mins ago</span>
            </div>
            <div class="my-1 flex ">
              <Tooltip type="profile" v-for="(item,index) in tooltipData.slice(0,2)" :index="index" :title="item.title" :src="item.img" width="6.5rem"/>
            </div>

          </div>
          <div class="my-1.2">
            <div class="flex justify-between items-center">
              <span class="text-gray-800 font-700 text-0.875">Lorem ipsum dolor.</span>
              <span class="ml-auto text-gray-500 text-0.875 ">10 mins ago</span>
            </div>
            <div class="my-1 flex ">
              <Tooltip type="profile" v-for="(item,index) in tooltipData.slice(0,3)" :index="index" :title="item.title" :src="item.img" width="6.5rem"/>
            </div>

          </div>
          <div class="my-1.2">
            <div class="flex justify-between items-center">
              <span class="text-gray-800 font-700 text-0.875">Lorem ipsum dolor.</span>
              <span class="ml-auto text-gray-500 text-0.875 ">10 mins ago</span>
            </div>
            <div class="my-1 flex ">
              <Tooltip type="profile" v-for="(item,index) in tooltipData" :index="index" :title="item.title" :src="item.img" width="6.5rem"/>
            </div>


          </div>
        </Card>
      </column>
      <column col="12" md="4" >
        <Card title="Closed updates" class="h-full pb-1">
          <div>
            <client-only>
              <apexchart type="donut" :options="chart2.chartOptions" :series="chart2.series"></apexchart>
            </client-only>

          </div>
          <div class="mt-1">
            <h6 class="tracking-widest text-gray-600 text-center uppercase mb-0.25">Total closed project</h6>
            <div class="flex justify-center items-center gap-0.75">
              <h4 class="text-primary-dark font-600">625</h4>
              <span class="text-gray-600 text-1">+10</span>
              <span class="category-card bg-green-200 text-green-700 !py-0.25 !px-[0.3rem] text-[0.7rem] mx-0.25"><i class="bi bi-arrow-up"></i> 19.5% </span>
            </div>
            <div class="flex gap-1 justify-center mt-1 flex-wrap">
              <div>
                <i class="bi bi-circle-fill text-sky-900 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
              <div>
                <i class="bi bi-circle-fill text-sky-800 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
              <div>
                <i class="bi bi-circle-fill text-sky-700 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
              <div>
                <i class="bi bi-circle-fill text-sky-700 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
              <div>
                <i class="bi bi-circle-fill text-sky-700 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
            </div>
          </div>
        </Card>
      </column>
      <column col="12" md="4" class="h-full">
        <Card title="Closed updates" class="h-full pb-1">
          <div>
            <client-only>
              <apexchart type="polarArea" width="290" class="mx-auto" :options="chart3.chartOptions" :series="chart3.series"></apexchart>
            </client-only>

          </div>
          <div class="mt-1">
            <h6 class="tracking-widest text-gray-600 text-center uppercase mb-0.25">tickets solved</h6>
            <div class="flex justify-center items-center gap-0.75">
              <h4 class="text-primary-dark font-600">625</h4>
              <span class="text-gray-600 text-1">+10</span>
              <span class="category-card bg-red-200 text-red-700 !py-0.25 !px-[0.3rem] text-[0.7rem] mx-0.25"><i class="bi bi-arrow-down"></i> -19.5% </span>
            </div>
            <div class="flex gap-1 justify-center mt-1 flex-wrap">
              <div>
                <i class="bi bi-circle-fill text-indigo-800 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
              <div>
                <i class="bi bi-circle-fill text-indigo-700 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
              <div>
                <i class="bi bi-circle-fill text-indigo-600 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
              <div>
                <i class="bi bi-circle-fill text-indigo-500 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
              <div>
                <i class="bi bi-circle-fill text-indigo-400 text-[0.6rem]"></i>
                <span class="text-gray-500 text-[0.9rem] ml-0.25">Sandra</span>
                <h6 class="text-gray-800 text-center">250</h6>
              </div>
            </div>
          </div>
        </Card>
      </column>
    </row>
  </div>

</template>

<script setup lang="ts">
import {defaultPageData,activityData} from "~/utils/stateData";
import {chart1,chart2,chart3} from "~/utils/chartData";
import {tableData1} from "~/utils/tableData";
import {tooltipData} from "~/utils/extraData";
const {totalPages,paginationHandler,prevPage,nextPage,currentPage,itemInOne,changeItemInOne,searchHandler,searchedText}=usePagination(tableData1)
</script>

<style scoped>

</style>
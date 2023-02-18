<template>
  <div class="container-fluid">
    <h1 class="text-primary-dark uppercase tracking-widest">E-commerce dashboard</h1>
    <row>
      <column col="12">
        <div class="card p-1.1 !px-1.5">
          <row >
            <column col="12" md="3" class="px-1">
              <h6 class="tracking-widest text-gray-600 text-left uppercase mb-0.5">Earnings</h6>
              <div class="flex items-center justify-between">
                <h5  class="font-700">$10,000</h5>
                <h5  class="font-700 text-red-600">-20.2%</h5>
              </div>
              <div class="progress-bar progress-bar-big mt-0.75">
                <div class="inner bg-red-600 w-[30%]"></div>
              </div>
            </column>
            <column col="12" md="3" class="px-1">
              <h6 class="tracking-widest text-gray-600 text-left uppercase mb-0.5">Readers</h6>
              <div class="flex items-center justify-between">
                <h5  class="font-700">532</h5>
                <h5  class="font-700 text-sky-600">-20.2%</h5>
              </div>
              <div class="progress-bar progress-bar-big mt-0.75">
                <div class="inner bg-sky-600 w-[600%]"></div>
              </div>
            </column>
            <column col="12" md="3" class="px-1">
              <h6 class="tracking-widest text-gray-600 text-left uppercase mb-0.5">Earnings</h6>
              <div class="flex items-center justify-between">
                <h5  class="font-700">326</h5>
                <h5  class="font-700 text-indigo-600">-20.2%</h5>
              </div>
              <div class="progress-bar progress-bar-big mt-0.75">
                <div class="inner bg-indigo-600 w-[90%]"></div>
              </div>
            </column>
            <column col="12" md="3" class="px-1">
              <h6 class="tracking-widest text-gray-600 text-left uppercase mb-0.5">Visitors</h6>
              <div class="flex items-center justify-between">
                <h5  class="font-700">222</h5>
                <h5  class="font-700 text-green-600">-20.2%</h5>
              </div>
              <div class="progress-bar progress-bar-big mt-0.75">
                <div class="inner bg-green-600 w-[50%]"></div>
              </div>
            </column>
          </row>

        </div>
      </column>
    </row>
    <row>
      <column col="12">
        <div class="card overflow-hidden">
          <div class="card-header flex justify-between items-center p-1.5 bg-primary-dark">
              <span class="uppercase font-500 tracking-widest text-white text-[0.87rem]">
                Sales by channel
              </span>
            <div class="flex flex-col md:flex-row gap-0.5">
              <button class="btn btn-white-full btn-sm mx-0.5 ">This week</button>
              <button class="btn btn-white btn-sm mx-0.5 ">Last week</button>
            </div>
          </div>
          <div class="card-body px-1.5 py-1">
            <row class="justify-between items-center">
              <column md="4" col="6" class="flex  ">
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
              <column md="2" col="6">
                    <span class="icon-wrapper w-5 h-5 bg-indigo-200 text-indigo-700 ml-auto">
                      <i class="bi bi-currency-exchange text-2.5"></i>
                    </span>
              </column>
            </row>
            <row>
              <column col="12" lg="10" md="8">
                <client-only>
                  <apexchart
                      type="bar"
                      height="469px"
                      width="100%"
                      :options="chart1.chartOptions"
                      :series="chart1.series">

                  </apexchart>
                </client-only>

              </column>
              <column col="12" lg="2" md="4">
                <row>
                  <column col="12" >
                    <div class="text-right">
                      <span class="uppercase font-400 text-gray-500 tracking-widest md:text-[0.9rem] text-[0.8rem]">Organic Search Revenue</span>
                      <h4 class="font-500 text-primary-dark my-0.5 md:text-1.3 text-[0.9rem]">$19,200</h4>
                      <div class="flex gap-1 items-center justify-end md:justify-start">
                        <span class="text-gray-600 md:text-1 text-[0.9rem]">+$2,032</span>
                        <span  class="category-card bg-green-200  text-green-700 !py-0.25 !px-[0.3rem] text-[0.6rem] mx-0.25 flex">
                            <i class="bi bi-arrow-up"></i>
                              19.5%
                           </span>
                      </div>
                    </div>

                  </column>
                  <div class="divider my-1 md:!my-3"></div>
                  <column col="12" >
                    <div class="text-right">
                      <span class="uppercase font-400 text-gray-500 tracking-widest md:text-[0.9rem] text-[0.8rem]">Facebook Ads Revenue</span>
                      <h4 class="font-500 text-primary-dark my-0.5 md:text-1.3 text-[0.9rem]">$11,200</h4>
                      <div class="flex gap-1 items-center justify-end md:justify-start">
                        <span class="text-gray-600 md:text-1 text-[0.9rem]">+$1,032</span>
                        <span  class="category-card bg-red-200  text-red-700 !py-0.25 !px-[0.3rem] text-[0.6rem] mx-0.25 flex">
                            <i class="bi bi-arrow-down"></i>
                              -19.5%
                           </span>
                      </div>
                    </div>
                  </column>
                </row>

              </column>
            </row>
          </div>
        </div>
      </column>
    </row>
    <row>
      <column col="12" md="4">
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
      <column col="12" md="8">
        <Card class="overflow-hidden" title="Bestsellers this month" body-class="!px-0">
          <div class="overflow-x-auto w-0 min-w-full">
            <TableMain :current-page="currentPage" :item-in-one="itemInOne" :td="tableData3.td" :searched-text="searchedText" :has-head="false" type="ecommerce"></TableMain>
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
      <column col="12">
        <TableOrderSection :items="10" :has-card="true"/>
      </column>
    </row>
  </div>

</template>

<script setup lang="ts">
import {chart1} from "~/utils/chartData";
import {activityData} from "~/utils/stateData";
import {tableData3} from "~/utils/tableData";
const {totalPages,paginationHandler,prevPage,nextPage,currentPage,itemInOne,searchedText}=usePagination(tableData3);

</script>

<style scoped>

</style>
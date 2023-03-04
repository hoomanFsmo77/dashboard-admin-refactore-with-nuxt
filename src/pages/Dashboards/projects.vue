<template>
  <div class="container-fluid">
    <h1 class="text-primary-dark uppercase tracking-widest">projects dashboard</h1>
    <row>
      <column v-for="item in defaultPageData" col="12" md="3">
        <CardProject :title="item.title" :achieve="item.achieve" :theme="item.theme" :icon="item.icon"/>
      </column>
    </row>
    <row>
      <column col="12" md="8">
        <Card title="Projects" body-class="overflow-hidden !px-0">
          <div class="overflow-x-auto w-0 min-w-full">
            <table class="w-full" >
              <thead class="bg-gray-100 border-b-2 border-b-primary-dark">
              <tr >
                <th v-for="item in tableData5.th" colspan="1" class="uppercase tracking-wide text-[0.9rem] py-1.5 px-1 text-left" >
                  <div >
                    <span class="text-primary-dark uppercase">{{item}}</span>
                  </div>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr class="table-hover " v-for="item in tableData5.td">
                <td class="p-1 px-1.3">
                  <ActivityCard :name="item.username" :activity="item.alias" :src="item.img" :is-last="true" class="!mb-0"/>
                </td>
                <td>
                  <span class="text-[0.9rem]">{{item.name}}</span>
                </td>
                <td>
                  <span class="text-[0.9rem]">{{item.due}}</span>
                </td>
                <td class="text-center">
                  <span class="category-card  " :class="[$bgColor(item.theme),$textColor(item.theme)]">{{item.priority}}</span>
                </td>
              </tr>
              </tbody>

            </table>
          </div>
          <div class="card-footer text-right !py-1">
            <button class="btn btn-primary-full ">View all Projects</button>
          </div>
        </Card>
      </column>
      <column col="12" md="4">
        <Card title="Team Members" body-class="!px-0">
          <div class="py-1.5 px-1">
            <ActivityCard class="!mb-1" v-for="item in [...activityData].slice(0,8)" :name="item.name" :activity="item.activity"  :src="item.src" :is-last="true"/>
          </div>
          <div class="card-footer text-right !py-1">
            <button class="btn btn-primary ">View all people</button>
          </div>

        </Card>
      </column>

    </row>
    <row>
      <column col="12" md="6">
        <div class="card p-1.3">
          <div class="flex flex-wrap justify-between items-center">
            <div>
              <span class="font-600 text-primary-dark text-[0.9rem]">Publish New Theme</span>
              <br>
              <span class="text-1 text-sky-600">Web Design</span>
            </div>
            <button class="btn btn-primary-full">
              completed
            </button>
          </div>
          <p class="text-gray-700 text-[0.9rem] py-1">Lorem ipsum dolor sit amet, contetur adipisng elit. A ab amet arcecto atque dolorque natus nuuam pariatur repudae sunt tenetur!
          </p>
          <div class="flex gap-1">
            <div class="flex flex-col gap-0.5">
              <h3 class="font-700 text-primary-dark">23</h3>
              <span class="text-gray-700 text-[0.8rem]">Updates</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <h3 class="font-700 text-primary-dark">2</h3>
              <span class="text-gray-700 text-[0.8rem]">Milestones</span>
            </div>
          </div>
          <div class="my-1 flex">
            <Tooltip type="profile" v-for="(item,index) in [...tooltipData].slice(0,3)" :index="index" :title="item.title" :src="item.img" width="6.5rem"/>
          </div>
          <div class="progress-bar progress-bar-big">
            <div class="inner w-[50%] bg-primary-indigo"></div>
          </div>
        </div>
      </column>
      <column col="12" md="6">
        <div class="card p-1.3">
          <div class="flex flex-wrap justify-between items-center">
            <div>
              <span class="font-600 text-primary-dark text-[0.9rem]">Publish New Theme</span>
              <br>
              <span class="text-1 text-teal-600">Web Design</span>
            </div>
            <button class="btn btn-teal-full">
              completed
            </button>
          </div>
          <p class="text-gray-700 text-[0.9rem] py-1">Lorem ipsum dolor sit amet, contetur adipisng elit. A ab amet arcecto atque dolorque natus nuuam pariatur repudae sunt tenetur!
          </p>
          <div class="flex gap-1">
            <div class="flex flex-col gap-0.5">
              <h3 class="font-700 text-primary-dark">23</h3>
              <span class="text-gray-700 text-[0.8rem]">Updates</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <h3 class="font-700 text-primary-dark">2</h3>
              <span class="text-gray-700 text-[0.8rem]">Milestones</span>
            </div>
          </div>
          <div class="my-1 flex">
            <Tooltip type="profile" v-for="(item,index) in tooltipData" :index="index" :title="item.title" :src="item.img" width="6.5rem"/>
          </div>
          <div class="progress-bar progress-bar-big">
            <div class="inner w-[80%] bg-teal-600"></div>
          </div>
        </div>
      </column>

    </row>
    <row>
      <column col="12" md="7">
        <Card :has-menu="true" title="Closed Projects">
          <client-only>
            <apexchart type="line" height="400" :options="chart4.chartOptions" :series="chart4.series"></apexchart>
          </client-only>

        </Card>
      </column>
      <column col="12" md="5" class="!py-0">
        <row class="!my-0 !py-0">
          <column col="12">
            <div class="card py-2 px-1.5 flex gap-1.5">
              <div>
                <h3 class="font-700 text-primary-dark flex items-center">
                  84.2
                  <i class="bi bi-circle-fill text-green-600 !text-[0.8rem] ml-1"></i>
                </h3>
                <span class="text-0.875 text-gray-700 tracking-widest uppercase">
                        Work hours
                      </span>
                <div class="divider !my-1.5"></div>
                <span class="text-0.75 text-gray-700  ">
                        Hours worked this month
                      </span>
              </div>
              <div>
                <client-only>
                  <apexchart type="radialBar" height="100%" :options="chart5.chartOptions" :series="chart5.series"></apexchart>
                </client-only>

              </div>
            </div>
          </column>
          <column col="12">
            <div class="card py-2 px-1.5 flex gap-1.5">
              <div>
                <h3 class="font-700 text-primary-dark flex items-center">
                  45.6
                  <i class="bi bi-circle-fill text-indigo-600 !text-[0.8rem] ml-1"></i>
                </h3>
                <span class="text-0.875 text-gray-700 tracking-widest uppercase">
                        Task Completed
                      </span>
                <div class="divider !my-1.5"></div>
                <span class="text-0.75 text-gray-700  ">
                        Tasks Completed this months
                      </span>
              </div>
              <div>
                <client-only>
                  <apexchart type="radialBar" height="100%" :options="chart6.chartOptions" :series="chart6.series"></apexchart>
                </client-only>

              </div>
            </div>
          </column>
        </row>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Active Tickets" body-class="!px-0 " class="overflow-hidden">
          <table class="w-full" >
            <thead class="bg-primary-dark text-white ">
            <tr >
              <th v-for="(item,index) in tableData6.th" colspan="1" class="uppercase tracking-wide text-[0.9rem] py-1.5  text-left" >
                <div class="flex items-center gap-0.5 px-1">
                  <input v-if="index===0" type="checkbox" class="checkbox bg-white">
                  <span class="uppercase">{{item}}</span>
                </div>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="table-hover " v-for="item in tableData6.td">
              <td class="p-1.5 py-2 flex items-center gap-0.25">
                <input type="checkbox" class="checkbox">
                <span class="text-gray-700 text-[0.85rem]">{{item.time}}</span>
              </td>
              <td class="">
                <div class="flex items-center gap-0.5 flex-row">
                  <UserProfile  :isCloud="true"  :src="item.img" width="45px" height="45px" image-width="35"/>
                  <span>{{item.name}}</span>
                </div>
              </td>
              <td class="w-[60%]">
                <div class="pr-1">
                  <span class="font-700 text-primary-dark text-[0.9rem]">{{item.descriptionTitle}}</span>
                  <p class="text-[0.9rem] text-gray-700">
                    {{item.description}}
                  </p>
                </div>

              </td>
            </tr>
            </tbody>


          </table>
          <div class="card-footer text-right !py-1">
            <button class="btn btn-primary-full ">View all Tickets</button>
          </div>
        </Card>
      </column>
    </row>
  </div>

</template>

<script setup lang="ts">
import {tableData5,tableData6} from "~/utils/tableData";
import {defaultPageData,activityData} from "~/utils/stateData";
import {tooltipData} from "~/utils/extraData";
import {chart4,chart5,chart6} from "~/utils/chartData";

</script>


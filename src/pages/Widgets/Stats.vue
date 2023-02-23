<template>
  <div class="container-fluid">
    <row>
      <column col="12">
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'stats widgets'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Stats Widgets</h1>
      </column>
    </row>
    <row class="!my-1" >
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
    <row class="!my-1">
      <column v-for="item in staticData1" col="12" md="4">
        <CardStatic2 :title="item.title" :icon="item.icon" :achieve="item.achieve" :income="item.income" :state="item.state" :theme="item.theme"/>
      </column>
    </row>
    <row class="!my-1">
      <column col="12" md="3" v-for="item in defaultPageData">
        <CardStatic3 :title="item.title" :state="item.state" :achieve="item.achieve" :change="item.change" />
      </column>
    </row>
    <row class="!my-1">
      <column col="12" md="4" v-for="item in staticData2">
        <CardStatic4 :icon="item.icon"
                     :achieve="item.achieve"
                     :title="item.title"
                     :change="item.change"
                     :btn="item.btn"
                     :theme="item.theme"
                     :link="item.link"
        />
      </column>
    </row>
    <row class="!my-1">
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
    <row class="!my-1">
      <column col="12" md="6">
        <div class="card p-1 ">
          <row class="!my-0 !py-0">
            <column col="4">
              <div>
                <h2 class="text-primary-dark font-600">625</h2>
                <span class="text-gray-600 text-1.1">New Customers</span>
                <div class="progress-bar mt-1.3 h-[9px] "><div class="inner w-[70%] bg-sky-500"></div></div>
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
                <span class="text-gray-600 text-1">SEM</span>
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
                <span class="text-gray-600 text-1 my-0.5">Affiliate Sales</span>
                <div class="progress-bar mt-1 h-[9px] "><div class="inner w-[70%] bg-red-500"></div></div>
              </div>
            </column>
            <column col="6" class="flex items-start gap-1">
              <i class="bi bi-arrow-up text-1.7 text-green-600"></i>
              <div class="w-full">
                <h2 class="text-primary-dark font-600 ">1,123</h2>
                <span class="text-gray-600 text-1 my-0.5">Ads Sales</span>
                <div class="progress-bar mt-1 h-[9px] "><div class="inner w-[70%] bg-green-500"></div></div>
              </div>
            </column>
          </row>
        </div>
      </column>
    </row>
    <row class="!my-1">
      <column col="12" sm="6" md="3">
        <Card title="Lines of code" :has-menu="true" body-class="!p-2 text-center">
          <h1 class="text-center text-primary-dark text-3.5 leading-1">865</h1>
          <div class="mt-1 flex justify-between items-center">
            <div>
              <span class="text-[0.85rem] text-gray-700">Tabs</span>
              <h4 class="font-700 text-green-600 mt-0.75">456</h4>
            </div>
            <div>
              <span class="text-[0.85rem] text-gray-700">Spaces</span>
              <h4 class="font-700 text-indigo-600 mt-0.75">125</h4>
            </div>

          </div>
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="Customers" :has-menu="true" body-class="!px-2 !py-1.5 text-center">
          <span class="icon-wrapper !w-5 !h-5 !bg-indigo-200 m-auto">
              <i class="bi bi-pie-chart text-2 text-indigo-600"></i>
          </span>
          <div class="mt-1 flex justify-between items-center">
            <div>
              <span class="text-[0.85rem] text-gray-700">Happy</span>
              <h4 class="font-700 text-pink-600 mt-0.75">456</h4>
            </div>
            <div>
              <span class="text-[0.85rem] text-gray-700">Ecstatic</span>
              <h4 class="font-700 text-sky-600 mt-0.75">125</h4>
            </div>

          </div>
        </Card>

      </column>
      <column col="12" sm="12" md="6">
        <Card title="plans" :has-menu="true" body-class="!px-2 !py-1">
          <h2 class="text-primary-dark font-700 leading-1">72.5%</h2>
          <div class="flex justify-between items-center my-1">
            <span class="text-[0.85rem] text-gray-600">Sales</span>
            <div class="flex items-center gap-1 w-[70%]">
              <div class="progress-bar !h-[8px]"><div class="inner bg-indigo-700 w-[70%]"></div></div>
              <span class="text-[0.85rem] text-gray-600">70%</span>
            </div>
          </div>
          <div class="flex justify-between items-center my-1">
            <span class="text-[0.85rem] text-gray-600">Ads</span>
            <div class="flex items-center gap-1 w-[70%]">
              <div class="progress-bar !h-[8px]"><div class="inner bg-sky-700 w-[40%]"></div></div>
              <span class="text-[0.85rem] text-gray-600">40%</span>
            </div>
          </div>
          <div class="flex justify-between items-center my-1">
            <span class="text-[0.85rem] text-gray-600">Campaigns</span>
            <div class="flex items-center gap-1 w-[70%]">
              <div class="progress-bar !h-[8px]"><div class="inner bg-red-700 w-[90%]"></div></div>
              <span class="text-[0.85rem] text-gray-600">90%</span>
            </div>
          </div>
          <div class="flex justify-between items-center my-1">
            <span class="text-[0.85rem] text-gray-600">Subscribers</span>
            <div class="flex items-center gap-1 w-[70%]">
              <div class="progress-bar !h-[8px]"><div class="inner bg-teal-700 w-[98%]"></div></div>
              <span class="text-[0.85rem] text-gray-600">98%</span>
            </div>
          </div>

        </Card>
      </column>
    </row>
    <row class="!my-1">
      <column col="12" md="4">
        <Card title="Your spendings" :has-menu="true" body-class="!p-0">
          <div class="p-2">
            <h2 class="font-700 text-primary-dark leading-1">$928</h2>
            <div class="flex justify-between items-center my-1">
                <span class="text-gray-600 text-[0.85rem] font-400">Planned for next month
                </span>
              <span class="text-primary-dark font-500">$1253</span>
            </div>
            <div class="progress-bar progress-bar-big"><div class="inner bg-teal-700 w-[60%]"></div>
            </div>

          </div>
          <div class="card-footer !p-1 flex justify-end">
            <button class="btn-teal-full btn">Take action</button>
          </div>
        </Card>
      </column>
      <column col="12" md="4">
        <Card title="Transactions" :has-menu="true" body-class="!p-0">
          <div class="p-2">
            <h2 class="font-700 text-primary-dark leading-1">326</h2>
            <div class="flex justify-between items-center my-1">
                <span class="text-gray-600 text-[0.85rem] font-400">Planned for next month
                </span>
              <span class="text-primary-dark font-500">391</span>
            </div>
            <div class="progress-bar progress-bar-big"><div class="inner bg-indigo-700 w-[60%]"></div>
            </div>

          </div>
          <div class="card-footer !p-1 flex justify-end">
            <button class="btn-primary-full btn">Take action</button>
          </div>
        </Card>
      </column>
      <column col="12" md="4">
        <Card title="Vat" :has-menu="true" body-class="!p-0">
          <div class="p-2">
            <h2 class="font-700 text-primary-dark leading-1">$928</h2>
            <div class="flex justify-between items-center my-1">
                <span class="text-gray-600 text-[0.85rem] font-400">Planned for next month
                </span>
              <span class="text-primary-dark font-500">$1253</span>
            </div>
            <div class="progress-bar progress-bar-big"><div class="inner bg-red-700 w-[60%]"></div>
            </div>

          </div>
          <div class="card-footer !p-1 flex justify-end">
            <button class="btn-red-full btn">Take action</button>
          </div>
        </Card>
      </column>
    </row>
    <row class="!my-1">
      <column v-for="item in defaultPageData" col="12" md="3">
        <CardCms :icon="item.icon" :title="item.title" :achieve="item.achieve" :change="item.change" :state="item.state" :theme="item.theme" :progress="item.progress"/>
      </column>
    </row>
    <row class="!my-1">
      <column v-for="item in defaultPageData" col="12" md="3">
        <div class="card p-2 flex justify-between items-center" :class="$bgColor(item.theme)">
          <div >
            <span class="text-primary-dark font-700 text-[0.9rem]">{{item.title}}</span>
            <h3 class="font-700" :class="$textColor(item.theme)">{{item.achieve}}</h3>
          </div>
          <i class="text-2" :class="[item.icon,$textColor(item.theme)]"></i>
        </div>
      </column>
    </row>
    <row class="!my-1">
      <column v-for="item in defaultPageData" col="12" md="3">
        <CardProject :title="item.title" :achieve="item.achieve" :theme="item.theme" :icon="item.icon"/>
      </column>
    </row>
    <row class="!my-1">
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


  </div>
</template>


<script setup lang="ts">
import {defaultPageData,staticData1,staticData2} from "~/utils/stateData";
import {tooltipData} from "~/utils/extraData";
const {$textColor,$bgColor}=useNuxtApp()
</script>


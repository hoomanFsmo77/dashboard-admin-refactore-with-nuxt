<template>
  <div class="container-fluid">
    <row>
      <column col="12" md="3">
        <div class="card !rounded-full p-1.5 flex justify-between gap-0.5 items-center">
          <div class="flex items-center gap-0.5">
            <i class="bi bi-circle-fill text-sky-600 text-[0.75rem]"></i>
            <div>
              <span class="text-[0.8rem] font-700 text-primary-dark"> Data consumed</span>
              <br>
              <span class="text-gray-600 font-500 text-[0.85rem]">145,14 GB</span>
            </div>
          </div>

          <div>
            <span class="icon-wrapper !bg-sky-600 !w-2 !h-2">
              <i class="bi bi-sd-card-fill !text-white !text-1"></i>
            </span>

          </div>
        </div>
      </column>
      <column col="12" md="3">
        <div class="card !rounded-full p-1.5  flex justify-between gap-0.5 items-center">
          <div class="flex items-center gap-0.5">
            <i class="bi bi-circle-fill text-green-600 text-[0.75rem]"></i>
            <div>
              <span class="text-[0.8rem] font-700 text-primary-dark"> Open cases</span>
              <br>
              <span class="text-gray-600 font-500 text-[0.85rem]">30</span>
            </div>
          </div>

          <div>
            <span class="icon-wrapper !bg-green-600 !w-2 !h-2">
                   <i class="bi bi-briefcase !text-white !text-1"></i>
            </span>

          </div>
        </div>
      </column>
      <column col="12" md="3">
        <div class="card !rounded-full p-1.5  flex justify-between gap-0.5 items-center">
          <div class="flex items-center gap-0.5">
            <i class="bi bi-circle-fill text-indigo-600 text-[0.75rem]"></i>
            <div>
              <span class="text-[0.8rem] font-700 text-primary-dark"> Work orders</span>
              <br>
              <span class="text-gray-600 font-500 text-[0.85rem]">30</span>
            </div>
          </div>

          <div>
            <span class="icon-wrapper !bg-indigo-600 !w-2 !h-2">
              <i class="bi bi-basket2-fill !text-white !text-1"></i>
            </span>

          </div>
        </div>
      </column>
      <column col="12" md="3">
        <div class="card !rounded-full p-1.5  flex justify-between gap-0.5 items-center">
          <div class="flex items-center gap-0.5">
            <i class="bi bi-circle-fill text-red-600 text-[0.75rem]"></i>
            <div>
              <span class="text-[0.8rem] font-700 text-primary-dark">New invoices</span>
              <br>
              <span class="text-gray-600 font-500 text-[0.85rem]">123</span>
            </div>
          </div>

          <div>
            <span class="icon-wrapper !bg-red-600 !w-2 !h-2">
              <i class="bi bi-ticket-perforated-fill  !text-white !text-1"></i>
            </span>

          </div>
        </div>
      </column>
    </row>
    <row class="!mt-3">
      <h6 class="text-primary-dark font-600 uppercase px-2 flex items-center gap-1">
        Finances
        <nuxt-img src="/coin.svg" width="20" alt=""/>
      </h6>
    </row>
    <row>
      <column col="12" md="5" class="!py-0">
        <row class="!my-0 !py-0">
          <column col="12">
            <div class="card py-2 px-1.5 flex gap-1.5">
              <div>
                <h3 class="font-700 text-primary-dark flex items-center">
                  84.2
                  <i class="bi bi-circle-fill text-indigo-600 !text-[0.8rem] ml-1"></i>
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
                  <apexchart type="radialBar" height="100%" :options="chart7.chartOptions" :series="chart7.series"></apexchart>
                </client-only>

              </div>
            </div>
          </column>
          <column col="12">
            <div class="card py-2 px-1.5 flex gap-1.5">
              <div>
                <h3 class="font-700 text-primary-dark flex items-center">
                  45.6
                  <i class="bi bi-circle-fill text-green-600 !text-[0.8rem] ml-1"></i>
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
                  <apexchart type="radialBar" height="100%" :options="chart8.chartOptions" :series="chart8.series"></apexchart>
                </client-only>

              </div>
            </div>
          </column>
        </row>
      </column>
      <column col="12" md="7">
        <Card :has-menu="true" title="Your Account Balance">
          <client-only>
            <apexchart type="line" height="400" :options="chart4.chartOptions" :series="chart4.series"></apexchart>
          </client-only>

        </Card>
      </column>
    </row>
    <row class="!mt-3">
      <h6 class="text-primary-dark font-600 uppercase px-2 flex items-center gap-1">
        Usage
        <nuxt-img src="/chart.svg" width="20" alt=""/>
      </h6>
    </row>
    <row>
      <column col="12" md="7">
        <Card :has-menu="true" title="Your referrals">
          <client-only>
            <apexchart type="line" height="400" :options="chart9.chartOptions" :series="chart9.series"></apexchart>
          </client-only>

        </Card>
      </column>
      <column col="12" md="5" class="!py-0">
        <row class="!my-0 !py-0">
          <column col="12">
            <div class="card py-2 px-1.5 flex gap-1.5">
              <div>
                <h3 class="font-700 text-primary-dark flex items-center">
                  86%
                  <i class="bi bi-circle-fill text-pink-600 !text-[0.8rem] ml-1"></i>
                </h3>
                <span class="text-0.875 text-gray-700 tracking-widest uppercase">
                        Monthly Usage
                      </span>
                <div class="divider !my-1.5"></div>
                <span class="text-0.75 text-gray-700  ">
                        Monthly allowed usage
                      </span>
              </div>
              <div>
                <client-only>
                  <apexchart type="radialBar" height="100%" :options="chart10.chartOptions" :series="chart10.series"></apexchart>
                </client-only>

              </div>
            </div>
          </column>
          <column col="12">
            <div class="card py-2 px-1.5 flex gap-1.5">
              <div>
                <h3 class="font-700 text-primary-dark flex items-center">
                  126.2$
                  <i class="bi bi-circle-fill text-teal-600 !text-[0.8rem] ml-1"></i>
                </h3>
                <span class="text-0.875 text-gray-700 tracking-widest uppercase">
                        All Income
                      </span>
                <div class="divider !my-1.5"></div>
                <span class="text-0.75 text-gray-700  ">
                        Lorem ipsum dolor sit
                      </span>
              </div>
              <div>
                <client-only>
                  <apexchart type="radialBar" height="160px"  :options="chart11.chartOptions" :series="chart11.series"></apexchart>
                </client-only>

              </div>
            </div>
          </column>
        </row>
      </column>
    </row>
    <row class="!mt-3">
      <h6 class="text-primary-dark font-600 uppercase px-2 flex items-center gap-1">
        Linked Cards
        <nuxt-img src="/credit.svg" width="20" alt=""/>
      </h6>
    </row>
    <row>
      <column col="12" md="4">
        <div class="card  bg-gradient bg-gradient-indigo p-1.5  cursor-pointer group relative">
          <font-awesome-icon class="text-primary-dark text-[2.3rem] group-hover:!text-white" icon="fa-brands fa-cc-visa "></font-awesome-icon>

          <h6 class="uppercase tracking-widest text-primary-dark font-700 mt-1.4 group-hover:!text-white">card number</h6>
          <span class="text-gray-400 text-[0.9rem] tracking-widest group-hover:!text-white">1234 4567 7891 0123</span>
          <h4 class=" tracking-wide text-primary-dark font-700 mt-0.5 group-hover:!text-white">417.23$</h4>
          <a href="#" class="link-stretch"></a>
        </div>
      </column>
      <column col="12" md="4">
        <div class="card  bg-gradient bg-gradient-sky p-1.5  cursor-pointer group relative">
          <font-awesome-icon icon="fa-brands fa-cc-mastercard" class=" text-primary-dark text-[2.3rem] group-hover:!text-white"></font-awesome-icon>

          <h6 class="uppercase tracking-widest text-primary-dark font-700 mt-1.4 group-hover:!text-white">card number</h6>
          <span class="text-gray-400 text-[0.9rem] tracking-widest group-hover:!text-white">1234 4567 7891 0123</span>
          <h4 class=" tracking-wide text-primary-dark font-700 mt-0.5 group-hover:!text-white">658.23$</h4>
          <a href="#" class="link-stretch"></a>
        </div>
      </column>
      <column col="12" md="4">
        <div class="card  bg-gradient bg-gradient-green p-1.5  cursor-pointer group relative">
          <font-awesome-icon icon="fa-brands fa-cc-discover" class=" text-primary-dark text-[2.3rem] group-hover:!text-white"></font-awesome-icon>
          <h6 class="uppercase tracking-widest text-primary-dark font-700 mt-1.4 group-hover:!text-white">card number</h6>
          <span class="text-gray-400 text-[0.9rem] tracking-widest group-hover:!text-white">1234 4567 7891 0123</span>
          <h4 class=" tracking-wide text-primary-dark font-700 mt-0.5 group-hover:!text-white">851.23$</h4>
          <a href="#" class="link-stretch"></a>
        </div>
      </column>
    </row>
    <row class="!mt-3">
      <h6 class="text-primary-dark font-600 uppercase px-2 flex items-center gap-1">
        Updates
        <nuxt-img src="/new.svg" width="20" alt=""/>
      </h6>
    </row>
    <row>
      <column col="12" md="6">
        <Card title="Transaction history" :has-menu="true" body-class="p-2">
          <span class="text-[0.9rem] text-gray-500 block text-center">Lorem ipsum dolor sit amet, consectetur.</span>
          <div class="px-1 my-1.5 flex justify-between items-center">
            <div class="flex gap-1 items-center">
                  <span class="inline-block w-3 h-3 rounded-full shadow-card flex justify-center items-center">
                       <font-awesome-icon icon="fa-brands fa-apple"></font-awesome-icon>
                 </span>
              <div>
                    <span class="font-700 text-primary-dark text-[0.9rem] flex items-center">
                      App store.
                      <i class="bi bi-circle-fill text-green-600 text-[0.6rem] ml-0.5"></i>
                    </span>
                <span class="text-gray-500 text-[0.85rem] block mt-0.25">
                      Lorem ipsum.
                    </span>

              </div>

            </div>
            <div>
              <h5 class="text-green-600 font-600">-35$</h5>
            </div>
          </div>
          <div class="px-1 my-1.5 flex justify-between items-center">
            <div class="flex gap-1 items-center">
                  <span class="inline-block w-3 h-3 rounded-full shadow-card flex justify-center items-center">
                       <font-awesome-icon icon="fa-brands fa-dropbox"></font-awesome-icon>
                 </span>
              <div>
                    <span class="font-700 text-primary-dark text-[0.9rem] flex items-center">
                      Dropbox Inc.
                      <i class="bi bi-circle-fill text-red-600 text-[0.6rem] ml-0.5"></i>
                    </span>
                <span class="text-gray-500 text-[0.85rem] block mt-0.25">
                      Lorem ipsum.
                    </span>

              </div>

            </div>
            <div>
              <h5 class="text-red-600 font-600">-59$</h5>
            </div>
          </div>
          <div class="px-1 my-1.5 flex justify-between items-center">
            <div class="flex gap-1 items-center">
                  <span class="inline-block w-3 h-3 rounded-full shadow-card flex justify-center items-center">
                      <font-awesome-icon icon="fa-solid fa-store"></font-awesome-icon>
                 </span>
              <div>
                    <span class="font-700 text-primary-dark text-[0.9rem] flex items-center">
                      Supermarket.
                      <i class="bi bi-circle-fill text-indigo-600 text-[0.6rem] ml-0.5"></i>
                    </span>
                <span class="text-gray-500 text-[0.85rem] block mt-0.25">
                      Lorem ipsum.
                    </span>

              </div>

            </div>
            <div>
              <h5 class="text-indigo-600 font-600">-35$</h5>
            </div>
          </div>
          <div class="px-1 my-1.5 flex justify-between items-center">
            <div class="flex gap-1 items-center">
                  <span class="inline-block w-3 h-3 rounded-full shadow-card flex justify-center items-center">
                       <font-awesome-icon icon="fa-brands fa-android"></font-awesome-icon>
                 </span>
              <div>
                    <span class="font-700 text-primary-dark text-[0.9rem] flex items-center">
                      Play store.
                      <i class="bi bi-circle-fill text-sky-600 text-[0.6rem] ml-0.5"></i>
                    </span>
                <span class="text-gray-500 text-[0.85rem] block mt-0.25">
                      Lorem ipsum.
                    </span>

              </div>

            </div>
            <div>
              <h5 class="text-sky-600 font-600">-35$</h5>
            </div>
          </div>
          <div class="px-1 my-1.5 flex justify-between items-center">
            <div class="flex gap-1 items-center">
                  <span class="inline-block w-3 h-3 rounded-full shadow-card flex justify-center items-center">
                       <font-awesome-icon icon="fa-brands fa-apple"></font-awesome-icon>
                 </span>
              <div>
                    <span class="font-700 text-primary-dark text-[0.9rem] flex items-center">
                      App store.
                      <i class="bi bi-circle-fill text-green-600 text-[0.6rem] ml-0.5"></i>
                    </span>
                <span class="text-gray-500 text-[0.85rem] block mt-0.25">
                      Lorem ipsum.
                    </span>

              </div>

            </div>
            <div>
              <h5 class="text-green-600 font-600">-35$</h5>
            </div>
          </div>
          <div class="px-1 my-1.5 flex justify-between items-center">
            <div class="flex gap-1 items-center">
                  <span class="inline-block w-3 h-3 rounded-full shadow-card flex justify-center items-center">
                       <font-awesome-icon icon="fa-brands fa-dropbox"></font-awesome-icon>
                 </span>
              <div>
                    <span class="font-700 text-primary-dark text-[0.9rem] flex items-center">
                      Dropbox Inc.
                      <i class="bi bi-circle-fill text-red-600 text-[0.6rem] ml-0.5"></i>
                    </span>
                <span class="text-gray-500 text-[0.85rem] block mt-0.25">
                      Lorem ipsum.
                    </span>

              </div>

            </div>
            <div>
              <h5 class="text-red-600 font-600">-59$</h5>
            </div>
          </div>
          <div class="px-1 my-1.5 flex justify-between items-center">
            <div class="flex gap-1 items-center">
                  <span class="inline-block w-3 h-3 rounded-full shadow-card flex justify-center items-center">
                       <font-awesome-icon icon="fa-brands fa-dropbox"></font-awesome-icon>
                 </span>
              <div>
                    <span class="font-700 text-primary-dark text-[0.9rem] flex items-center">
                      Dropbox Inc.
                      <i class="bi bi-circle-fill text-red-600 text-[0.6rem] ml-0.5"></i>
                    </span>
                <span class="text-gray-500 text-[0.85rem] block mt-0.25">
                      Lorem ipsum.
                    </span>

              </div>

            </div>
            <div>
              <h5 class="text-red-600 font-600">-59$</h5>
            </div>
          </div>

        </Card>
      </column>
      <column col="12" md="6">
        <div class="card my-1 !rounded-full p-1.5 flex justify-between items-center">
          <div class="flex items-center gap-1">
            <i class="bi bi-circle-fill text-sky-600 text-[0.75rem]"></i>
            <div>
              <span class="text-[0.9rem] font-700 text-primary-dark">Completed cases</span>
              <br>
              <span class="text-gray-500 font-500 text-[0.85rem]">127 new cases</span>
            </div>
          </div>
          <span class="icon-wrapper !bg-sky-600 !w-2.5 !h-2.5">
              <font-awesome-icon class="!text-white !text-1" icon="fa-solid fa-battery-three-quarters "></font-awesome-icon>
          </span>
        </div>
        <div class="card my-1 !rounded-full p-1.5 flex justify-between items-center">
          <div class="flex items-center gap-1">
            <i class="bi bi-circle-fill text-green-600 text-[0.75rem]"></i>
            <div>
              <span class="text-[0.9rem] font-700 text-primary-dark">New Quotes</span>
              <br>
              <span class="text-gray-500 font-500 text-[0.85rem]">214 new quotes</span>
            </div>
          </div>
          <span class="icon-wrapper !bg-green-600 !w-2.5 !h-2.5">
            <font-awesome-icon class=" !text-white !text-1" icon="fa-solid fa-dollar-sign"></font-awesome-icon>
          </span>
        </div>
        <div class="card my-1 !rounded-full p-1.5 flex justify-between items-center">
          <div class="flex items-center gap-1">
            <i class="bi bi-circle-fill text-red-600 text-[0.75rem]"></i>
            <div>
              <span class="text-[0.9rem] font-700 text-primary-dark">New clients</span>
              <br>
              <span class="text-gray-500 font-500 text-[0.85rem]">25 new clients</span>
            </div>
          </div>
          <span class="icon-wrapper !bg-red-600 !w-2.5 !h-2.5">
            <font-awesome-icon icon="fa-solid fa-user-group " class="!text-white !text-1"></font-awesome-icon>

          </span>
        </div>
        <div class="card p-2 !rounded-18">
          <div>
            <h3 class="font-700 flex items-center text-primary-dark">
              84.6
              <i class="bi bi-circle-fill ml-1 text-red-600 text-[0.6rem]"></i>
            </h3>
            <span class="text-[0.9rem] text-gray-500">
              Daily Profile Visitors
            </span>
          </div>
          <div>
            <client-only>
              <apexchart type="line" height="200" :options="chart12.chartOptions" :series="chart12.series"></apexchart>
            </client-only>


          </div>

        </div>
      </column>
    </row>
    <row class="!mt-3">
      <h6 class="text-primary-dark font-600 uppercase px-2 flex items-center gap-1">
        People
        <nuxt-img src="/people.svg" width="20" alt=""/>
      </h6>
    </row>
    <row>
      <column col="12">
        <div class="card bg-gradient bg-gradient-blue md:flex-row flex-col flex gap-1 items-center px-2.5 py-1 !rounded-16 relative group cursor-pointer">
          <div class="group-hover:[&_*]:!text-white ">
            <h5 class="font-700 text-primary-dark">24 <sup class="!text-0.75 !text-gray-500">May</sup></h5>
          </div>
          <div class=" flex md:flex-row flex-col gap-1 items-center">
            <UserProfile height="50px" image-width="40" width="50px" src="/profiles/profile_1.svg"/>
            <h6  class="group-hover:!text-white font-700 text-primary-dark">Lorem ipsum</h6>
            <span class="p-0.85 bg-gray-200 flex justify-center items-center rounded-full text-0.875 !text-gray-700">
              User testing
            </span>
          </div>
          <div class="group-hover:[&_*]:!text-white md:w-[50%] w-full">
            <p class="text-center text-gray-700 text-[0.9rem] px-1">Lorem ipsum dolor sit amet, consetur adisicing elit. Consequr debitis nobis ppiiatis quasi, qui ratione reprheit! Deseunt facilis nostrum quod.</p>
          </div>
          <a href="#" class="link-stretch"></a>
        </div>
      </column>
      <column col="12">
        <div class="card bg-gradient bg-gradient-blue md:flex-row flex-col flex gap-1 items-center px-2.5 py-1 !rounded-16 relative group cursor-pointer">
          <div class="group-hover:[&_*]:!text-white ">
            <h5 class="font-700 text-primary-dark">24 <sup class="!text-0.75 !text-gray-500">May</sup></h5>
          </div>
          <div class=" flex md:flex-row flex-col gap-1 items-center">
            <UserProfile height="50px" image-width="40" width="50px" src="/profiles/profile_2.svg"/>
            <h6  class="group-hover:!text-white font-700 text-primary-dark">Lorem ipsum</h6>
            <span class="p-0.85 bg-gray-200 flex justify-center items-center rounded-full text-0.875 !text-gray-700">
              Web developer
            </span>
          </div>
          <div class="group-hover:[&_*]:!text-white md:w-[50%] w-full">
            <p class="text-center text-gray-700 text-[0.9rem] px-1">Lorem ipsum dolor sit amet, consetur adisici, qui ratione reprheit! Deseunt facilis nostrum quod.</p>
          </div>
          <a href="#" class="link-stretch"></a>
        </div>
      </column>
      <column col="12">
        <div class="card bg-gradient bg-gradient-blue md:flex-row flex-col flex gap-1 items-center px-2.5 py-1 !rounded-16 relative group cursor-pointer">
          <div class="group-hover:[&_*]:!text-white ">
            <h5 class="font-700 text-primary-dark">24 <sup class="!text-0.75 !text-gray-500">May</sup></h5>
          </div>
          <div class=" flex md:flex-row flex-col gap-1 items-center">
            <UserProfile height="50px" image-width="40" width="50px" src="/profiles/profile_3.svg"/>
            <h6  class="group-hover:!text-white font-700 text-primary-dark">Lorem ipsum</h6>
            <span class="p-0.85 bg-gray-200 flex justify-center items-center rounded-full text-0.875 !text-gray-700">
              Analysis Agent
            </span>
          </div>
          <div class="group-hover:[&_*]:!text-white md:w-[50%] w-full">
            <p class="text-center text-gray-700 text-[0.9rem] px-1">Lorem ipsum dolor sit amet, consetur adisicing elit. Consequr debitis reprheit! Deseunt facilis nostrum quod.</p>
          </div>
          <a href="#" class="link-stretch"></a>
        </div>
      </column>
      <column col="12">
        <div class="card bg-gradient bg-gradient-blue md:flex-row flex-col flex gap-1 items-center px-2.5 py-1 !rounded-16 relative group cursor-pointer">
          <div class="group-hover:[&_*]:!text-white ">
            <h5 class="font-700 text-primary-dark">24 <sup class="!text-0.75 !text-gray-500">May</sup></h5>
          </div>
          <div class=" flex md:flex-row flex-col gap-1 items-center">
            <UserProfile height="50px" image-width="40" width="50px" src="/profiles/profile_4.svg"/>
            <h6  class="group-hover:!text-white font-700 text-primary-dark">Lorem ipsum</h6>
            <span class="p-0.85 bg-gray-200 flex justify-center items-center rounded-full text-0.875 !text-gray-700">
              User testing
            </span>
          </div>
          <div class="group-hover:[&_*]:!text-white md:w-[50%] w-full">
            <p class="text-center text-gray-700 text-[0.9rem] px-1">Lorem ipsum dolor sit amet, consetur adisicing elnt facilis nostrum quod.</p>
          </div>
          <a href="#" class="link-stretch"></a>
        </div>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import {chart4,chart7,chart8,chart9,chart10,chart11,chart12} from "~/utils/chartData";



</script>

<style scoped>

</style>
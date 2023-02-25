<template>
  <div class="container-fluid">
    <row>
      <column col="12">
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Data Widgets'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Data Widgets</h1>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <Card class="overflow-hidden" title="Recent Tickets" body-class="!p-0">
          <div class="table-responsive">
            <table class="w-full">
              <thead class="bg-primary-dark text-white text-left font-500">
              <tr class="w-full">
                <th v-for="item in tableData8.th" class="uppercase tracking-wide text-[0.9rem]  p-1.5 first:pl-1">
                  {{item}}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr class="table-hover text-center " v-for="item in tableData8.td">
                <td class="p-1">
                  <span class="category-card block" :class="[$bgColor(item.statusTheme),$textColor(item.statusTheme)]">{{item.status}}</span>
                </td>
                <td >
                  <span class="font-700 text-[0.9rem] text-primary-dark">{{item.subject}}</span>
                </td>
                <td>
                  <span class="text-[0.8rem] font-500 text-gray-700">{{item.dep}}</span>
                </td>
                <td>
                  <span class="text-[0.8rem] font-500 text-gray-700">{{item.date}}</span>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </Card>
      </column>
      <column col="12" md="6">
        <Card class="overflow-hidden " title="Latest Posts" body-class="!p-0 flex flex-col justify-between">
          <div class="p-2">
            <div class="flex gap-0.75 mb-0.75 items-center">
              <nuxt-img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJE9SGT64-0bzC7HcN6rJqd9J4T_naH8TVFg&usqp=CAU"
                  alt=""
                  width="100" class="rounded-4"
              />
              <div>
                <a href="#!" class="font-700 text-blue-700 hover:text-blue-800 text-[0
                .9rem]">Lorem ipsum.</a>
                <span class=" text-[0.8rem] flex gap-0.5 my-0.25 items-center">
                  <i class="bi bi-person-circle "></i>
                  <span>Lorem ipsum dolor</span>
                  <span>|</span>
                  <span>Gear</span>
                </span>
                <span class="text-[0.8rem] text-gray-600">
                  Lorem ipsum dolor sit amet, cotur ading elit.
                </span>
              </div>
            </div>
            <div class="flex gap-0.75 mb-0.75 items-center">
              <nuxt-img
                  src=                'data:image/jpeg;base64,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'

                  alt=""
                  width="100" class="rounded-4"
              />
              <div>
                <a href="#!" class="font-700 text-blue-700 hover:text-blue-800 text-[0
                .9rem]">Lorem ipsum.</a>
                <span class=" text-[0.8rem] flex gap-0.5 my-0.25 items-center">
                  <i class="bi bi-person-circle "></i>
                  <span>Lorem ipsum dolor</span>
                  <span>|</span>
                  <span>Gear</span>
                </span>
                <span class="text-[0.8rem] text-gray-600">
                  Lorem ipsum dolor sit amet, cotur ading elit.
                </span>
              </div>
            </div>
            <div class="flex gap-0.75 mb-0.75 items-center">
              <nuxt-img
                  src='data:image/jpeg;base64,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'

                  alt=""
                  width="100" class="rounded-4"
              />
              <div>
                <a href="#!" class="font-700 text-blue-700 hover:text-blue-800 text-[0
                .9rem]">Lorem ipsum.</a>
                <span class=" text-[0.8rem] flex gap-0.5 my-0.25 items-center">
                  <i class="bi bi-person-circle "></i>
                  <span>Lorem ipsum dolor</span>
                  <span>|</span>
                  <span>Gear</span>
                </span>
                <span class="text-[0.8rem] text-gray-600">
                  Lorem ipsum dolor sit amet, cotur ading elit.
                </span>
              </div>
            </div>
            <div class="flex gap-0.75 mb-0.75 items-center">
              <nuxt-img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJE9SGT64-0bzC7HcN6rJqd9J4T_naH8TVFg&usqp=CAU"
                  alt=""
                  width="100" class="rounded-4"
              />
              <div>
                <a href="#!" class="font-700 text-blue-700 hover:text-blue-800 text-[0
                .9rem]">Lorem ipsum.</a>
                <span class=" text-[0.8rem] flex gap-0.5 my-0.25 items-center">
                  <i class="bi bi-person-circle "></i>
                  <span>Lorem ipsum dolor</span>
                  <span>|</span>
                  <span>Gear</span>
                </span>
                <span class="text-[0.8rem] text-gray-600">
                  Lorem ipsum dolor sit amet, cotur ading elit.
                </span>
              </div>
            </div>
          </div>

          <div class="card-footer text-right !py-1">
            <button class="btn btn-primary-full">View all posts</button>
          </div>
        </Card>

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
        <Card title="to do list" body-class="!p-2">
          <TodoItem title="Edit article" :is-checked="true"/>
          <TodoItem title="Upload new tutorial" :is-checked="true"/>
          <TodoItem title="Send PayPal payments" :is-checked="true"/>
          <TodoItem title="New post on Facebook" :is-checked="false"/>
          <TodoItem title="Pay coworking space" :is-checked="true"/>
          <TodoItem title="Contact John" :is-checked="false"/>
          <TodoItem title="Inbox zero" :is-checked="false"/>
          <div class="newItem" v-for="todo in todos">
            <TodoItem :title="todo" :is-checked="false"/>
          </div>
          <FormInputGroup type="full" @call="addNewItem" v-model="searchText" icon="bi bi-plus-lg" placeholder="Add Item"/>
        </Card>
      </column>
      <column col="12" md="6">
        <Card title="Projects" body-class="!p-2" class="h-full">
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
          <FormInputGroup type="full" icon="bi bi-plus-lg" placeholder="Quickly Add New Project"/>
        </Card>


      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Active Tickets" body-class="!px-0 " class="overflow-hidden">
          <div class="table-responsive">
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
                    <UserProfile :src="item.img" width="45px" height="45px" image-width="35"/>
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
          </div>
          <div class="card-footer text-right !py-1">
            <button class="btn btn-primary-full ">View all Tickets</button>
          </div>
        </Card>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <Card class="overflow-hidden" title="Latest Customers" body-class="!p-0 overflow-hidden">
          <div class="table-responsive">
            <table class="w-full">
              <thead class="bg-primary-dark ">
              <tr>
                <th class="uppercase tracking-wide text-[0.9rem] py-1.5 px-1 text-center" v-for="item in tableData9.th">
                  <span class="text-white uppercase">{{item}}</span>

                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in tableData9.td" class="table-hover">
                <td class="p-0.75  gap-1 flex items-center  " >
                  <nuxt-img width="30" :src="item.image" alt=""/>
                  <span class="text-[0.9rem] text-primary-dark font-500 capitalize">{{item.country}}</span>
                </td>
                <td class="text-center">
                  <span class="text-[0.9rem] font-500 text-primary-dark">{{item.name}}</span>
                </td>
                <td class="text-center">
                  {{item.orders}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer !py-1 text-right">
            <button class="btn btn-primary">View all customers</button>
          </div>
        </Card>
      </column>
      <column col="12" md="6">
        <Card class="overflow-hidden" title="Feed" body-class="!p-0">
          <div class="p-2">
            <ul class="flex flex-col gap-1.6">
              <li class="flex justify-between items-center" v-for="item in tableData8.td">
                <div class="flex gap-1 items-center">
                <span class="icon-wrapper" :class="[$bgColor(item.statusTheme),$textColor(item.statusTheme)]">
                  <i :class="item.icon"></i>
                </span>
                  <span class="text-primary-dark text-[0.9rem] font-500">{{item.subject}}</span>
                </div>
                <span class="text-[0.85rem] text-gray-600">{{item.date}}</span>

              </li>
            </ul>
          </div>
          <button class="btn btn-primary-full w-full uppercase !py-1.5 !rounded-t-[0]">
            see all updates
          </button>
        </Card>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="products" body-class="!px-0 " class="overflow-hidden">
          <div class="table-responsive">
            <table class="w-full" >
              <thead class="bg-primary-dark text-white ">
              <tr >
                <th v-for="item in tableData3.th"  class="uppercase tracking-wide text-[0.9rem] py-1.5  text-left" >
                  <span class="text-white px-0.5">{{item.title}}</span>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr class="table-hover " v-for="item in tableData3.td.slice(0,6)">
                <td class=" text-[0.9rem] text-primary-dark px-1">#{{item.productId}}</td>
                <td class="flex gap-0.5 flex-col md:flex-row items-center p-1">
                  <nuxt-img class="rounded-4" :src="item.image" width="100" alt=""/>
                  <span class="text-primary-dark font-700">{{item.name}}</span>
                </td>
                <td class="text-[0.9rem] text-center">${{item.price}}</td>
                <td class="text-[0.9rem] text-center">{{item.inStock}}</td>
                <td class="text-[0.9rem] text-gray-600 text-center">{{item.date.year}}/{{item.date.month}}/{{item.date.day}}</td>
                <td class="text-center">
                  <span v-if="item.status" class="category-card block" :class="{'!bg-green-200 text-green-600':item.status==='hot','text-red-600 !bg-red-200':item.status==='Soldout','text-indigo-600 !bg-indigo-200':item.status==='New Arrival'}">{{item.status}}</span>
                </td>
                <td >
                  <div class="flex justify-between items-center px-1">
                    <i class="bi bi-trash3-fill text-red-600 cursor-pointer text-1.3"></i>
                    <i class="bi bi-pencil-square text-sky-600 cursor-pointer text-1.3"></i>
                  </div>
                </td>
              </tr>
              </tbody>


            </table>
          </div>
          <div class="card-footer !py-1 text-right">
            <button class="btn-dark btn">See all  orders </button>
          </div>
        </Card>

      </column>
    </row>
    <row>
      <column col="12">
        <TableOrderSection :has-card="true" :has-option="false"/>
      </column>
    </row>




  </div>
</template>

<script setup lang="ts">
import {tableData8,tableData5,tableData6,tableData9,tableData3} from "~/utils/tableData";
import {activityData} from "~/utils/stateData";
import {tooltipData} from "~/utils/extraData";
const searchText=ref<string>('')
const todos=ref<string[]>([])

const addNewItem = () => {
  todos.value.push(searchText.value)
  searchText.value=''
}

</script>

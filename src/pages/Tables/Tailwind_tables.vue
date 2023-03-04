<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'tailwind tables'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">tailwind tables</h1>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <Card title="Basic Table" :has-menu="!false" body-class="!p-2">
          <div class="table-responsive">
            <table class="w-full">
              <thead>
              <tr class="!border-b-primary-dark !border-b-2 [&_th]:text-left [&_th]:!text-primary-dark [&_th]:!text-[0.9rem] [&_th]:px-0.5">
                <th class="!p-0.5">#</th>
                <th >Name</th>
                <th >Company</th>
                <th >Email</th>
              </tr>
              </thead>
              <tbody>
              <tr class="[&_td]:text-[0.9rem]  [&_td]:px-0.5  [&_td]:py-0.75 [&_td]:text-primary-dark [&_td]:font-500" v-for="(item,index) in tableData11.td.slice(0,3)">
                <td class="!font-800">{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.city}}</td>
                <td>{{item.email}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </column>
      <column col="12" md="6">
        <Card title="Striped Table" :has-menu="!false" body-class="!p-2">
          <div class="table-responsive">
            <table class="w-full">
              <thead>
              <tr class="!border-b-primary-dark !border-b-2 [&_th]:text-left [&_th]:!text-primary-dark [&_th]:!text-[0.9rem] [&_th]:px-0.5">
                <th class="!p-0.5">#</th>
                <th >Name</th>
                <th >Company</th>
                <th >Email</th>
              </tr>
              </thead>
              <tbody>
              <tr class="[&_td]:text-[0.9rem] odd:bg-gray-100/80 [&_td]:px-0.5  [&_td]:py-0.75 [&_td]:text-primary-dark [&_td]:font-500" v-for="(item,index) in tableData11.td.slice(0,3)">
                <td class="!font-800">{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.city}}</td>
                <td>{{item.email}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </Card>

      </column>
    </row>
    <row>
      <column col="12" md="6">
        <Card title="Striped table with hover effect" :has-menu="!false" body-class="!p-2">
          <div class="table-responsive">
            <table class="w-full">
              <thead>
              <tr class="!border-b-primary-dark !border-b-2 [&_th]:text-left [&_th]:!text-primary-dark [&_th]:!text-[0.9rem] [&_th]:px-0.5">
                <th class="!p-0.5">#</th>
                <th >Name</th>
                <th >Company</th>
                <th  >Email</th>
              </tr>
              </thead>
              <tbody>
              <tr class="[&_td]:text-[0.9rem] odd:bg-gray-100/80 even:hover:bg-gray-100/80 even:transition-all [&_td]:px-0.5  [&_td]:py-0.75 [&_td]:text-primary-dark [&_td]:font-500" v-for="(item,index) in tableData11.td.slice(0,3)">
                <td class="!font-800">{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.city}}</td>
                <td>{{item.email}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </column>
      <column col="12" md="6">
        <Card title="Compact Table" :has-menu="!false" body-class="!p-2">
          <div class="table-responsive">
            <table class="w-full">
              <thead>
              <tr class="!border-b-primary-dark !border-b-2 [&_th]:text-left [&_th]:!text-primary-dark [&_th]:!text-[0.9rem] [&_th]:px-0.5">
                <th class="!p-0.5">#</th>
                <th >Name</th>
                <th >Company</th>
                <th >Email</th>
              </tr>
              </thead>
              <tbody>
              <tr class="[&_td]:text-[0.9rem] odd:bg-gray-100/80 [&_td]:px-0.5  [&_td]:py-0.75 [&_td]:text-primary-dark [&_td]:font-500" v-for="(item,index) in tableData11.td.slice(0,5)">
                <td class="!font-800">{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.city}}</td>
                <td>{{item.email}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </Card>

      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import {tableData11} from "~/utils/tableData";


</script>

<style scoped>

</style>
<template>
  <div class="container-fluid">
    <row>
      <column col="12">
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Orders',link: 'Ecommerce-Orders'},{name:'Order #25646'}]"/>
        <div class="flex flex-col md:flex-row justify-between md:items-center md:mb-0 mb-1">
          <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Orders #25646</h1>
          <div class="flex">
            <span class="category-card flex items-center bg-green-200 text-green-600 text-[0.7rem] md:text-[0.9rem] mr-1">
                <i class="bi bi-circle-fill !text-[0.4rem] mx-0.25"></i>
              Paid
            </span>
            <span class="category-card flex items-center bg-orange-200 text-orange-600 text-[0.7rem] md:text-[0.9rem] ">
              <i class="bi bi-circle-fill !text-[0.4rem] mx-0.25"></i>
              Being Processed
            </span>
          </div>

        </div>

        <div class="flex justify-between md:flex-row flex-col items-center">
          <div class="flex gap-1 items-center">
            <NuxtLink :to="{name:'index'}" class="text-[0.8rem] text-gray-500 hover:underline">
              <font-awesome-icon icon="fa-solid fa-download"></font-awesome-icon>
              Export
            </NuxtLink>
            <NuxtLink :to="{name:'index'}" class="text-[0.8rem] text-gray-500 hover:underline">
              <font-awesome-icon icon="fa-solid fa-print"></font-awesome-icon>
              Print
            </NuxtLink>
            <div class="relative">
              <NavbarButton
                  class="!flex !gap-0.65 !text-[0.9rem] !font-500 !items-center !text-gray-500 !cursor-pointer !p-0.5 !rounded-4"
                  @show="toggleFocus"
                  :active="undefined" badge="!w-0 !h-0"
              >
                <template v-slot:content>
                  <i class="bi bi-plus-circle-fill"></i>
                  More actions
                  <i class="bi bi-caret-down-fill"></i>
                </template>

              </NavbarButton>

              <Transition name="show">
                <Dropdown v-if="show" top="54px" width="150px">
                  <li class="dropdown-hover !text-[0.9rem] !text-gray-700">
                    <NuxtLink to="#!">
                      Action
                    </NuxtLink>
                  </li>
                  <li class=" dropdown-hover !text-[0.9rem] !text-gray-700">
                    <NuxtLink to="#!">
                      Another action
                    </NuxtLink>
                  </li>
                  <li class=" dropdown-hover !text-[0.9rem] !text-gray-700">
                    <NuxtLink to="#!">
                      Something else
                    </NuxtLink>
                  </li>
                </Dropdown>
              </Transition>

            </div>
          </div>
          <div class="text-[0.8rem] text-gray-600 flex gap-0.5">
            <i class="bi bi-calendar-fill !text-[0.7rem]"></i>
            Jun 22, 2021 — 10:25 AM
          </div>
        </div>

      </column>
    </row>
    <row>
      <column col="12" md="8">
        <row class="!mt-0 !pt-0">
          <column col="12" class="!pt-0">
            <Card title="Order details" body-class="overflow-hidden !px-0">
              <div class="overflow-x-auto w-0 min-w-full">
                <table class="w-full" >
                  <thead class="bg-gray-100 border-b-2 border-b-primary-dark">
                  <tr >
                    <th v-for="item in tableData10.th" colspan="1" class="uppercase tracking-wide text-[0.9rem] py-1.5 px-1 text-left" >
                      <div >
                        <span class="text-primary-dark uppercase">{{item}}</span>
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="table-hover " v-for="item in tableData10.td">
                    <td class="p-1 px-1.3 ">
                      <div class="flex items-center gap-1 md:flex-row flex-col">
                        <nuxt-img class="rounded-4" :src="item.img" width="100" alt=""/>
                        <div>
                          <span class="text-[0.9rem] font-600">{{item.name}}</span>
                          <br>
                          <span class="text-[0.8rem] text-gray-500 font-600">{{item.detail}}</span>
                        </div>

                      </div>

                    </td>
                    <td class="text-center">
                      <span class="text-[0.9rem]">{{item.items}}</span>
                    </td>
                    <td class="text-center">
                      <span class="text-[0.9rem]">${{item.price}}</span>
                    </td>
                    <td class="text-center">
                      <span class="text-[0.9rem]">${{item.price * item.items}}</span>

                    </td>
                  </tr>
                  </tbody>

                </table>
              </div>
            </Card>
          </column>
        </row>
        <row>
          <column  col="12" md="6">
            <Card title="Invoice address" body-class="!p-2">
              <span class="text-[0.85rem] font-500 text-gray-600">
                John Brown<br>13/25 New Avenue<br>New Heaven<br>45Y 73J<br>England<br>
                <span class="text-gray-700 font-700 flex items-center gap-1">Great Britain
                  <nuxt-img src="/country/germany.svg" width="20" class="rounded-full" alt="" />
                </span>
              </span>

            </Card>
          </column>
          <column col="12" md="6">
            <Card title="Shipping address" body-class="!p-2">
              <span class="text-[0.85rem] font-500 text-gray-600">
                John Brown<br>13/25 New Avenue<br>New Heaven<br>45Y 73J<br>England<br>
                <span class="text-gray-700 font-700 flex items-center gap-1">Great Britain
                  <nuxt-img src="/country/germany.svg" width="20" class="rounded-full" alt=""/>
                </span>
              </span>
            </Card>
          </column>
        </row>

      </column>
      <column col="12" md="4">
        <Card title="Order details" body-class="!p-2">
          <ul class="flex flex-col gap-1.5">
            <li class="flex justify-between items-center text-[0.9rem] text-gray-500">
              <span>Products</span>
              <span>$148.00</span>
            </li>
            <li class="flex justify-between items-center text-[0.9rem] text-gray-500">
              <span>Shipping Fee</span>
              <span>$5.00</span>
            </li>
            <li class="flex justify-between items-center text-[0.9rem] text-gray-500">
              <span>Sales Tax</span>
              <span>$7.00</span>
            </li>
            <li class="flex justify-between items-center text-[0.9rem] text-primary-dark font-600">
              <span>Total</span>
              <span>$160.00</span>
            </li>
          </ul>

        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import {tableData5,tableData10} from "~/utils/tableData";
const {toggleFocus,show}=useNavbar()
</script>


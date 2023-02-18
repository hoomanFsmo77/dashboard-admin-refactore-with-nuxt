<template>
  <!--  /////////// type default-->
  <tr class="table-hover " v-if="type==='default'">
    <td>
      <div class="p-1 px-1.3 flex md:flex-row flex-col items-center gap-1">
        <UserProfile width="50px" height="50px" image-width="40" :src="image"/>
        <div>
          <span class="text-1 font-600">{{ name }}</span>
          <br>
          <span class="text-[0.85rem] text-gray-600">{{ email }}</span>
        </div>
      </div>
    </td>
    <td>
      <div >
        <span class="text-1 font-600">{{ companyName1 }}</span>
        <br>
        <span class="text-[0.9rem] text-gray-600">{{ companyName2 }}</span>
      </div>
    </td>
    <td>
       <span  class="category-card "
              :class="{
            'bg-yellow-300 text-yellow-700':statusClass==='yellow',
            'bg-indigo-300 text-indigo-700':statusClass==='indigo',
            'bg-red-300 text-red-700':statusClass==='red',
            'bg-green-300 text-green-700':statusClass==='green',
          }">
            <i class="bi bi-circle-fill text-0.5 mr-[0.3rem]"></i>
            <span class="text-[0.7rem]">{{ status }}</span>
          </span>
    </td>
    <td>
      <div class="flex md:flex-row flex-col items-center gap-0.5">
        <span>{{ progress }}%</span>
        <div class="progress-bar">
          <div :style="{width:progress+'%'}" class="inner  bg-indigo-700"></div>
        </div>
      </div>
    </td>
    <td>
      <div class="pl-1 relative flex md:flex-row flex-col justify-between items-center pr-1">
            <span >
            {{ date.year }}/{{ date.month }}/{{ date.day }}
           </span>

        <NavbarButton
            @show="toggleFocus($event)"
            icon="bi bi-three-dots-vertical !text-1.2 card-btn"
            badge="!w-0 !h-0"
            :active="undefined"
        />
        <Transition name="show" >
          <Dropdown v-if="show" width="160px" top="-80px">
            <li class="dropdown-hover !py-[0.45rem]">
              <NuxtLink :to="{name:'index'}" class="dropdown-card">
                <i class="bi bi-arrows-angle-expand text-0.875 text-gray-700"></i>
                <span class="text-0.875 mr-auto text-gray-700">Expand</span>
              </NuxtLink>
            </li>
            <li class="dropdown-hover !py-[0.45rem]">
              <NuxtLink :to="{name:'index'}" class="dropdown-card">
                <i class="bi bi-arrow-clockwise text-0.875 text-gray-700"></i>
                <span class="text-0.875 mr-auto text-gray-700">Reload</span>
              </NuxtLink>
            </li>
            <li class="dropdown-hover !py-[0.45rem]">
              <NuxtLink :to="{name:'index'}" class="dropdown-card">
                <i class="bi bi-trash  text-0.875 text-gray-700"></i>
                <span class="text-0.875 mr-auto text-gray-700">Remove</span>
              </NuxtLink>
            </li>
          </Dropdown>
        </Transition>
      </div>

    </td>
  </tr>

  <!--  /////////// type cms-->
  <tr class="table-hover " v-if="type==='cms'">
    <td>
      <div class="flex md:flex-row flex-col items-center gap-0.75 p-1 px-1.3" >
        <input :class="{'!hidden':!hasHead}" class="checkbox" type="checkbox">
        <NuxtLink :to="hasHead ? {name:'CMS-newPost'} :{name:''}" class="flex items-center gap-0.75 md:flex-row flex-col">
          <img v-if="image!==undefined" :src="image" width="80" class="rounded-4" alt="">
          <span class="font-700 text-0.875 ">
               {{ name }}
            </span>
        </NuxtLink>
      </div>
    </td>
    <td>
      <div class="text-left" >
        <span class="text-0.875 font-600 " :class="{'!text-1':!hasHead}">{{ hasHead ? author : `$${price}` }}</span>
      </div>
    </td>
    <td>
      <div class="text-left" >
        <span>{{ category }}</span>
      </div>
    </td>
    <td>
      <div  class="text-left">
            <span>
            {{ date.year }}/{{ date.month }}/{{ date.day }}
           </span>
      </div>
    </td>
  </tr>

  <!--  ///////// type ecommerce-->
  <tr class="table-hover even:bg-gray-100 " v-if="type==='ecommerce'">
    <td>
      <div class="flex md:flex-row flex-col items-center gap-0.75 p-1 px-1.3">
        <img v-if="image!==undefined" :src="image" width="80" class="rounded-4" alt="">
        <span class="font-700 text-0.875 ">
               {{ name }}
          </span>
      </div>
    </td>
    <td>
      <div class="text-left">
           <span>
             ${{ price }}
           </span>
      </div>
    </td>
    <td>
      <div  class="text-left">
            <span>
            {{ date.year }}/{{ date.month }}/{{ date.day }}
           </span>
      </div>
    </td>
    <td>
      <div>
        <span v-if="status" class="category-card text-0.7"
              :class="{'!bg-green-200 text-green-600':status==='hot','text-red-600 !bg-red-200':status==='Soldout','text-indigo-600 !bg-indigo-200':status==='New Arrival'}"
        >{{ status }}
        </span>
      </div>
    </td>
  </tr>

  <!--      //////// type order-->

  <tr class="table-hover " v-if="type==='order'">
    <td>
      <div  class="p-1 px-1.3 md:flex-row flex-col flex items-center gap-0.75">
        <input class="checkbox" type="checkbox">
        <span>#{{ orderId }}</span>
      </div>
    </td>
    <td>
      <div  :class="{'hover:underline cursor-pointer':hasLink}" @click="redirectToDetail">
        <span class="text-1 font-600">{{ name }}</span>
        <br>
        <span  class="text-[0.85rem] text-gray-600">{{ email }}</span>
      </div>
    </td>
    <td>
      <div  class="text-left">
            <span>
            {{ date.year }}/{{ date.month }}/{{ date.day }}
           </span>
      </div>
    </td>
    <td>
      <div class="text-left pl-0.5" >
        <span class="text-0.875  " >${{price}}</span>
      </div>
    </td>
    <td>
      <div class="text-left">
        <span class="category-card "
              :class="{
                'bg-yellow-300 text-yellow-700':statusClass==='yellow',
                'bg-indigo-300 text-indigo-700':statusClass==='indigo',
               'bg-red-300 text-red-700':statusClass==='red',
                'bg-green-300 text-green-700':statusClass==='green',
          }">
            <i class="bi bi-circle-fill text-0.5 mr-[0.3rem]"></i>
            <span class="text-[0.7rem]">{{ status }}</span>
          </span>
      </div>
    </td>
    <td>
      <div class="flex  gap-0.5">
        <i v-for="i in 5" class="bi bi-star-fill" :class="{'text-yellow-600':i < review+1}"></i>
      </div>
    </td>
  </tr>

  <!--  ////////// type category-->
  <tr class="table-hover " v-if="type==='category'">
    <td class="p-0.75">
      <div class="pl-1">
        <input  class="checkbox mr-1.3" type="checkbox">
        <span class="text-[0.9rem] text-primary-dark font-700">{{name}}</span>
      </div>
    </td>
    <td class="text-left">
      <span>{{author}}</span>
    </td>
    <td>
      <span class="text-[0.9rem] font-400 ">{{category}}</span>
    </td>
    <td class="text-right pr-1.5">
       <span class="text-blue-700">
          {{count}}
        </span>
    </td>
  </tr>

  <!--    //////// type product-->
  <tr class="table-hover" v-if="type==='product'">
    <td class=" text-[0.9rem] text-primary-dark px-1">#{{productId}}</td>
    <td >
      <NuxtLink class="flex gap-0.5 flex-col md:flex-row items-center pr-1 py-1 " :to="{name:'Ecommerce-Products_New'}">
        <img class="rounded-4" :src="image" width="80" alt="">
        <span class="text-primary-dark text-[0.9rem] font-700">{{name}}</span>
      </NuxtLink>
    </td>
    <td class="text-[0.9rem] text-center">${{price}}</td>
    <td class="text-[0.9rem] text-center">{{inStock}}</td>
    <td class="text-[0.9rem] text-gray-600 text-center">{{date.year}}/{{date.month}}/{{date.day}}</td>
    <td class="text-center">
      <span v-if="status" class="category-card !text-[0.7rem]" :class="{'!bg-green-200 text-green-600':status==='hot','text-red-600 !bg-red-200':status==='Soldout','text-indigo-600 !bg-indigo-200':status==='New Arrival'}">{{status}}</span>
    </td>
    <td >
      <div class="flex justify-between items-center px-1">
        <i class="bi bi-trash3-fill text-red-600 cursor-pointer text-1.3"></i>
        <NuxtLink :to="{name:'Ecommerce-Products_New'}">
          <i class="bi bi-pencil-square text-sky-600 cursor-pointer text-1.3"></i>
        </NuxtLink>
      </div>
    </td>
  </tr>

  <!--      /////// type customer-->

  <tr class="table-hover" v-if="type==='customer'">
    <td class="p-1">
      <div class="flex items-center">
        <input type="checkbox" class="checkbox mr-1">
        <UserProfile width="50px" height="50px" image-width="40" :src="image"/>
        <span class="ml-1 text-primary-dark font-700 text-[0.9rem] capitalize">{{name}}</span>
      </div>
    </td>
    <td>
      <span class="text-[0.9rem] ">{{city}}</span>
    </td>
    <td>
      <span class="text-[0.9rem] ">{{email}}</span>
    </td>
    <td>
      <span class="text-[0.9rem] ">{{phone}}</span>
    </td>
    <td>
       <span  class="category-card "
              :class="[$bgColor(statusClass),$textColor(statusClass)]">
            <span class="text-[0.7rem]">{{ status }}</span>
          </span>
    </td>
    <td class="text-left pl-1">
      <span class="text-[0.9rem]  ">{{orders}}</span>
    </td>
    <td>
      <span class="text-[0.9rem] ">${{price}}</span>

    </td>
  </tr>

  <!--  ////// type data-->
  <tr class="table-hover" v-if="type==='data'">
    <td class="p-1">
      <span class="text-[0.9rem] ">{{name}}</span>
    </td>
    <td>
      <span class="text-[0.9rem] ">{{company}}</span>
    </td>
    <td>
      <span class="text-[0.9rem] ">{{email}}</span>
    </td>
    <td>
      <span class="text-[0.9rem] ">{{phone}}</span>
    </td>
    <td>
      <span class="text-[0.9rem] ">{{city}}</span>

    </td>
    <td >
      <span class="text-[0.9rem] ">{{orders}}</span>

    </td>

  </tr>

</template>

<script setup lang="ts">
const {$bgColor, $textColor}=useNuxtApp()
let props = defineProps(['image', 'name', 'email', 'companyName1', 'companyName2', 'statusClass', 'status', 'progress', 'date', 'category', 'author', 'hasHead', 'price', 'orderId', 'review','count','inStock','productId','link','hasLink','type','city','orders','phone','company']);
const {show, toggleFocus} = useNavbar();
const redirectToDetail = () => {
  if(props.hasLink){
    navigateTo({name:props.link})
  }
}

</script>

<style scoped>
@tailwind components;
@layer components {
  .table-hover {
    @apply hover:bg-gray-200 transition-all;
  }

  .show-enter-active, .show-leave-active {
    @apply transition-all ease-in-out duration-300;
  }

  .show-enter-from, .show-leave-to {
    @apply opacity-0 top-[-70px];

  }

  .show-enter-to, .show-leave-from {
    @apply opacity-100 top-[-80px];
  }
}
</style>
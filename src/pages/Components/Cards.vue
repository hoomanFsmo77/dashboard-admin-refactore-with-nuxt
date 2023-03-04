<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Cards'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Cards</h1>
      </column>
    </row>
    <row>
      <column col="12" sm="6" md="3">
        <div class="card overflow-hidden relative">
          <nuxt-img :src="galleryData[0].image" class="view-box"  alt=""/>
          <div class="card-body">
            <h5 class="card-header">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button class="btn btn-primary-full btn-sm">button</button>
          </div>
        </div>
      </column>
      <column col="12" sm="6" md="3">
        <div class="card overflow-hidden relative">
          <nuxt-img    :src="galleryData[1].image" class="view-box"  alt=""/>
          <div class="card-body !pb-1">
            <h5 class="card-header">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
          <div >
            <p class="card-text !text-gray-500 px-1.5">Vice tote bag shabby chic</p>
            <div class="divider"></div>
            <p class="card-text !text-gray-500  px-1.5">Portland Etsy craft beer</p>
          </div>
          <div class="card-body flex justify-between">
            <NuxtLink to="" class="link text-[0.9rem] mr-0.5 font-500">Card link 1</NuxtLink>
            <NuxtLink to="" class="link text-[0.9rem] mr-0.5 font-500">Card link 2</NuxtLink>
          </div>
        </div>
      </column>
      <column col="12" sm="6" md="3">
        <div class="card overflow-hidden relative">
          <nuxt-img     :src="galleryData[2].image" class="view-box"  alt="" />
          <div class="p-1.5">
            <p class="card-text !my-0">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </column>
      <column col="12" sm="6" md="3">
        <div class="card overflow-hidden relative">
          <div class="card-title">
            <h5 class="card-header">Card title</h5>
            <span class="text-[0.9rem] text-gray-500 font-700">Support card subtitle</span>
          </div>
          <nuxt-img     :src="galleryData[3].image" class="view-box"  alt=""/>
          <div class="p-1.5">
            <p class="card-text !my-0">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </column>

    </row>
    <row>
      <column col="12" md="4">
        <Card title="Featured" :has-menu="!false" body-class="!p-2">
          <h5 class="card-header">
            Special title treatment
          </h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <button class="btn btn-primary-full btn-sm">go somewhere</button>
        </Card>
      </column>
      <column col="12" md="4">
        <div class="card overflow-hidden">
          <div class="card-body">
            <h5 class="card-header">
              Special title treatment
            </h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <button class="btn btn-primary btn-sm">go somewhere</button>
          </div>
          <div class="card-footer !py-1">
            <span class="capitalize text-gray-500 text-[0.9rem] font-500">2 days ago</span>
          </div>

        </div>
      </column>
      <column col="12" md="4">
        <Card title="Featured" :has-menu="!false" body-class="!p-0">
          <div class="card-body">
            <h5 class="card-header">
              Special title treatment
            </h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <button class="btn btn-dark-full btn-sm">go somewhere</button>
          </div>
          <div class="card-footer !py-1">
            <span class="capitalize text-gray-500 text-[0.9rem] font-500">2 days ago</span>
          </div>
        </Card>
      </column>

    </row>
    <row>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden relative">
          <div >
            <nuxt-img     :src="galleryData[0].image" class="view-box w-full object-cover"  alt=""/>
          </div>
          <div class="card-body">
            <h5 class="card-header">Card title</h5>
            <span class="card-sub">Support card subtitle</span>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <span class="text-gray-500 text-[0.8rem] font-500">Last updated 3 mins ago</span>
          </div>
        </div>
      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden relative">
          <div class="card-body">
            <h5 class="card-header">Card title</h5>
            <span class="card-sub">Support card subtitle</span>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <span class="text-gray-500 text-[0.8rem] font-500">Last updated 3 mins ago</span>
          </div>
          <div >
            <nuxt-img     :src="galleryData[1].image" class="view-box w-full object-cover"  alt="" />
          </div>
        </div>
      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden relative">
          <div>
            <nuxt-img     src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg" class="object-cover h-full" alt="" />
          </div>
          <div class="card-body top-0 left-0 absolute w-full h-full z-50">
            <h5 class="card-header !text-white">Card title</h5>
            <p class="card-text !text-white">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <span class=" text-[0.8rem] font-500 text-white">Last updated 3 mins ago</span>

          </div>
        </div>
      </column>
    </row>
    <row>
      <column col="12">
        <h4 class="card-header">Background variants</h4>
      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden">
          <div class="card-title bg-indigo-900 ">
            <h6 class="text-white uppercase tracking-widest ">indigo card</h6>
          </div>
          <div class="card-body bg-indigo-600">
            <h5 class="card-header !text-white">Some additional title here</h5>
            <p class="card-text !text-white">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>

        </div>

      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden">
          <div class="card-title bg-gray-900 ">
            <h6 class="text-white uppercase tracking-widest ">gray card</h6>
          </div>
          <div class="card-body bg-gray-600">
            <h5 class="card-header !text-white">Some additional title here</h5>
            <p class="card-text !text-white">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>

        </div>

      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden">
          <div class="card-title bg-green-900 ">
            <h6 class="text-white uppercase tracking-widest ">green card</h6>
          </div>
          <div class="card-body bg-green-600">
            <h5 class="card-header !text-white">Some additional title here</h5>
            <p class="card-text !text-white">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>

        </div>

      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden">
          <div class="card-title bg-red-900 ">
            <h6 class="text-white uppercase tracking-widest ">red card</h6>
          </div>
          <div class="card-body bg-red-600">
            <h5 class="card-header !text-white">Some additional title here</h5>
            <p class="card-text !text-white">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>

        </div>

      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden">
          <div class="card-title bg-orange-900 ">
            <h6 class="text-white uppercase tracking-widest ">orange card</h6>
          </div>
          <div class="card-body bg-orange-600">
            <h5 class="card-header !text-white">Some additional title here</h5>
            <p class="card-text !text-white">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>

        </div>

      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden">
          <div class="card-title bg-sky-900 ">
            <h6 class="text-white uppercase tracking-widest ">sky card</h6>
          </div>
          <div class="card-body bg-sky-600">
            <h5 class="card-header !text-white">Some additional title here</h5>
            <p class="card-text !text-white">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>

        </div>

      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden">
          <div class="card-title bg-gray-400 ">
            <h6 class=" uppercase tracking-widest ">light card</h6>
          </div>
          <div class="card-body bg-white">
            <h5 class="card-header ">Some additional title here</h5>
            <p class="card-text ">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>

        </div>

      </column>
      <column col="12" sm="6" md="4">
        <div class="card overflow-hidden">
          <div class="card-title bg-[#222] ">
            <h6 class=" uppercase tracking-widest !text-white">dark card</h6>
          </div>
          <div class="card-body bg-primary-dark">
            <h5 class="card-header !text-white">Some additional title here</h5>
            <p class="card-text !text-white">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>

        </div>

      </column>
    </row>
    <row>
      <column col="12">
        <h4 class="card-header">Groups</h4>
      </column>
      <column col="12" class="flex">
        <div class="card w-full !rounded-r-[0px]">
          <div>
            <nuxt-img   class="w-full" :src="galleryData[0].image" alt="" />
          </div>
          <div class="card-body">
            <h5 class="card-header">Card title</h5>
            <span class="card-sub">Support card subtitle</span>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <span class="text-gray-500 text-[0.8rem] font-500">Last updated 3 mins ago</span>
          </div>
        </div>
        <div class="card w-full !rounded-r-[0px] !rounded-l-[0px]">
          <div>
            <nuxt-img    class="w-full" :src="galleryData[1].image" alt="" />
          </div>
          <div class="card-body">
            <h5 class="card-header">Card title</h5>
            <span class="card-sub">Support card subtitle</span>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <span class="text-gray-500 text-[0.8rem] font-500">Last updated 3 mins ago</span>
          </div>
        </div>
        <div class="card w-full !rounded-l-[0px]">
          <div >
            <nuxt-img     class="w-full h-full" :src="galleryData[3].image" alt="" />
          </div>
          <div class="card-body">
            <h5 class="card-header">Card title</h5>
            <span class="card-sub">Support card subtitle</span>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <span class="text-gray-500 text-[0.8rem] font-500">Last updated 3 mins ago</span>
          </div>
        </div>


      </column>
    </row>
    <row>
      <column col="12">
        <h4 class="card-header">Navigation</h4>
      </column>
      <column col="12" sm="6">
        <CardTab  :list="['Tab1','Tab2','Tab3']">
          <template v-slot:Tab1>
            <h5 class="card-header text-center">Special title treatment 1</h5>
            <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
            <button class="btn btn-primary-full ">go somewhere</button>
          </template>
          <template v-slot:Tab2>
            <h5 class="card-header text-center">Special title treatment 2</h5>
            <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
            <button class="btn btn-primary-full ">go somewhere</button>
          </template>
          <template v-slot:Tab3>
            <h5 class="card-header text-center">Special title treatment 3</h5>
            <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
            <button class="btn btn-primary-full ">go somewhere</button>
          </template>
        </CardTab>
      </column>
      <column col="12" sm="6">
        <CardTab form="button" :list="['Tab1','Tab2','Tab3']">
          <template v-slot:Tab1>
            <h5 class="card-header text-center">Special title treatment 1</h5>
            <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
            <button class="btn btn-gray-full ">go somewhere</button>
          </template>
          <template v-slot:Tab2>
            <h5 class="card-header text-center">Special title treatment 2</h5>
            <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
            <button class="btn btn-gray-full ">go somewhere</button>
          </template>
          <template v-slot:Tab3>
            <h5 class="card-header text-center">Special title treatment 3</h5>
            <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
            <button class="btn btn-gray-full ">go somewhere</button>
          </template>
        </CardTab>



      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import {galleryData} from "~/utils/extraData";

</script>


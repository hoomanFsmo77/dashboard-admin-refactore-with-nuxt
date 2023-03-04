<template>
  <div class="container-fluid">
    <row class="items-center">
      <column col="6">
        <h1 class="text-primary-dark uppercase tracking-widest">Media library</h1>
      </column>
      <column col="6" class="flex justify-end">
        <button @click="toggleUploader" class="btn-primary-full btn uppercase">
          <i class="bi bi-plus-lg"></i>
          add new
        </button>
      </column>
    </row>
    <Transition name="slide">
      <row  v-if="show" class="overflow-hidden">
        <column col="12" @dragover.prevent >
          <div  class="card !shadow-[0_1px_8px_rgba(0,0,0,0.15)] relative !bg-transparent p-2 cursor-pointer text-center overflow-hidden" ref="uploadSection">
            <div v-if="files.length===0">
              <span class="text-[0.9rem]">Drop files here or click to upload.</span>
              <span class="text-[0.9rem] my-1 block">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
            </div>
            <div v-else>
              <ul class="flex flex-col md:flex-row gap-1 flex-wrap">
                <li v-for="(item,index) in files" class="dz-main group">
                  <div class="relative z-10 w-[130px] h-[130px] ">
                    <nuxt-img  provider="cloudinary"   v-if="item.type.includes('image')" :src="item.data" class="dz-image"  alt=""/>
                    <nuxt-img  provider="cloudinary"   v-else src="https://res.cloudinary.com/dhpxutwun/image/upload/v1677917538/dashboard/app_njinwp.svg" class="dz-image" alt=""/>
                  </div>
                  <div class="dz-detail ">
                    <span><strong>{{item.size}}</strong> MB</span>
                    <span class="block my-0.5">{{item.name}}</span>
                    <i class="bi bi-x-lg" @click="removeItem(index)"></i>
                  </div>
                  <div class="dz-loader">
                    <div class="progress-bar progress-bar-big">
                      <div :ref="loader" class="inner bg-indigo-700 transition-all"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <input @change="uploadFileHandler($event)" type="file" class="file">
          </div>
        </column>
      </row>
    </Transition>
    <row>
      <column col="12">
        <div class="card p-2 flex md:flex-row md:gap-0 gap-1 flex-col justify-between items-center">
          <div class="flex gap-1">
            <FormSelect value="All media items" :opt="['All media items','images','audio','video','documents','spreadsheets','archives','unattached','mine']"/>
            <FormSelect value="All dates" :opt="['All dates','january 2022','february 2022','december 2022','november 2022','september 2022','august 2022']"/>
          </div>
          <div class="flex items-center gap-0.5">
            <span class="text-0.875 text-gray-700">Search</span>
            <FormInput placeholder="Fulltext search"/>
          </div>
        </div>
      </column>
    </row>
    <row>

      <client-only>
        <photo-provider>
          <column v-for="(item,index) in galleryData" col="6" sm="6" lg="3" xlg="2" md="4">
            <photo-consumer  :intro="item.name" :key="index" :src="item.image">
              <div class="card overflow-hidden relative">
                <nuxt-img    :src="item.image" class="view-box"  alt=""/>
                <div class="py-0.5 px-0.75">
                  <span class="text-0.875 text-gray-600 ">{{item.name}}</span>
                </div>
                <NuxtLink :to="{name:'CMS-Medialibrary'}" class="link-stretch"></NuxtLink>
              </div>

            </photo-consumer>
          </column>
        </photo-provider>
      </client-only>
    </row>
  </div>
</template>

<script setup lang="ts">
import {galleryData} from "~/utils/extraData";
const {show,toggleUploader,uploadSection,height,uploadFileHandler,files,removeItem,loader}=useUploader()
</script>
<style scoped lang="scss">
.slide-enter-active,.slide-leave-active{
  @apply transition-all duration-[350ms] ease-linear;
}
.slide-enter-from,.slide-leave-to{
  @apply h-0;
}
.slide-enter-to,.slide-leave-from{
  height: v-bind(height);
}


</style>
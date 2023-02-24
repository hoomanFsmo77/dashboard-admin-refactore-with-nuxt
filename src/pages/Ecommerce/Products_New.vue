<template>
  <div class="container-fluid">
    <row>
      <column col="12">
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'products',link:'Ecommerce-Products'},{name:'Edit product'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Edit Products</h1>
        <div class="flex gap-1">
          <NuxtLink to="#" class="text-[0.8rem] text-gray-500 hover:underline">
            <font-awesome-icon icon="fa-solid fa-print"></font-awesome-icon>
            Print
          </NuxtLink>
          <NuxtLink to="#" class="text-[0.8rem] text-gray-500 hover:underline">
            <font-awesome-icon icon="fa-solid fa-download"></font-awesome-icon>
            Export
          </NuxtLink>
        </div>
      </column>
    </row>
    <row>
      <column col="12" md="8">
        <div class="card p-2">
          <div>
            <FormInput  placeholder="Title" class="w-full" label="Title"/>
          </div>
          <button class="btn-primary btn my-1.3">Add Media</button>
          <div id="editor">
            <Editor
                :value="text"
                height="1150px"
            />
          </div>
        </div>
        <Card class="!my-2" :has-menu="true" body-class="!py-1 !px-2" title="Prices & Stock">
          <row class="!my-0.5">
            <column col="12">
              <div>
                <FormInput id="price" icon="bi bi-currency-dollar" class="w-full" label="Main Price"/>
              </div>
            </column>
            <column col="12" md="6" >
              <div class="flex items-center justify-between">
                <label for="r-price" class="block mb-0.5 text-gray-700 font-500 text-[0.85rem]">Regular Price
                </label>
                <input type="checkbox" class="input-toggle">
              </div>

              <FormInput class="w-full" id="r-price" icon="bi bi-currency-dollar"/>
            </column>
            <column col="12" md="6">
              <div class="flex items-center justify-between">
                <label for="d-price" class="block mb-0.5 text-gray-700 font-500 text-[0.85rem]">Discounted Price
                </label>
                <input type="checkbox" class="input-toggle">
              </div>

              <FormInput  class="w-full" id="d-price" icon="bi bi-currency-dollar"/>
            </column>
            <div class="divider !h-[1px] my-1"></div>
            <column col="12">
              <div>
                <FormInput  id="item"  class="w-full" label="Items in stock"/>
              </div>
            </column>
          </row>
        </Card>
        <Card class="!my-2" :has-menu="true" body-class="!py-1 !px-2" title="Images">
          <row>
            <client-only>
              <photo-provider>
                <column v-for="(item,index) in galleryData.slice(0,7)" col="6"  md="4">
                  <photo-consumer  :intro="item.name" :key="index" :src="item.image">
                    <div class="card overflow-hidden relative cursor-pointer group">
                      <img :src="item.image" class="view-box"  alt="">
                      <div class="p-0.75 relative">
                        <span class="text-[0.8rem] text-gray-600 ">{{item.name}} das dad ad adas</span>
                        <span class="icon-wrapper absolute opacity-0 invisible transition group-hover:opacity-100 group-hover:visible top-[33%] right-[8px]">
                          <i class="bi bi-trash3-fill"></i>
                      </span>
                      </div>
                    </div>
                  </photo-consumer>
                </column>
              </photo-provider>
            </client-only>

          </row>
          <row>
            <column col="12">
              <div  class="card  !shadow-[0_1px_8px_rgba(0,0,0,0.15)] relative !bg-transparent p-2 cursor-pointer text-center overflow-hidden" ref="uploadSection">
                <div v-if="files.length===0">
                  <span class="text-[0.9rem]">Drop files here or click to upload.</span>
                  <span class="text-[0.9rem] my-1 block">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
                </div>
                <div v-else>
                  <ul class="flex flex-col md:flex-row gap-1 flex-wrap">
                    <li v-for="(item,index) in files" class="dz-main group">
                      <div class="relative z-10 w-[130px] h-[130px] ">
                        <img v-if="item.type.includes('image')" :src="item.data" class="dz-image"  alt="">
                        <img v-else src="/app.svg" class="dz-image" alt="">
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
        </Card>

      </column>
      <column col="12" md="4">
        <Card :has-menu="true" title="Publish" body-class="!pt-2 !px-0">
          <div class="px-2 pb-2">
            <div class="flex justify-between items-center">
              <button class="btn btn-gray btn-sm-2">Save Draft</button>
              <button class="btn btn-gray btn-sm-2">Preview</button>
            </div>
            <div class="divider !my-1.5"></div>
            <ul class="flex flex-col gap-1.2">
              <li>
                <div>
                   <span class="text-gray-700 font-400 text-[0.9rem]">
                    Status: <span class="font-700">{{status}}</span>
                     <button class="link cursor-pointer ml-0.65 text-[0.8rem]" @click="openSection($event)">Edit</button>
                  </span>
                </div>
                <div class="h-0 overflow-hidden ">
                  <FormSelect @input="setValue($event)" v-model="status" class="w-full my-0.5" value="Draft" :opt="['Pending','Pending Review','Draft']"/>
                </div>

              </li>
              <li>
                <div>
                   <span class="text-gray-700 font-400 text-[0.9rem]">
                    Visibility: <span class="font-700">{{visibility}}</span>
                     <button class="link cursor-pointer ml-0.65 text-[0.8rem]" @click="openSection($event)">Edit</button>
                  </span>
                </div>
                <div class="h-0 overflow-hidden ">
                  <div class="flex items-center gap-0.5 my-0.5">
                    <input v-model="visibility" value="Public" id="public" class="radio" type="radio">
                    <label class="text-[0.9rem] text-gray-700" for="public">Public</label>
                  </div>
                  <div class="flex items-center gap-0.5 my-0.5">
                    <input v-model="visibility" value="Password" id="Password" class="radio" type="radio">
                    <label class="text-[0.9rem] text-gray-700" for="Password">Password Protected</label>
                  </div>
                  <div class="flex items-center gap-0.5 my-0.5">
                    <input v-model="visibility" value="Private" id="Private" class="radio" type="radio">
                    <label class="text-[0.9rem] text-gray-700" for="Private">Private</label>
                  </div>
                </div>

              </li>
              <li>
                <div>
                   <span class="text-gray-700 font-400 text-[0.9rem]">
                    Publish: <span class="font-700">immediately </span>
                     <button class="link cursor-pointer ml-0.65 text-[0.8rem]" @click="openSection($event)">Edit</button>
                  </span>
                </div>
                <div class="h-0 overflow-hidden ">
                  <div class="flex items-center gap-0.5 my-0.5">
                    <client-only>
                      <Datapicker class="w-[50%] text-[0.8rem]" :single="true"/>
                    </client-only>

                    at
                    <input type="text" class="input w-[15%] text-[0.8rem] text-center" value="8" >
                    :
                    <input type="text" class="input w-[15%] text-[0.8rem] text-center" value="0">


                  </div>
                </div>

              </li>
            </ul>
          </div>

          <div class="card-footer !py-1 text-right">
            <button class="btn btn-primary-full  ">Publish</button>
          </div>
        </Card>
        <Card :has-menu="true" title="Categorization" class="my-2" body-class="!p-2 flex flex-col gap-1 items-center justify-center">
          <div class="w-full">
            <FormSelect id="category" class="w-full !text-[0.9rem]" label="Category" value="Gear" :opt="['Gear','Stories','Tips & Tricks','Trips','Uncategorized']"/>
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="w-full">
            <FormSelect id="Brands" class="w-full !text-[0.9rem]" label="Brands" value="lorem" :opt="['lorem','lorem ipsum 1','lorem ipsum 2','lorem ipsum 3','lorem ipsum 4','lorem ipsum 5']"/>
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="w-full">
            <FormSelect id="Collection" class="w-full !text-[0.9rem]" label="Collection" value="Not Set" :opt="['Not Set','lorem ipsum 1','lorem ipsum 2','lorem ipsum 3','lorem ipsum 4','lorem ipsum 5']"/>
          </div>
          <div class="divider !h-[1px]"></div>
          <div>
            <span class="block mb-0.5 text-gray-700 font-500 text-[0.9rem]">Tags</span>
            <div class="border-[1px] border-gray-300 bg-gray-100 rounded-2 px-1 py-0.5 w-full relative min-h-[100px]">
              <ul class="flex flex-wrap gap-0.25">
                <li v-for="(tag,index) in tags" class="tag">
                  {{tag}}
                  <span class="text-primary-dark">|</span>
                  <i class="bi bi-x cursor-pointer" @click="removeTag(index)"></i>
                </li>
                <input ref="tagInput" v-model="input" @blur="closeHint" @keyup="increaseWidth($event)" @keyup.enter="addTag" style="min-width: 1ch;width: 2ch" type="text" class="max-w-full  border-none outline-none bg-transparent">
              </ul>
              <div v-if="showHint" class="user-hint absolute top-[102%] bg-[#fff] border-b-[1px] border-r-[1px] border-l-[1px] border-gray-600 left-0 w-full p-0.5">
                  <span class="text-[0.9rem]">
                    Press Enter to add "{{input}}"
                  </span>
              </div>
            </div>
          </div>

        </Card>
        <Card class="my-2" :has-menu="true" title="format" body-class="!p-2">
          <ul class="flex flex-col gap-0.5">
            <li class="flex gap-0.5 items-center" v-for="item in ['standard','aside','image','video','quote','link']">
              <input name="format" type="radio" class="radio" :id="item">
              <label class="text-[0.9rem] text-primary-dark] capitalize" :for="item">{{item}}</label>
            </li>
          </ul>
        </Card>
      </column>
    </row>

  </div>
</template>

<script setup lang="ts">
import {text} from "~/utils/extraData";
import {galleryData} from "~/utils/extraData";
const {closeHint,removeTag,addTag,increaseWidth,setValue,openSection,date,show,visibility,status,showHint,tagInput,input,tags}=usePost()
const {uploadSection,height,uploadFileHandler,files,removeItem,loader}=useUploader()


</script>

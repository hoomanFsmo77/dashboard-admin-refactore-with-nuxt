<template>
  <div class="container-fluid">
    <h1 class="text-primary-dark uppercase tracking-widest">Add new post</h1>
    <row>
      <column col="12" md="8">
        <div class="card p-2">
          <div>
            <FormInput placeholder="Title" class="w-full" label="Title"/>
          </div>
          <button class="btn-primary btn my-1.3">Add Media</button>
          <div id="editor">
            <Editor
                :value="text"
                height="1150px"
            />
          </div>
        </div>

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
                      <Datapicker :single="true" class="w-[50%] !text-[0.8rem]"/>
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
        <Card class="my-1.3" :has-menu="true" title="format" body-class="!p-2">
          <ul class="flex flex-col gap-0.5">
            <li class="flex gap-0.5 items-center" v-for="item in ['standard','aside','image','video','quote','link']">
              <input name="format" type="radio" class="radio" :id="item">
              <label class="text-[0.9rem] text-primary-dark] capitalize" :for="item">{{item}}</label>
            </li>
          </ul>
        </Card>
        <Card class="my-1.3" :has-menu="true" title="Categories" body-class="!p-2">
          <ul class="flex flex-col gap-0.5">
            <li class="flex gap-0.5 items-center" v-for="(item,index) in ['gear','stories','tips & Tricks','trips','Uncategorized']">
              <input type="checkbox" class="checkbox" :checked="index===1 || index===2 || index===3" :id="item">
              <label class="text-[0.9rem] text-primary-dark] capitalize" :for="item">{{item}}</label>
            </li>
          </ul>
          <div class="mt-1.2 text-center">
            <NuxtLink :to="{name:'CMS-newPost'}" class="link">
              + Add New Post
            </NuxtLink>
          </div>
        </Card>
        <Card class="my-1.3" :has-menu="true" title="Tags" body-class="!p-2 flex flex-wrap gap-0.5">
          <div class="border-[1px] border-gray-300 bg-gray-100 px-1 py-0.5 w-full relative min-h-[100px]">
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

        </Card>
      </column>
    </row>

  </div>
</template>

<script setup lang="ts">
import {text} from "~/utils/extraData";
const {closeHint,removeTag,addTag,increaseWidth,setValue,openSection,date,show,visibility,status,showHint,tagInput,input,tags}=usePost()

</script>

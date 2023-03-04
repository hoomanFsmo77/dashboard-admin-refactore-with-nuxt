<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Knowledge Base'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Knowledge Base</h1>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <p class="text-[0.9rem] font-500 text-primary-dark">
          One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
        </p>
        <div class="mt-1">
          <FormInputGroup class="text-[0.9rem] !w-[80%]" icon="bi bi-search" placeholder="Search Something ..." type="outline"/>
        </div>
      </column>
    </row>
    <row class="!my-3">
      <column v-for="(item,index) in infoData"  :key="index" col="12" md="4">
        <CardInfo :icon="item.icon" :theme="item.theme" :title="item.title" :description="item.description" />
      </column>
    </row>
  </div>
  <row class="!bg-white !mb-0">
    <div class="container-fluid">
      <column col="12" >
        <div class="flex justify-between items-center">
          <div>
            <h6 class="text-blue-600 uppercase tracking-widest font-500">What do you need to know?</h6>
            <h3 class="text-primary-dark font-800 mt-0.5">Choose Your Topic</h3>
          </div>
          <NuxtLink class="text-gray-500 hover:underline text-[0.8rem]" to="">
            See all topics
            <i class="bi bi-chevron-double-right text-0.625 ml-0.25"></i>
          </NuxtLink>
        </div>
        <row>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">12</span>
              <NuxtLink class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'Pages-knowledgeBase_Topic'}">
                Introduction
              </NuxtLink>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum </NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor lorem</NuxtLink></li>

            </ul>


          </column>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">5</span>
              <NuxtLink class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'Pages-knowledgeBase_Topic'}">
                Usage
              </NuxtLink>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor lorem</NuxtLink></li>

            </ul>
          </column>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">7</span>
              <NuxtLink class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'Pages-knowledgeBase_Topic'}">
                Renting
              </NuxtLink>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consetur adiicing elit.</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum</NuxtLink></li>

            </ul>
          </column>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">4</span>
              <NuxtLink class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'Pages-knowledgeBase_Topic'}">
                Fees
              </NuxtLink>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consetur adiicing elit.</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum</NuxtLink></li>

            </ul>
          </column>
          <column col="12" md="4">
            <div class="flex gap-1 items-center">
              <span class="bg-primary-indigo/20 px-0.5 py-0.25 text-[0.9rem] text-primary-indigo font-500 rounded-4">5</span>
              <NuxtLink class="h5 font-700 text-primary-dark hover:underline cursor-pointer" :to="{name:'Pages-knowledgeBase_Topic'}">
                Others
              </NuxtLink>
            </div>
            <ul class="pl-1 mt-1.5 flex flex-col gap-0.5">
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet.</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum dolor sit amet, consetur adiicing elit.</NuxtLink></li>
              <li class="flex gap-0.5 items-center text-gray-500 font-500 text-[0.83rem]"><i class="bi bi-file-text"></i><NuxtLink class="hover:underline" :to="{name:'Pages-knowledgeBase_Topic'}">Lorem ipsum</NuxtLink></li>

            </ul>
          </column>
        </row>

      </column>
    </div>
  </row>
  <div class="container-fluid !bg-[#e9ecef]">
    <row>
      <column col="12" md="8" class="mx-auto">
        <h6 class="text-center uppercase tracking-widest text-blue-600 font-600">Get Support From Real People</h6>
        <p class="text-center text-[0.9rem] my-1.5 text-gray-500">
          Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
        </p>
        <div class="flex gap-0.5 items-center justify-center flex-wrap">
          <UserProfile :isCloud="true"  v-for="item in contactData.slice(0,5)"  class="overflow-hidden transition-all hover:translate-y-[-5px]" height="80px" width="80px" :src="item.image" img-class="object-cover rounded-full h-[88%]" image-width="70"/>
        </div>
      </column>
    </row>
  </div>
  <row class="!bg-white !mt-0">
    <column col="12" sm="8" md="6" class="mx-auto">
      <div class="container-fluid">
        <div class="card relative md:top-[-95px] top-[-50px]">
          <div class="card-title !py-1 flex items-center justify-between">
            <div>
              <span class="text-blue-600 uppercase tracking-widest font-500 text-[0.8rem]">Drop Us a Line</span>
              <h4 class="font-700 text-primary-dark mt-0.5">Contact</h4>
            </div>
            <i class="bi bi-pen text-3 text-blue-600"></i>
          </div>
          <div class="p-1.5">
            <p class="text-[0.9rem] font-500 text-gray-500">He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
          </div>
          <div class="card-footer !py-1">
            <button class="btn btn-primary btn-sm ">Let us know</button>
          </div>
        </div>

      </div>
    </column>
  </row>
</template>

<script setup lang="ts">
import {infoData,contactData} from "~/utils/stateData";
</script>


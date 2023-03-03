<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Multiple files upload'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Multiple files upload</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Multiple files upload" :has-menu="!false" body-class="!p-2">
          <p class="article">
            A custom component for uploading files.
          </p>
          <CodeExample class="my-1" :value="codeEditorValue12"/>
          <row   class="overflow-hidden">
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
                        <img v-if="item.type.includes('image')" :src="item.data" class="dz-image"  alt="">
                        <img v-else src="../../../assets/app.svg" class="dz-image" alt="">
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
    </row>
  </div>
</template>

<script setup lang="ts">
import {codeEditorValue12} from "~/utils/extraData";
const {show,uploadSection,height,uploadFileHandler,files,removeItem,loader}=useUploader()
</script>

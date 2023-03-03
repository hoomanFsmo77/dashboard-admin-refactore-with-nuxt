<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Advanced Forms'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Advanced Forms</h1>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <row class="!pt-0 !mt-0">
          <column class="!pt-0 !mt-0" col="12">
            <Card title="vue form" :has-menu="!false" body-class="!p-2">
              <p class="article">
                Vue-form is a lightweight range slider with multi-touch support and a ton of features. It supports non-linear ranges, requires no external dependencies, has keyboard support, and it works great in responsive designs.
              </p>
              <p class="article">
                Read more about this component at <a class="link font-500" href="https://github.com/vueform/slider">https://github.com/vueform/slider</a>
              </p>
              <CodeExample :value="codeEditorValue10" class="mt-1"/>
              <div class="my-3.5">
                <FormRange :min="0" shadow="rgba(79,70,229,0.3)" color="rgba(79,70,229,0.9)" :max="100" :value="[20,80]" format="00.00"/>
              </div>
              <div class="mb-3.5">
                <FormRange color="#333" shadow="rgba(0,0,0,0.1)" :min="0" :max="100" :value="[20,30,80]"  format="$"/>
              </div>
              <div class="flex justify-center">
                <FormRange color="rgba(34,197,94,0.9)" shadow="rgba(34,197,94,0.3)" :min="0" :max="100" :value="[20]"  format="$" orientation="vertical"/>
              </div>
            </Card>
          </column>
          <column col="12">
            <Card title="Choices.js" :has-menu="!false" body-class="!p-2">
              <p class="article">
                A vanilla, lightweight, configurable select box/text input plugin. Similar to Select2 and Selectize but without the jQuery dependency.
              </p>
              <p class="article">
                Read more about Choices.js at <a href="https://github.com/jshjohnson/Choices" class="link font-500">https://github.com/jshjohnson/Choices</a>.
              </p>
              <CodeExample :value="codeEditorValue10" class="mb-1"/>
              <div class="flex gap-1">
                <span class="text-[0.9rem] text-gray-600">Select with search field</span>
                <client-only>
                  <FormChoices  :opt="options" :searchSelect="true"/>
                </client-only>
              </div>
              <div class="flex gap-1.5 my-2">
                <span class="text-[0.9rem] text-gray-600">Text Tags</span>
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
              <div class="flex gap-1">
                <span class="text-[0.9rem] text-gray-600">Select displayed as tags - multiple choice</span>
                <client-only>
                  <FormChoices  :opt="options" :tag="true"/>
                </client-only>
              </div>
            </Card>
          </column>
        </row>
      </column>
      <column col="12" md="6">
        <Card title="Datepicker" :has-menu="!false" body-class="!p-2">
          <p class="article">
            An elegant calendar and datepicker plugin for Vuejs.
          </p>
          <p class="article">
            Read more about this component at <a class="link font-500" href="https://vcalendar.io/">https://vcalendar.io/</a>
          </p>
          <CodeExample :value="codeEditorValue11" class="mt-1"/>
          <div class="my-1">
            <span class="block text-[0.9rem] text-gray-600 my-0.5">Variant 1 - Date</span>
            <client-only><Datapicker :single="true"/></client-only>
          </div>
          <div class="my-1">
            <span class="block text-[0.9rem] text-gray-600 my-0.5">Variant 2 - Multiple dates</span>
           <client-only> <Datapicker :multiple="true"/></client-only>
          </div>
          <div class="my-1">
            <span class="block text-[0.9rem] text-gray-600 my-0.5">Variant 3 - DateRange</span>
            <client-only>
              <Datapicker :is-range="true"/>
            </client-only>
          </div>
        </Card>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="imask Input maps" :has-menu="!false" body-class="!p-2">
          <p class="article">
            Input masks can be used to force the user to enter data conform a specific format. Unlike validation, the user can't enter any other key than the ones specified by the mask.
          </p>
          <p class="article">
            Read more about imask at <a class="link font-500" href="https://imask.js.org/">https://imask.js.org/</a> & vue wrapper
            <a class="link font-500" href="https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask">https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask</a>
          </p>
          <CodeExample :value="codeEditorValue10" class="my-1"/>
          <row>
            <column col="12" md="6">
              <FormInput  class="w-full" pattern="000-00-000-0000-0" label="ISBN 1" id="ISBN1" hint="e.g '999-99-999-9999-9'"/>
            </column>
            <column col="12" md="6">
              <FormInput  class="w-full" pattern="00-000000" label="tax id" id="tax" hint="99-123456"/>
            </column>
          </row>
          <row>
            <column col="12" md="6">
              <FormInput  class="w-full" pattern="000 00 000 0000 0" label="ISBN 2" id="ISBN2" hint="999 99 999 9999 9"/>
            </column>
            <column col="12" md="6">
              <FormInput  class="w-full" pattern="{+1}-000-000-0000" label="phone" id="phone" hint="+1-907-555-0165"/>
            </column>
          </row>
          <row>
            <column col="12" md="6">
              <FormInput  class="w-full" pattern="000/00/000/0000/0" label="ISBN 3" id="ISBN3" hint="999/99/999/9999/9"/>
            </column>
            <column col="12" md="6">
              <FormInput  class="w-full" pattern="{$} 000,000" label="currency" id="currency" hint="999,999,999.99"/>
            </column>
          </row>
          <row>
            <column col="12" md="6">
              <FormInput  class="w-full" pattern="000.000.000.000" label="ipv4" id="ipv4" hint="192.168.110.310"/>
            </column>
            <column col="12" md="6">
              <FormInput  class="w-full" pattern="0000-00-00" label="date" id="date" hint="1980-06-22"/>
            </column>
          </row>
        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import {codeEditorValue10,codeEditorValue11} from "~/utils/extraData";
const {closeHint,removeTag,addTag,increaseWidth,setValue,openSection,date,show,visibility,status,showHint,tagInput,input,tags}=usePost()
const options=[
  {
    value: "mustard",
    label: "Mustard",
  },
  {
    value: "ketchup",
    label: "Ketchup",
  },
  {
    value: "relish",
    label: "Relish",
  },
]

</script>

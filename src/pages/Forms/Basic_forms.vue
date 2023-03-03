<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Forms'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Forms</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="formik" body-class="!p-2" :has-menu="false">
          <p class="article">
            The theme has integrated excellent Formik plugin for easy validation and onChange events input handling. Please visit <a class="link text-[0.9rem] font-500" href="https://formkit.com/getting-started/installation">Formik documentation</a> for more info
          </p>
          <CodeExample class="mb-1" :value="codeEditorValue7"/>

        </Card>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <Card title="basic form" :has-menu="false" body-class="!p-2">
          <p class="article">Lorem ipsum dolor sit amet consectetur.</p>
          <form @submit.prevent action="">
            <div>
              <FormInput  v-model="form.basicEmail" id="basicEmail" class="text-[0.9rem] !py-[0.35rem] w-full" label-class="!uppercase tracking-widest " label="Email" placeholder="Email Address"/>
            </div>
            <div class="my-1">
              <FormInput  type="password" v-model="form.basicPassword" id="basicPassword" class="text-[0.9rem] !py-[0.35rem] w-full" label-class="!uppercase tracking-widest " label="password" placeholder="password"/>
            </div>
            <button type="submit" @click="showInfo(form.basicEmail,form.basicPassword)"  class="btn btn-sm btn-primary-full">log in</button>
          </form>
        </Card>
      </column>
      <column col="12" md="6">
        <Card title="Horizontal form" :has-menu="false" body-class="!p-2">
          <p class="article">Lorem ipsum dolor sit amet consectetur.</p>
          <form @submit.prevent>
            <div>
              <FormInput  v-model="form.horizontalEmail" id="horizontalEmail" class="text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto" label-class="!uppercase tracking-widest " hint="Example help text that remains unchanged." form="horizontal" label="Email" placeholder="Email Address"/>
            </div>
            <div class="my-1">
              <FormInput  type="password" v-model="form.horizontalPassword" id="horizontalPassword" class="text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto" label-class="!uppercase tracking-widest " hint="Example help text that remains unchanged." form="horizontal" label="password" placeholder="password"/>
            </div>
            <button type="submit" @click="showInfo(form.horizontalEmail,form.horizontalPassword)" class="btn btn-sm btn-primary-full">sign in</button>
          </form>
        </Card>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <Card title="Inputs with floating labels" :has-menu="false" body-class="!p-2">
          <form @submit.prevent >
            <FormInput  v-model="form.floatEmail" label-class="!uppercase tracking-widest !text-[0.8rem]" id="email" class="mt-0.5 mb-1 w-full" label="Email address"  form="float"/>
            <FormInput  v-model="form.floatPassword" label-class="!uppercase tracking-widest !text-[0.8rem]" id="password" label="Password" type="password"  form="float"/>
            <button type="submit" @click="showInfo(form.floatEmail,form.floatPassword)" class="btn btn-sm btn-primary mt-1">submit</button>
          </form>
        </Card>
      </column>
      <column col="12" md="6">
        <Card title="Modal Form" :has-menu="false" body-class="!p-2">
          <button @click="modalFlag=!modalFlag" class="btn btn-sm btn-primary-full">form in a simple modal</button>
          <Teleport to="body">
            <Modal v-model="modalFlag" >
              <template v-slot:header>
                <h5 class="card-header uppercase tracking-widest">signing modal</h5>
              </template>
              <template v-slot:body>
                <p class="article">Lorem ipsum dolor sit amet consectetur.</p>
                <form @submit.prevent action="">
                  <div>
                    <FormInput  v-model="form.modalEmail" id="modalEmail" class="text-[0.9rem] !py-[0.35rem] w-full" label-class="!uppercase tracking-widest " label="Email" placeholder="Email Address"/>
                  </div>
                  <div class="my-1">
                    <FormInput  type="password" v-model="form.modalPassword" id="modalPassword" class="text-[0.9rem] !py-[0.35rem] w-full" label-class="!uppercase tracking-widest " label="password" placeholder="password"/>
                  </div>
                </form>
              </template>
              <template v-slot:footer>
                <button type="submit" @click="modalFlag=false"  class="btn btn-sm btn-gray-full mr-1">close</button>
                <button type="submit" @click="showInfo(form.modalEmail,form.modalPassword)"  class="btn btn-sm btn-primary-full">save changes</button>
              </template>
            </Modal>
          </Teleport>
        </Card>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="All form elements" :has-menu="false" body-class="!p-2">
          <div class="my-1.5">
            <FormInput  v-model="form.normal" id="normal" class="text-[0.9rem]  !py-[0.35rem] w-[72%] ml-auto"   form="horizontal" label="normal" />
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2">
            <FormInput  v-model="form.helpText" id="help" class="text-[0.9rem]  !py-[0.35rem] w-[72%] ml-auto" hint="A block of help text that breaks onto a new line and may extend beyond one line."  form="horizontal" label="help text" />
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2">
            <FormInput  v-model="form.passwordExample" id="passwordExample" class="text-[0.9rem]  !py-[0.35rem] w-[72%] ml-auto" type="password" form="horizontal" label="password" />
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2">
            <FormInput  v-model="form.placeholder" id="placeholder" class="text-[0.9rem]  !py-[0.35rem] w-[72%] ml-auto"  form="horizontal" label="placeholder" placeholder="Placeholder" />
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="flex my-2">
            <span class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize">Ranges</span>
            <div class="w-[72%] ml-auto">
              <label for="range" class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize">Example range</label>
              <input id="range" type="range" class="range w-full">
            </div>
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2">
            <FormInput  id="disabled" class="text-[0.9rem]  !py-[0.35rem] w-[72%] ml-auto"  form="horizontal" label="disabled" placeholder="disabled input here" :disabled="true" />
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2 flex">
            <span class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize">Checkboxes & radios</span>
            <div class="w-[72%] ml-auto">
              <div class="flex items-center gap-0.5">
                <input v-model="form.customCheck" id="checkbox" type="checkbox" class="checkbox">
                <label for="checkbox" class="block  text-gray-700 font-500 text-[0.9rem] capitalize">Check this custom checkbox</label>
              </div>
              <div class="flex items-center gap-0.5 mt-1.5 mb-0.5">
                <input value="radio 1" v-model="form.customRadio" name="custom" id="radio1" type="radio" class="radio">
                <label for="radio1" class="block  text-gray-700 font-500 text-[0.9rem] capitalize">Check Toggle this custom radio</label>
              </div>
              <div class="flex items-center gap-0.5 ">
                <input value="radio 2" v-model="form.customRadio" name="custom" id="radio2" type="radio" class="radio">
                <label for="radio2" class="block  text-gray-700 font-500 text-[0.9rem] capitalize">Or toggle this other custom radio</label>
              </div>
            </div>
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2 flex">
            <span class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize">Select</span>
            <div class="w-[72%] ml-auto">
              <FormSelect v-model="form.singleSelect" class="w-full !text-1" value="option 1" :opt="['option 1','option 2','option 3','option 4']"/>
              <select v-model="form.multiSelect" multiple  class="selectBox selectBox-sm w-full mt-1 !text-[0.9rem]">
                <option v-for="item in ['option 1','option 2','option 3','option 4']" :value="item" class="capitalize" >
                  {{item}}
                </option>
              </select>
            </div>
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2">
            <FormInput  v-model="form.successInput" id="success" class="text-[0.9rem]  !py-[0.35rem] w-[72%] ml-auto"  :success="true" form="horizontal" label="Input with success" />
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2">
            <FormInput  v-model="form.errorInput" id="error" class="text-[0.9rem]  !py-[0.35rem] w-[72%] ml-auto" error-message="Please provide your name." :error="true" form="horizontal" label="Input with error" />
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2 flex">
            <span class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize">input size</span>
            <div class="w-[72%] ml-auto">
              <FormInput v-model="form.lg" id="lg" class=" w-full" size="lg"  placeholder="input lg" />
              <FormInput v-model="form.default" id="default" size="default" class="my-1 w-full"   placeholder="input default" />
              <FormInput v-model="form.sm" id="sm" size="sm" class=" w-full"   placeholder="input sm" />
            </div>
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="flex my-2">
            <span class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize">input size</span>
            <div class="w-[72%] ml-auto">
              <row class="!my-0 !py-0">
                <column class="!my-0 !py-0" col="3">
                  <FormInput v-model="form.col"  class=" w-full"   placeholder="col 3" />
                </column>
                <column class="!my-0 !py-0" col="4">
                  <FormInput v-model="form.col"  class=" w-full"   placeholder="col 4" />

                </column>
                <column class="!my-0 !py-0" col="5">
                  <FormInput v-model="form.col"  class=" w-full"   placeholder="col 5" />
                </column>
              </row>
            </div>

          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2 flex">
            <span class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize">input groups</span>
            <div class="w-[72%] ml-auto">
              <FormInput v-model="form.group" class="w-full " id="d-price" icon="bi bi-currency-dollar"/>
              <FormInput v-model="form.group" :icon-reverse="true" class="w-full my-1" id="d-price" icon="bi bi-currency-dollar"/>
              <FormInput v-model="form.group" :icon-both="true" class="w-full my-1" id="d-price" icon="bi bi-currency-dollar" icon-right=".00"/>
              <FormInput v-model="form.group" form="mixed" mixed-type="checkbox"  class="w-full my-1" id="d-price"  />
              <FormInput  v-model="form.group" form="mixed" mixed-type="radio"  class="w-full my-1" id="d-price"  />

            </div>
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2 flex">
            <span class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize">Button addons</span>
            <div class="w-[72%] ml-auto">
              <FormInputGroup  type="outline" button-value="button" v-model="form.group"/>
              <FormInputGroup  type="outline" class="my-1" :button-reverse="true" button-value="button" v-model="form.group"/>
            </div>
          </div>
          <div class="divider !h-[1px]"></div>
          <div class="my-2 flex">
            <span class="block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize">With dropdowns</span>
            <div class="w-[72%] ml-auto">
              <FormInputGroup  type="outline" :button-reverse="true" form="dropdown" button-value="dropdown" v-model="form.group" :dropdown-list="['action','another action','something else']"/>
              <div class="flex mt-2">
                <button @click="showAllInfo" class="btn btn-gray-full btn-sm  mr-1">cancel</button>
                <button @click="showAllInfo" class="btn btn-primary-full btn-sm">save changes</button>
              </div>


            </div>
          </div>

        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">

import {codeEditorValue7} from "~/utils/extraData";

const form=reactive({
  basicEmail:'',
  basicPassword:'',
  horizontalEmail:'',
  horizontalPassword:'',
  floatEmail:'',
  floatPassword:'',
  modalEmail:'',
  modalPassword:'',
  normal:'',
  passwordExample:'',
  helpText:'',
  placeholder:'',
  customCheck:false,
  customRadio:'radio 1',
  singleSelect:'',
  multiSelect:[],
  successInput:'',
  errorInput:'',
  lg:'',
  default:'',
  sm:'',
  col:'',
  group:''
})
const modalFlag=ref(false)
const showInfo=(email:string,password:string)=>{
  alert(JSON.stringify({email:email,password:password}))
}
const showAllInfo = () => {
  alert(JSON.stringify(form))
}

</script>


<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Notifications'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Notifications</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Notifications" :has-menu="!false" body-class="!p-2">
          <p class="article">
            Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.
          </p>
          <p class="article">
            Read more about toast in the official <a href="https://github.com/Maronato/vue-toastification" class="link font-500 text-[0.9rem]">Vue Toastification</a>
          </p>
          <CodeExample :value="codeEditorValue5"/>

          <div class="flex flex-col gap-1 mt-1 items-start">
            <ToastItem type="success" button-class="btn btn-teal-full btn-sm">
              success message
            </ToastItem>
            <ToastItem type="error" button-class="btn btn-red-full btn-sm">
              error message
            </ToastItem>
            <ToastItem type="info" button-class="btn btn-sky-full btn-sm">
              info message
            </ToastItem>


          </div>
        </Card>
      </column>
    </row>

  </div>
</template>

<script setup lang="ts">
import {codeEditorValue5} from "~/utils/extraData";
</script>

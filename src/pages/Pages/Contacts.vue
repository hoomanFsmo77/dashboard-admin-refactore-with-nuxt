<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Contacts'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Contacts</h1>
      </column>
    </row>
    <row>
      <column v-for="(item,index) in contactData" :key="index" col="12" md="4">
        <CardContact :job="item.job" :image="item.image" :name="item.name" :email="item.email" :phone="item.phone"/>
      </column>
    </row>
  </div>



</template>

<script setup lang="ts">
import {contactData} from "~/utils/stateData";
</script>


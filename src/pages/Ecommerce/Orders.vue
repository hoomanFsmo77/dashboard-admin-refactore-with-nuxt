<template>
  <div class="container-fluid">
    <row>
      <column col="12">
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Orders'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Orders</h1>
        <div class="flex gap-1">
          <NuxtLink :to="{name:'index'}" class="text-[0.8rem] text-gray-500 hover:underline">
            <font-awesome-icon icon="fa-solid fa-upload"></font-awesome-icon>
            Import
          </NuxtLink>
          <NuxtLink :to="{name:'index'}" class="text-[0.8rem] text-gray-500 hover:underline">
            <font-awesome-icon icon="fa-solid fa-download"></font-awesome-icon>
            Export
          </NuxtLink>
        </div>
      </column>
    </row>
    <row>
      <column col="12">
        <TableOrderSection :items="10" :has-card="false" :has-link="true" link="Order_details"/>
      </column>
    </row>

  </div>
</template>

<script setup>

</script>


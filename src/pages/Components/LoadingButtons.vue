<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Loading buttons'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Loading buttons</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Loading Buttons - Ladda" :has-menu="!false" body-class="!p-2">
          <p class="article">
            A UI concept which merges loading indicators into the action that invoked them. Primarily intended for use with forms where it gives users immediate feedback upon submit rather than leaving them wondering while the browser does its thing.
          </p>
          <div class="flex gap-1 flex-wrap mb-1.5 items-center">
            <FormBloader class="btn btn-primary-full btn-sm" animation="expand-left" :duration="2000" >
              expand-left
            </FormBloader>
            <FormBloader class="btn btn-primary-full btn-sm" animation="expand-right" :duration="2000" >
              expand-right
            </FormBloader>
            <FormBloader class="btn btn-primary-full btn-sm" animation="expand-up" :duration="2000" >
              expand-up
            </FormBloader>
            <FormBloader class="btn btn-primary-full btn-sm" animation="expand-down" :duration="2000" >
              expand-down
            </FormBloader>
          </div>
          <div class="flex gap-1 flex-wrap mb-1.5 items-center">
            <FormBloader class="btn btn-teal-full btn-sm" animation="zoom-in" :duration="2000" >
              zoom-in
            </FormBloader>
            <FormBloader class="btn btn-teal-full btn-sm" animation="zoom-out" :duration="2000" >
              zoom-out
            </FormBloader>
          </div>
          <div class="flex gap-1 flex-wrap mb-1 items-center">
            <FormBloader class="btn btn-sky-full btn-sm" animation="slide-left" :duration="2000" >
              slide-left
            </FormBloader>
            <FormBloader class="btn btn-sky-full btn-sm" animation="slide-right" :duration="2000" >
              slide-right
            </FormBloader>
            <FormBloader class="btn btn-sky-full btn-sm" animation="slide-up" :duration="2000" >
              slide-up
            </FormBloader>
            <FormBloader class="btn btn-sky-full btn-sm" animation="slide-down" :duration="2000" >
              slide-down
            </FormBloader>
          </div>
          <h5 class="card-header mb-0.5">Built-in progress bar</h5>
          <div class="flex gap-1 flex-wrap mb-1.5 items-center">
            <FormBloader class="btn btn-red-full btn-sm" :progress="true" animation="expand-left" :duration="4000" >
              expand-left
            </FormBloader>
            <FormBloader class="btn btn-red-full btn-sm" :progress="true" animation="expand-right" :duration="4000" >
              expand-right
            </FormBloader>
            <FormBloader class="btn btn-red-full btn-sm" :progress="true" animation="expand-up" :duration="4000" >
              expand-up
            </FormBloader>

          </div>
          <h5 class="card-header mb-0.5">Sizes</h5>
          <div class="flex gap-1 flex-wrap mb-1.5 items-center">
            <FormBloader class="btn btn-primary-full btn-xsm" animation="expand-right" :duration="2000" >
              small
            </FormBloader>
            <FormBloader class="btn btn-primary-full btn-sm" animation="expand-right" :duration="2000" >
              normal
            </FormBloader>
            <FormBloader class="btn btn-primary-full " animation="expand-right" :duration="2000" >
              large
            </FormBloader>


          </div>


        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">


</script>

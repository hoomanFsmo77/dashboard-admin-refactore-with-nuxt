<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Docs',link:'docs-Introduction'},{name:'Introduction'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Docs - Introduction</h1>
      </column>
    </row>
    <row>
      <column col="12" md="10">
        <Card :has-menu="!false" body-class="!p-2">
          <p class="content">
            Hey, welcome to the <span class="!font-700">Hooman Theme [Nuxt] official documentation.</span>
          </p>
          <p class="content">
            If you own a theme’s license already, thank you very much for purchasing! If not yet, you can <NuxtLink :to="{name:'docs-Introduction'}" class="link ">buy the theme’s license here.</NuxtLink>
          </p>
          <p class="content">
            This documentation is to help you with template’s customization. Basic HTML and CSS knowledge is required to customize this template.
          </p>
          <p class="content">
            Theme uses <span class="!font-700">Tailwindcss v3</span> which is based on utility classes and is easy to apply style. Check out documentation <a target="_blank" href="https://tailwindcss.com/" class="link ">here</a>.
          </p>
          <div class="divider !my-2"></div>
          <h5 class="content-header">Theme info</h5>
          <div class="text-[0.9rem] mb-0.85">
            <span class="text-gray-600 uppercase tracking-wide mr-0.5">Item Name:</span>
            <span>Hooman [Nuxt]</span>
          </div>
          <div class="text-[0.9rem] mb-0.85">
            <span class="text-gray-600 uppercase tracking-wide mr-0.5">Author:</span>
            <span>Hooman Mousavi</span>
          </div>
          <div class="text-[0.9rem] mb-0.85">
            <span class="text-gray-600 uppercase tracking-wide mr-0.5">Contact email for support & pre-sale questions:</span>
            <a class="link" href="mailto:hoomanmousavi77@gmail.com">hoomanmousavi77@gmail.com</a>
          </div>
        </Card>
      </column>
    </row>
  </div>
</template>

<script setup>


</script>

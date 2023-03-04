<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Docs',link:'docs-Introduction'},{name:'Directory structure'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Docs - Directory structure</h1>
      </column>
    </row>
    <row>
      <column col="12" md="10">
        <Card :has-menu="!false" body-class="!p-2">
          <h5 class="content-header">Src folder</h5>
          <p class="content">
            All the theme files are located in <code>/src</code> folder. Files here form a demo static site, mostly equivalent to the online demo (CDNs not used here).
          </p>
          <p class="content">
            There is also a file named <span class="content-highlight">Tailwind.config.js</span> that you can configure the Tailwind configs.
          </p>
          <p class="content">You can open any of the files in your code editor to modify their markup or content to suit your needs.</p>
          <h6 class="content-highlight">Src folder also includes these subfolders:</h6>
          <ul class="flex flex-col gap-0.5 list-disc md:pl-2 pl-0.25 ">
            <li >
              <code>/assets</code><span class="content !mb-0 ml-0.5">- where you can find all scss files</span>
            </li>
            <li >
              <code>/public</code><span class="content !mb-0 ml-0.5">- images and svg files</span>
            </li>
            <li >
              <code>/components</code><span class="content !mb-0 ml-0.5">- Vue components</span>
            </li>
            <li >
              <code>/composables</code><span class="content !mb-0 ml-0.5">- Vue component dependencies</span>
            </li>
            <li >
              <code>/utils</code><span class="content !mb-0 ml-0.5">- data sample files for pages and components</span>
            </li>

          </ul>
          <div class="divider !my-2"></div>
          <h5 class="content-header">Style folder</h5>
          <p class="content">Style folder located at /src/styles, contains Tailwind's custom component and utility classes adn structured in the following subfolders:</p>
          <ul class="flex flex-col gap-0.5 list-disc md:pl-2 pl-0.25 ">
            <li >
              <code>assets/Tailwind.config/Tailwind.base.scss</code><span class="content !mb-0 ml-0.5">- where you can find all base styles of elements.</span>
            </li>
            <li >
              <code>assets/Tailwind.config/Tailwind.component.scss</code><span class="content !mb-0 ml-0.5">- where you can find all component styles.</span>
            </li>
            <li >
              <code>assets/Tailwind.config/Tailwind.utilities.scss</code><span class="content !mb-0 ml-0.5">- where you can find custom utility classes.</span>
            </li>
          </ul>

        </Card>
      </column>
    </row>
  </div>
</template>

<script setup>


</script>


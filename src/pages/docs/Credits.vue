<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Docs',link:'docs-Introduction'},{name:'Credits'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Docs - Credits</h1>
      </column>
    </row>
    <row>
      <column col="12" md="10">
        <Card :has-menu="!false" body-class="!p-2">
          <ul class="flex flex-col gap-1 list-disc md:pl-2 pl-0.25 !text-[0.9rem]">
            <li >
              <a class="link" target="_blank" href="https://nuxt.com/">Nuxt</a>
            </li>
            <li >
              <a class="link" href="https://tailwindcss.com/docs/installation">Tailwind</a>
            </li>
            <li >
              <a class="link" href="https://sass-lang.com/">SASS</a>
            </li>
            <li >
              <a class="link" href="https://vuejs.org/guide/introduction.html">Vue js</a>
            </li>
            <li >
              <a class="link" href="https://vuejs.org/guide/introduction.html">vue-router</a>
            </li>
            <li >
              <a class="link" href="https://fonts.google.com/specimen/Poppins">Google Fonts - Poppins</a>
            </li>
            <li >
              <a class="link" href="https://fontawesome.com/start">Font Awesome</a>
            </li>
            <li >
              <a class="link" href="https://leafletjs.com/">LeafletJS</a>
            </li>
            <li >
              <a class="link" href="https://www.npmjs.com/package/vue-sparklines">Vue Sparkline</a>
            </li>
            <li >
              <a class="link" href="https://postcss.org/">PostCss</a>
            </li>
            <li >
              <a class="link" href="https://www.tiny.cloud/docs/tinymce/6/content-formatting/">Tinymce-vue</a>
            </li>
            <li >
              <a class="link" href="https://apexcharts.com/">Apexcharts</a>
            </li>
            <li >
              <a class="link" href="https://github.com/Choices-js/Choices#input-types">Choices.js</a>
            </li>
            <li >
              <a class="link" href="https://epic-spinners.epicmax.co/">Epic-spinners</a>
            </li>
            <li >
              <a class="link" href="https://lab.hakim.se/ladda/">Ladda</a>
            </li>
            <li >
              <a class="link" href="https://github.com/justcaliturner/simple-code-editor?ref=vuejsexamples.com">simple-code-editor</a>
            </li>
            <li >
              <a class="link" href="https://vcalendar.io/">v-calendar</a>
            </li>
            <li >
              <a class="link" href="https://imask.js.org/guide.html#masked-pattern">vue-imask</a>
            </li>
            <li >
              <a class="link" href="https://vue-toastification.maronato.dev/">vue-toastification</a>
            </li>
            <li >
              <a class="link" href="https://namewjp.github.io/vue3-photo-preview/?path=/story/vue3-photo-preview--%E9%BB%98%E8%AE%A4%E5%B1%95%E7%A4%BA">vue3-photo-preview</a>
            </li>
          </ul>
        </Card>
      </column>
    </row>

  </div>
</template>

<script setup>

</script>

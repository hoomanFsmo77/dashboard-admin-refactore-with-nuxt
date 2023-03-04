<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Docs',link:'docs-Introduction'},{name:'Customizing CSS'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Customizing CSS</h1>
      </column>
    </row>
    <row>
      <column col="12" md="10" >
        <Card body-class="!p-2" :has-menu="!false">
          <h5 class="content-header">SCSS Method</h5>
          <p class="content">
            The most flexible way to edit the theme CSS or to add your own code and components to use SCSS. As mentioned before, there is a file named: <span class="content-highlight">tailwind.config.js</span> that includes the spacing value and color palate which you can add your own.
          </p>
          <p class="content">
            To add your own CSS code, declare it in the <code>src/assets/style/components</code> file.
            Then you just need to import it in <code>src/assets/style/Tailwind.config/Tailwind.component.scss</code> like <code>@import "../components/example.scss"</code>
          </p>
          <div class="divider !my-2"></div>
          <h5 class="content-header">Just in time</h5>
          <p class="content">
            In the new version of Tailwind, you can apply your desire utility class in any element without pre-defining and by <span class="content-highlight">JIT(just in time)</span>, Tailwind create your class automatically.
            <a class="link" href="https://tailwindcss.com/docs/upgrade-guide#migrating-to-the-jit-engine">Read here.</a>
          </p>
        </Card>
      </column>
    </row>

  </div>
</template>

<script setup>


</script>

<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Calendar'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Calendar</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Calendar" :has-menu="!false" body-class="!p-2">
          <p class="article">
            A JavaScript event calendar. Customizable and open source. Display a full-size drag-n-drop event calendar.
          </p>
          <p class="article">
            Vue Cal is great for displaying events, but it isn't a complete solution for event content-management. See more about this great plugin at
            <a class="link" target="_blank" href="https://antoniandre.github.io/vue-cal/#installation">Vue-Cal.</a>
          </p>
          <p class="article">
            Theme has built in Vue js wrapper with dynamic import which you can find in <code>src/javascript/components/widgets/Calendar.vue</code>
          </p>
          <CodeExample :value="codeEditorValue2"/>
          <div class="mt-2 w-[0px] min-w-[100%] overflow-auto">
            <Calender/>
          </div>

        </Card>
      </column>
    </row>

  </div>
</template>

<script setup lang="ts">
import {codeEditorValue2} from "~/utils/extraData";

</script>

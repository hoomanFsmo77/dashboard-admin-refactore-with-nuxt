<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Text editor'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Text editor</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Text Editor - Tinymcs" :has-menu="!false" body-class="!p-2">
          <p class="article">
            Your powerful rich text editor. Supports all modern browsers on desktops, tablets and phones. Experience the same consistent behavior and produced HTML across platforms. Read more at
            <a class="link font-500" href="https://www.tiny.cloud/docs/tinymce/6/content-formatting/">https://www.tiny.cloud/docs/tinymce/6/content-formatting/</a>.
          </p>
          <p class="article">
            Theme has built in Vue wrapper which you can find in <code>src/javascript/components/reusable/Editor.vue</code>
          </p>
          <CodeExample :value="codeEditorValue13" class="my-1" />
          <div>
            <Editor value="compose an epic" height="200px"/>
          </div>
        </Card>
      </column>
    </row>

  </div>
</template>

<script setup lang="ts">
import {codeEditorValue13} from "~/utils/extraData";
</script>


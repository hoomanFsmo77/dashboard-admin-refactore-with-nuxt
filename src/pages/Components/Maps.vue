<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Maps'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Maps</h1>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <Card title="Basic Map - One marker" :has-menu="!false" body-class="!p-2">
          <p class="article">
            This is a basic Leaflet map implementation with a custom marker. Everything is for you and this map can be created by calling a simple function.
          </p>
          <client-only>
            <Map height="400px" type="simple" id="map1"/>
          </client-only>
        </Card>
      </column>
      <column col="12" md="6">
        <Card title="Styled Map - One marker" :has-menu="!false" body-class="!p-2">
          <p class="article">
            This is a basic Leaflet map implementation with a custom marker. Everything is for you and this map can be created by calling a simple function.
          </p>
          <client-only>
            <Map height="400px" type="styled" id="map2"/>
          </client-only>
        </Card>
      </column>
    </row>
    <row>
      <column col="12">
        <Card :has-menu="!false" body-class="!p-2" title="Styled Map - Multiple markers with infobox, images and structured content from JSON">
          <p class="article">
            More complex implementation: data are loaded from a JSON file and custom infobox with an image is used in this example. Again, everything's prepared for you.
          </p>
          <client-only>
            <Map height="600px" type="markers" id="map3"/>
          </client-only>

        </Card>
      </column>
    </row>
  </div>
</template>

<script setup>

</script>

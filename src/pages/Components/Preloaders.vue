<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Preloaders'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Preloaders</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <div class="card p-2">
          <p class="article">
            This template comes with preloader component. You can pass <code>variant</code> and <code>type</code> props. You can find it in <code>src/javascript/components/Preoloader.</code> For list of all available types please follow
            <a href="https://github.com/epicmaxco/epic-spinners" class="link font-500">Epic spinners documentation</a>
          </p>
          <p class="article">
            Epic spinners uses hardware accelerated (translate and opacity) CSS animations to create smooth and easily customizable animations.
          </p>
          <CodeExample :value="codeEditorValue6"/>

        </div>
      </column>
    </row>
    <row>
      <column col="12" sm="6" md="3">
        <Card title="flower spinner" :has-menu="!false" body-class="!p-3 flex items-center justify-center">
          <flower-spinner
              :animation-duration="2500"
              :size="70"
              color="#ff1d5e"
          />
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="pixel spinner" :has-menu="!false" body-class="!p-3 flex items-center justify-center">
          <pixel-spinner
              :animation-duration="2000"
              :size="70"
              color="#ff1d5e"
          />
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="hollow dots spinner" :has-menu="!false" body-class="!p-3 !py-4 flex items-center justify-center">
          <hollow-dots-spinner
              :animation-duration="1000"
              :dot-size="15"
              :dots-num="3"
              color="#ff1d5e"
          />
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="intersecting circles" :has-menu="!false" body-class="!p-2.5  flex items-center justify-center">
          <intersecting-circles-spinner
              :animation-duration="1200"
              :size="70"
              color="#ff1d5e"
          />
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="orbit spinner" :has-menu="!false" body-class="!p-3  flex items-center justify-center">
          <orbit-spinner
              :animation-duration="1200"
              :size="55"
              color="#ff1d5e"
          />
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="radar spinner" :has-menu="!false" body-class="!p-3  flex items-center justify-center">
          <radar-spinner
              :animation-duration="2000"
              :size="60"
              color="#ff1d5e"
          />
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="fulfilling bouncing" :has-menu="!false" body-class="!p-2  flex items-center justify-center">
          <fulfilling-bouncing-circle-spinner
              :animation-duration="4000"
              :size="60"
              color="#ff1d5e"
          />
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="fingerprint spinner" :has-menu="!false" body-class="!p-2  flex items-center justify-center">
          <fingerprint-spinner
              :animation-duration="1500"
              :size="64"
              color="#ff1d5e"
          />
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="fulfilling square" :has-menu="!false" body-class="!p-2  flex items-center justify-center">
          <fulfilling-square-spinner
              :animation-duration="4000"
              :size="50"
              color="#ff1d5e"
          />
        </Card>
      </column>
      <column col="12" sm="6" md="3">
        <Card title="spring spinner" :has-menu="!false" body-class="!p-2  flex items-center justify-center">
          <spring-spinner
              :animation-duration="3000"
              :size="60"
              color="#ff1d5e"
          />
        </Card>
      </column>
    </row>

  </div>
</template>

<script setup lang="ts">
import {codeEditorValue6} from "~/utils/extraData";
import { FlowerSpinner ,PixelSpinner,HollowDotsSpinner,IntersectingCirclesSpinner,OrbitSpinner,RadarSpinner,FulfillingBouncingCircleSpinner,FingerprintSpinner,FulfillingSquareSpinner ,SpringSpinner  } from 'epic-spinners'


</script>

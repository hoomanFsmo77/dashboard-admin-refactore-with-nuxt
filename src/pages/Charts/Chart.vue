<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Charts'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Charts</h1>
      </column>
    </row>
    <row>
      <column col="12" md="8">
        <Card title="Line chart Example" :has-menu="!false" body-class="!p-0">
          <div class="p-2">
            <p class="article">
              Charts on this page use <a class="link font-500" href="https://github.com/apexcharts/vue3-apexcharts">apexcharts</a>  - Simple yet flexible JavaScript charting for designers & developers.
            </p>
            <p class="article">
              Theme has built in Vue wrapper. You can find all chart components in <code>src/components/charts </code>folder.
            </p>
            <CodeExample class="mb-1" :value="codeEditorValue7"/>

          </div>
          <div class="px-1">
           <client-only>
             <apexchart type="area" height="350" :options="chart13.chartOptions" :series="chart13.series"></apexchart>
           </client-only>
          </div>
        </Card>
      </column>
      <column col="12" md="4">
        <row class="!pt-0 !mt-0">
          <column class="!pt-0" col="12">
            <Card title="Line chart with primary gradient" :has-menu="!false" body-class="!p-1">
              <client-only>
                <apexchart type="area" height="200" :options="chart14.chartOptions" :series="chart14.series"></apexchart>
              </client-only>


            </Card>
          </column>
          <column col="12">
            <Card title="Bar Chart" :has-menu="!false">
              <client-only>
                <apexchart type="bar" height="200" :options="chart15.chartOptions" :series="chart15.series"></apexchart>
              </client-only>
            </Card>
          </column>
        </row>

      </column>
    </row>
    <row>
      <column col="12" sm="6" md="5">
        <row class="!pt-0 !mt-0">
          <column class="!pt-0 !mt-0" col="12">
            <Card title="Donut Chart" :has-menu="!false" body-class="!p-1">
              <CodeExample class="my-1" :value="codeEditorValue7"/>

              <client-only>
                <apexchart type="donut" height="200" :options="chart16.chartOptions" :series="chart16.series"></apexchart>
              </client-only>
            </Card>

          </column>
          <column col="12">
            <Card title="donut chart 2" :has-menu="!false" body-class="!p-1">
              <CodeExample class="mb-1" :value="codeEditorValue7"/>

              <div>
                <client-only>
                  <apexchart type="radialBar"  height="250" :options="chart7.chartOptions" :series="chart7.series"></apexchart>
                </client-only>
              </div>
            </Card>
          </column>
        </row>

      </column>
      <column col="12" sm="6" md="7">
        <Card title="Bar Chart 2" :has-menu="!false" body-class="!p-1.5">
          <p class="article !mb-0.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, voluptatem.</p>
          <CodeExample class="mb-1" :value="codeEditorValue7"/>
          <div>
           <client-only>
             <apexchart type="bar" height="350" :options="chart17.chartOptions" :series="chart17.series"></apexchart>
           </client-only>
          </div>

        </Card>
      </column>
    </row>
    <row>
      <column col="12" md="6">
        <Card title="Donut chart Example" :has-menu="!false" body-class="!p-2">
          <CodeExample class="mb-1" :value="codeEditorValue7"/>
          <div>
            <client-only>
              <apexchart type="donut" height="250" :options="chart18.chartOptions" :series="chart18.series"></apexchart>
            </client-only>

          </div>
        </Card>
      </column>
      <column col="12" md="6">
        <Card title="Pie chart Example" :has-menu="!false" body-class="!p-2">
          <CodeExample class="mb-1" :value="codeEditorValue7"/>
          <div>
           <client-only>
             <apexchart type="pie" height="250" :options="chart19.chartOptions" :series="chart19.series"></apexchart>
           </client-only>

          </div>
        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import {chart13,chart14,chart15,chart16,chart17,chart7,chart18,chart19} from "~/utils/chartData";
import {codeEditorValue7} from "~/utils/extraData";
</script>

<template>
  <div class="container-fluid">
    <row>
      <column>
        <Breadcrumb :pages="[{name:'home',link:'index'},{name:'Charts - speedometer and Sparklines'}]"/>
        <h1 class="text-primary-dark uppercase tracking-widest !px-0 mt-1.2">Charts - speedometer and Sparklines</h1>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="speedometer" :has-menu="!false" body-class="!p-1">
          <row>
            <column col="12">
              <p class="article">
                100% native and cool looking animated vue speedometer. See more at <a href="https://github.com/palerdot/vue-speedometer" class="link font-500">speedometer</a> homepage.
              </p>
              <CodeExample class="mb-1" :value="codeEditorValue8"/>
            </column>
          </row>

          <row>
            <column col="12" md="3">
              <vue-speedometer
                  :width="200"
                  :height="140"
                  :maxSegmentLabels="0"
                  :customSegmentStops="[0,  350, 750, 1000]"
                  :segments="3"
                  :value="450"
                  :segmentColors='["#0055A4", "#ECEFF4", "#EF4135"]'
                  needleColor='#000080'
                  textColor="${textColor}"
              />
            </column>
            <column col="12" md="3">
              <vue-speedometer
                  :width="200"
                  :height="140"

                  :maxSegmentLabels="0"
                  :segments="3"
                  :value="610"
                  :customSegmentStops="[0,  350, 750, 1000]"
                  :segmentColors='["#bf616a", "#ECEFF4", "#ebcb8b"]'
                  needleColor='#000080'
                  textColor="${textColor}"
              />
            </column>
            <column col="12" md="3">
              <vue-speedometer
                  :width="200"
                  :maxSegmentLabels="0"
                  :segments="3"
                  :value="864"
                  :customSegmentStops="[0,  350, 750, 1000]"
                  :height="140"

                  :segmentColors='["#0055A4", "#a3be8c", "#d08770"]'
                  needleColor='#000080'
                  textColor="${textColor}"
              />
            </column>
            <column col="12" md="3">
              <vue-speedometer
                  :width="200"
                  :maxSegmentLabels="0"
                  :segments="3"
                  :height="140"
                  :value="120"
                  :customSegmentStops="[0,  350, 750, 1000]"
                  :segmentColors='["#a3be8c", "#0055A4", "#EF4135"]'
                  needleColor='#000080'
                  textColor="${textColor}"
              />
            </column>
          </row>

        </Card>
      </column>
    </row>
    <row>
      <column col="12">
        <Card title="Sparkline" :has-menu="!false" body-class="!p-1">
          <row>
            <column col="12">
              <p class="article">
                Generate SVG sparklines with JavaScript without any external dependency. See more at
                <a href="https://github.com/fnando/sparkline" class="link font-500">Sparkline homepage.</a>
              </p>
              <p class="article">Theme contains React Sparkline component. You can find it in <code>src/javascript/components/Sparkline.</code></p>
              <CodeExample class="mb-1" :value="codeEditorValue9"/>
            </column>
          </row>
          <row>
            <column col="12">
              <row>
                <column col="12" md="3">
                  <div class="flex justify-between items-center">
                    <Sparkline type="tooltip" :info="btc" />
                    <h6 class="card-header">BTC price</h6>
                  </div>
                  <div class="flex mt-1 justify-between items-center">
                    <Sparkline type="tooltip" :info="eth" />
                    <h6 class="card-header">ETH price</h6>
                  </div>
                </column>
                <column col="12" md="6" class="ml-auto flex flex-wrap gap-1.3">
                  <Sparkline color="blue" area="rgba(0, 0, 255, .3)" :info="[1, 5, 2, 4, 8, 3, 7]"/>
                  <Sparkline color="red" area="rgba(255, 0, 0, .3)" :info="[1, 5, 2, 4, 8, 3, 7]"/>
                  <Sparkline color="green" area="rgba(0, 255, 0, .3)" :info="[1, 5, 2, 4, 8, 3, 7]"/>
                  <Sparkline color="gray" area="#A6A6A6" :info="[1, 5, 2, 4, 8, 3, 7]"/>
                  <Sparkline color="orange" area="#FFA15B" :info="[1, 5, 2, 4, 8, 3, 7]"/>
                  <Sparkline color="indigo" area="#5D41F1" :info="[1, 5, 2, 4, 8, 3, 7]"/>
                  <Sparkline color="yellow" area="#D3CF42" :info="[1, 5, 2, 4, 8, 3, 7]"/>
                  <Sparkline color="purple" area="#D855B9" :info="[1, 5, 2, 4, 8, 3, 7]"/>
                </column>
                <column col="2"></column>
              </row>

            </column>
          </row>
        </Card>
      </column>
    </row>
  </div>
</template>

<script setup lang="ts">
import VueSpeedometer from "vue-speedometer"
import {codeEditorValue9,codeEditorValue8} from "~/utils/extraData";
let btc = [
  {name: "Bitcoin", date: "2017-01-01", value: 967.6},
  {name: "Bitcoin", date: "2017-02-01", value: 957.02},
  {name: "Bitcoin", date: "2017-03-01", value: 1190.78},
  {name: "Bitcoin", date: "2017-04-01", value: 1071.48},
  {name: "Bitcoin", date: "2017-05-01", value: 1354.21},
  {name: "Bitcoin", date: "2017-06-01", value: 2308.08},
  {name: "Bitcoin", date: "2017-07-01", value: 2483.5},
  {name: "Bitcoin", date: "2017-08-01", value: 2839.18},
  {name: "Bitcoin", date: "2017-09-01", value: 4744.69},
  {name: "Bitcoin", date: "2017-10-01", value: 4348.09},
  {name: "Bitcoin", date: "2017-11-01", value: 6404.92},
];
let eth = [
  {name: "Ethereum", date: "2017-01-01", value: 8.3},
  {name: "Ethereum", date: "2017-02-01", value: 10.57},
  {name: "Ethereum", date: "2017-03-01", value: 15.73},
  {name: "Ethereum", date: "2017-04-01", value: 49.51},
  {name: "Ethereum", date: "2017-05-01", value: 85.69},
  {name: "Ethereum", date: "2017-06-01", value: 226.51},
  {name: "Ethereum", date: "2017-07-01", value: 246.65},
  {name: "Ethereum", date: "2017-08-01", value: 213.87},
  {name: "Ethereum", date: "2017-09-01", value: 386.61},
  {name: "Ethereum", date: "2017-10-01", value: 303.56},
  {name: "Ethereum", date: "2017-11-01", value: 298.21},
];


</script>

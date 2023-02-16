import ApexCharts from 'apexcharts';
import VueApexCharts from "vue3-apexcharts";


export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.config.globalProperties.$apexcharts = ApexCharts;
    // nuxtApp.vueApp.use(VueApexCharts)
    nuxtApp.vueApp.component('apexchart',VueApexCharts)
})
import vCollapsible from "~/composables/vCollapsible";
export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.directive('collapsible',vCollapsible)
})
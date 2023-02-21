import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  faAlignJustify,faEnvelope,faArrowUpFromBracket,faStore,faBatteryThreeQuarters,faDollarSign,faUserGroup} from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faApple,faDropbox,faAndroid,faCcVisa,faCcMastercard,faCcDiscover} from '@fortawesome/free-brands-svg-icons'
import {faNoteSticky} from '@fortawesome/free-regular-svg-icons'

export default defineNuxtPlugin(nuxtApp=>{
    library.add(faAlignJustify,faTwitter,faEnvelope,faArrowUpFromBracket,faNoteSticky,faApple,faDropbox,faAndroid,faStore,faBatteryThreeQuarters,faDollarSign,faUserGroup,faCcVisa,faCcMastercard,faCcDiscover)
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
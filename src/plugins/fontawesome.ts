import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  faAlignJustify,faEnvelope,faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faNoteSticky} from '@fortawesome/free-regular-svg-icons'

export default defineNuxtPlugin(nuxtApp=>{
    library.add(faAlignJustify,faTwitter,faEnvelope,faArrowUpFromBracket,faNoteSticky)
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
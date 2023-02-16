

export default defineNuxtConfig({
    runtimeConfig:{
        public:{
            sidebar_api:process.env.SIDEBAR_API
        }

    },
    postcss:{
        plugins: {
            "tailwindcss/nesting": {},
            "postcss-import": {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build:{
        transpile:['vue-toastification'],
    },
    css:[
        '~/assets/style/App.scss',
        '~/assets/style/Tailwind.config/Tailwind.base.scss',
        '~/assets/style/Tailwind.config/Tailwind.component.scss',
        '~/assets/style/Tailwind.config/Tailwind.utilities.scss',
        'v-calendar/dist/style.css',
        'vue3-photo-preview/dist/index.css',
        'ladda/dist/ladda-themeless.min.css',
        'leaflet/dist/leaflet.css',
        '@vueform/slider/themes/default.css',
    ],
    app:{
        rootId:'v-app',
        rootTag:'div',
        head:{
            title:'Nuxt and Tailwind Dashboard Admin',
            link:[
                {
                    rel:'icon',href:'/d_logo.png'
                }
            ],
            meta: [
                { name: 'viewport', content: 'width=device-width ,initial-scale=1.0' },
                { name: 'description', content: 'welcome to My project' },
                { name: 'keyword', content: 'HTML,CSS,Js developer' },
                { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' },
            ],
            bodyAttrs:{}
        }
    },
    srcDir: './src',
    modules: [
        '@pinia/nuxt','@nuxt/image-edge'
    ],
})

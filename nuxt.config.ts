
export default defineNuxtConfig({
    image: {
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/dhpxutwun/image/upload/'
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
                    rel:'icon',href:'https://res.cloudinary.com/dhpxutwun/image/upload/v1677917716/dashboard/d_logo_liscqp.png'
                },
                {
                    rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css'
                },
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
